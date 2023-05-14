import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CardPreviews from "./CardPreviews";
import LatestList from "./LatestList";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-10 d-flex justify-content-center">
            <Banner />
          </div>
          <div className="col-1"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7">
            <CardPreviews />
            <CardPreviews />
            <CardPreviews />
          </div>
          <div className="col-md-3">
            <LatestList />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      ;
    </>
  );
}

export default App;
