import AppBarMobile from "../../components/AppBarMobile/appBarMobile";
import PasswordMobile from "../../components/PasswordMobile/passwordMobile";
import PasswordMobilePriority from "../../components/PasswordMobilePriority/passwordMobilePriority";
import PasswordUser from "../../components/PasswordUser/passwordUser";


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
    </div>
  )
}