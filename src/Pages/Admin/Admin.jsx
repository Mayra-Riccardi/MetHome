import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, orderBy, query } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import db, { auth } from "../../DB/DB.js";
import "./Admin.css";

const STATUS_LABELS = {
  pendiente:  { label: "Pendiente",  color: "#f59e0b" },
  aprobado:   { label: "Aprobado",   color: "#22c55e" },
  rechazado:  { label: "Rechazado",  color: "#ef4444" },
  en_proceso: { label: "En proceso", color: "#3b82f6" },
};

const Admin = () => {
  const [user, setUser] = useState(undefined); // undefined = cargando
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("todos");
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u ?? null));
    return unsub;
  }, []);

  useEffect(() => {
    if (user) fetchOrders();
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setLoginError("Email o contraseña incorrectos.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => signOut(auth);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      setOrders(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (error) {
      console.error("Error al cargar órdenes", error);
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (orderId, newStatus) => {
    try {
      await updateDoc(doc(db, "orders", orderId), { status: newStatus });
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
    } catch (error) {
      console.error("Error al actualizar estado", error);
    }
  };

  const formatDate = (ts) => {
    if (!ts) return "—";
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  // Cargando sesión
  if (user === undefined) {
    return <div className="admin-loading">Cargando...</div>;
  }

  // Sin sesión → login
  if (!user) {
    return (
      <div className="admin-login">
        <form className="admin-login__form" onSubmit={handleLogin}>
          <h2>Panel de administración</h2>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setLoginError(""); }}
              placeholder="correo@ejemplo.com"
              autoFocus
              required
            />
          </label>
          <label>
            <span>Contraseña</span>
            <div className="admin-login__input-wrap">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setLoginError(""); }}
                placeholder="Contraseña"
                required
              />
              <button type="button" className="admin-login__eye" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </label>
          {loginError && <p className="admin-login__error">{loginError}</p>}
          <button type="submit" disabled={loginLoading}>
            {loginLoading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    );
  }

  const filtered = filterStatus === "todos"
    ? orders
    : orders.filter((o) => o.status === filterStatus);

  return (
    <div className="admin">
      <div className="admin-header">
        <h1>Presupuestos</h1>
        <div className="admin-header__right">
          <button className="admin-refresh" onClick={fetchOrders}>Actualizar</button>
          <button className="admin-logout" onClick={handleLogout}>Salir</button>
        </div>
      </div>

      <div className="admin-filters">
        {["todos", "pendiente", "en_proceso", "aprobado", "rechazado"].map((s) => (
          <button
            key={s}
            className={`admin-filter ${filterStatus === s ? "admin-filter--active" : ""}`}
            onClick={() => setFilterStatus(s)}
          >
            {s === "todos" ? "Todos" : STATUS_LABELS[s]?.label}
            <span className="admin-filter__count">
              {s === "todos" ? orders.length : orders.filter((o) => o.status === s).length}
            </span>
          </button>
        ))}
      </div>

      {loading ? (
        <p className="admin-loading">Cargando...</p>
      ) : filtered.length === 0 ? (
        <p className="admin-empty">No hay presupuestos en esta categoría.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Empresa</th>
                <th>Email</th>
                <th>Productos</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <>
                  <tr key={order.id} className="admin-row" onClick={() => setExpanded(expanded === order.id ? null : order.id)}>
                    <td>{formatDate(order.createdAt)}</td>
                    <td>{order.buyer?.fullname ?? "—"}</td>
                    <td>{order.buyer?.company ?? "—"}</td>
                    <td>{order.buyer?.email ?? "—"}</td>
                    <td>{order.products?.length ?? 0} ítem(s)</td>
                    <td>
                      <span className="admin-badge" style={{ background: STATUS_LABELS[order.status]?.color ?? "#999" }}>
                        {STATUS_LABELS[order.status]?.label ?? order.status}
                      </span>
                    </td>
                    <td onClick={(e) => e.stopPropagation()}>
                      <select value={order.status} onChange={(e) => changeStatus(order.id, e.target.value)} className="admin-select">
                        <option value="pendiente">Pendiente</option>
                        <option value="en_proceso">En proceso</option>
                        <option value="aprobado">Aprobado</option>
                        <option value="rechazado">Rechazado</option>
                      </select>
                    </td>
                  </tr>
                  {expanded === order.id && (
                    <tr key={`${order.id}-detail`} className="admin-row-detail">
                      <td colSpan={7}>
                        <div className="admin-detail">
                          <div className="admin-detail__buyer">
                            <h4>Datos del solicitante</h4>
                            <p><strong>Teléfono:</strong> {order.buyer?.phone ?? "—"}</p>
                            <p><strong>Dirección:</strong> {order.buyer?.address ?? "—"}</p>
                            <p><strong>Provincia:</strong> {order.buyer?.province ?? "—"}</p>
                            <p><strong>País:</strong> {order.buyer?.country ?? "—"}</p>
                            {order.buyer?.message && <p><strong>Mensaje:</strong> {order.buyer.message}</p>}
                          </div>
                          <div className="admin-detail__products">
                            <h4>Productos</h4>
                            <table className="admin-products-table">
                              <thead>
                                <tr>
                                  <th>Producto</th>
                                  <th>Cant.</th>
                                  <th>Categoría</th>
                                  <th>Código</th>
                                </tr>
                              </thead>
                              <tbody>
                                {(order.products ?? []).map((p, i) => (
                                  <tr key={i}>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.category ?? "—"}</td>
                                    <td>{p.code ?? "—"}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <p className="admin-detail__id">ID: {order.id}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;
