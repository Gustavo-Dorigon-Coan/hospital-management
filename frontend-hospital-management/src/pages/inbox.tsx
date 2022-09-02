import ResponsiveAppBar from "../components/AppBar/AppBar";
import DataGridDemo from "../components/List/List";


export function Inbox() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="container-list-font">
        <DataGridDemo />
      </div>
    </div>
  )
};