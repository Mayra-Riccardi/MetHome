<?php
header("Access-Control-Allow-Origin: https://metcombustion.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed"]);
    exit;
}

$body = json_decode(file_get_contents("php://input"), true);
if (!$body) {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "Invalid JSON"]);
    exit;
}

$type = $body["type"] ?? "";

// Configuracion del remitente
$from_name    = "MET Combustion";
$from_email   = "contacto@metcombustion.com";
$smtp_host    = "mail.metcombustion.com";
$smtp_user    = "contacto@metcombustion.com";
$smtp_pass    = "Contacto2024!";
$smtp_port    = 587;
$to_email     = "may_ricca5@hotmail.com";

// --- Armar el email segun el tipo ---

if ($type === "contact") {
    $fullname = htmlspecialchars($body["fullname"] ?? "");
    $phone    = htmlspecialchars($body["phone"]    ?? "");
    $email    = htmlspecialchars($body["email"]    ?? "");
    $country  = htmlspecialchars($body["country"]  ?? "");
    $message  = nl2br(htmlspecialchars($body["message"] ?? ""));

    $subject = "Nueva consulta de contacto - $fullname";
    $html = "
    <div style='font-family:sans-serif;line-height:1.6;color:#111'>
      <h2 style='color:#dc143c'>Nueva consulta de contacto</h2>
      <p><strong>Nombre:</strong> $fullname</p>
      <p><strong>Celular:</strong> $phone</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>País:</strong> $country</p>
      <hr/>
      <p><strong>Mensaje:</strong></p>
      <p>$message</p>
    </div>";
    $reply_to = $body["email"] ?? $from_email;

} elseif ($type === "checkout") {
    $buyer    = $body["buyer"]    ?? [];
    $products = $body["products"] ?? [];
    $order_id = htmlspecialchars($body["orderId"] ?? "");

    $fullname = htmlspecialchars($buyer["fullname"] ?? "");
    $phone    = htmlspecialchars($buyer["phone"]    ?? "");
    $email    = htmlspecialchars($buyer["email"]    ?? "");
    $company  = htmlspecialchars($buyer["company"]  ?? "");
    $address  = htmlspecialchars($buyer["address"]  ?? "");
    $province = htmlspecialchars($buyer["province"] ?? "");
    $country  = htmlspecialchars($buyer["country"]  ?? "");
    $message  = nl2br(htmlspecialchars($buyer["message"] ?? ""));

    $product_rows = "";
    foreach ($products as $p) {
        $name     = htmlspecialchars($p["name"]     ?? "");
        $qty      = htmlspecialchars($p["quantity"]  ?? "");
        $category = htmlspecialchars($p["category"] ?? "—");
        $code     = htmlspecialchars($p["code"]     ?? "—");
        $product_rows .= "
        <tr>
          <td style='padding:8px 10px;border-bottom:1px solid #eee'>$name</td>
          <td style='padding:8px 10px;border-bottom:1px solid #eee;text-align:center'>$qty</td>
          <td style='padding:8px 10px;border-bottom:1px solid #eee'>$category</td>
          <td style='padding:8px 10px;border-bottom:1px solid #eee'>$code</td>
        </tr>";
    }

    $subject = "Nueva solicitud de presupuesto - $order_id";
    $html = "
    <div style='font-family:sans-serif;line-height:1.6;color:#111'>
      <h2 style='color:#dc143c'>Nueva solicitud de presupuesto <span>$order_id</span></h2>
      <h3>Datos del solicitante</h3>
      <table style='border-collapse:collapse;width:100%;max-width:600px;border:1px solid #eee'>
        <tr><td style='padding:6px 10px;border-bottom:1px solid #eee;color:#555'>Nombre</td><td style='padding:6px 10px;border-bottom:1px solid #eee'><strong>$fullname</strong></td></tr>
        <tr><td style='padding:6px 10px;border-bottom:1px solid #eee;color:#555'>Celular</td><td style='padding:6px 10px;border-bottom:1px solid #eee'><strong>$phone</strong></td></tr>
        <tr><td style='padding:6px 10px;border-bottom:1px solid #eee;color:#555'>Email</td><td style='padding:6px 10px;border-bottom:1px solid #eee'><strong>$email</strong></td></tr>
        <tr><td style='padding:6px 10px;border-bottom:1px solid #eee;color:#555'>Empresa</td><td style='padding:6px 10px;border-bottom:1px solid #eee'><strong>$company</strong></td></tr>
        <tr><td style='padding:6px 10px;border-bottom:1px solid #eee;color:#555'>Dirección</td><td style='padding:6px 10px;border-bottom:1px solid #eee'><strong>$address</strong></td></tr>
        <tr><td style='padding:6px 10px;border-bottom:1px solid #eee;color:#555'>Provincia</td><td style='padding:6px 10px;border-bottom:1px solid #eee'><strong>$province</strong></td></tr>
        <tr><td style='padding:6px 10px;border-bottom:1px solid #eee;color:#555'>País</td><td style='padding:6px 10px;border-bottom:1px solid #eee'><strong>$country</strong></td></tr>
        <tr><td style='padding:6px 10px;border-bottom:1px solid #eee;color:#555'>Mensaje</td><td style='padding:6px 10px;border-bottom:1px solid #eee'><strong>$message</strong></td></tr>
      </table>
      <h3>Productos</h3>
      <table style='border-collapse:collapse;width:100%;max-width:600px;border:1px solid #eee'>
        <thead>
          <tr style='background:#fafafa'>
            <th style='text-align:left;padding:10px;border-bottom:1px solid #eee'>Producto</th>
            <th style='text-align:center;padding:10px;border-bottom:1px solid #eee'>Cant.</th>
            <th style='text-align:left;padding:10px;border-bottom:1px solid #eee'>Categoría</th>
            <th style='text-align:left;padding:10px;border-bottom:1px solid #eee'>Código</th>
          </tr>
        </thead>
        <tbody>$product_rows</tbody>
      </table>
    </div>";
    $reply_to = $buyer["email"] ?? $from_email;

} else {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "Unknown type"]);
    exit;
}

