import ResponsiveAppBar from "../../components/AppBar/appBar";
import DataGridDemo from "../../components/List/list";

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