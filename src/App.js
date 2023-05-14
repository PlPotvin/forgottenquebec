import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row border">
          <div className="col-1"></div>
          <div className="col-8 border">Stuff here</div>
          <div className="col-2 border">Titles here</div>
          <div className="col-1"></div>
        </div>
      </div>
      ;
    </>
  );
}

export default App;