// --- Enviar via SMTP con sockets ---
function smtp_send($host, $port, $user, $pass, $from_email, $from_name, $to, $reply_to, $subject, $html) {
    $boundary = md5(uniqid(time()));

    $raw  = "Date: " . date("r") . "\r\n";
    $raw .= "From: =?UTF-8?B?" . base64_encode($from_name) . "?= <$from_email>\r\n";
    $raw .= "Reply-To: $reply_to\r\n";
    $raw .= "To: $to\r\n";
    $raw .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $raw .= "MIME-Version: 1.0\r\n";
    $raw .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";
    $raw .= "\r\n";
    $raw .= "--$boundary\r\n";
    $raw .= "Content-Type: text/html; charset=UTF-8\r\n";
    $raw .= "Content-Transfer-Encoding: base64\r\n";
    $raw .= "\r\n";
    $raw .= chunk_split(base64_encode($html)) . "\r\n";
    $raw .= "--$boundary--\r\n";

    $socket = fsockopen("tls://$host", $port, $errno, $errstr, 10);
    if (!$socket) return ["ok" => false, "error" => "No se pudo conectar al servidor SMTP: $errstr"];

    $read = function() use ($socket) { return fgets($socket, 512); };
    $send = function($cmd) use ($socket) { fwrite($socket, $cmd . "\r\n"); };

    $read(); // banner
    $send("EHLO metcombustion.com");
    while (($line = $read()) && substr($line, 3, 1) === '-') {}

    $send("AUTH LOGIN");
    $read();
    $send(base64_encode($user));
    $read();
    $send(base64_encode($pass));
    $resp = $read();
    if (strpos($resp, "235") === false) {
        fclose($socket);
        return ["ok" => false, "error" => "Autenticacion SMTP fallida"];
    }

    $send("MAIL FROM:<$from_email>");
    $read();
    $send("RCPT TO:<$to>");
    $read();
    $send("DATA");
    $read();
    $send($raw . ".");
    $read();
    $send("QUIT");
    fclose($socket);

    return ["ok" => true];
}

$result = smtp_send($smtp_host, $smtp_port, $smtp_user, $smtp_pass, $from_email, $from_name, $to_email, $reply_to, $subject, $html);

http_response_code($result["ok"] ? 200 : 500);
echo json_encode($result);
