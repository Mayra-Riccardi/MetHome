import { PulseLoader } from "react-spinners"
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
        <PulseLoader color="blue" margin={15} size={27} />
    </div>
  )
}

export default Loading;