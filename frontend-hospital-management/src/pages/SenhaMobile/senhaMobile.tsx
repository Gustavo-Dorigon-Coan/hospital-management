import { Link } from "react-router-dom";
import AppBarMobile from "../../components/AppBarMobile/appBarMobile";
import PasswordMobile from "../../components/PasswordMobile/passwordMobile";
import PasswordMobilePriority from "../../components/PasswordMobilePriority/passwordMobilePriority";
import PasswordUser from "../../components/PasswordUser/passwordUser";

import './senhaMobile.css';


export function SenhaMobile(){
  return(
    <div>
      <div>
        <AppBarMobile/>
      </div>
      <div>
        <PasswordMobile/>
      </div>
      <div>
        <PasswordMobilePriority/>
      </div>
      <div>
        <PasswordUser/>
      </div>
      <div className='container-position-back'>
          <div className='container-align-back'>
            <Link to='/mobileHome'>
              <button className='my-button-back'>
                Voltar
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}