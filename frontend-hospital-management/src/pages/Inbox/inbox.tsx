import ButtonAppBar from "../../components/AppBar/appBar"
import './inbox.css';

const hospitalBackspace = require("../../assets/hospital.png");

export function Inbox() {
  return (
    <div>
      <ButtonAppBar />
      <div className="container-image">
        <img src={hospitalBackspace} width={500} />
      </div>
    </div>
  )
};