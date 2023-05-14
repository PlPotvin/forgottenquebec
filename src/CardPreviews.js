function CardPreviews() {
  return (
    <div class="card text-white bg-secondary mb-3">
      <h5
        className="card-header"
        style={{ fontSize: "25px", backgroundColor: "#354f52" }}
      >
        <u>
          <strong>St. Anne's Orphanage</strong>
        </u>
      </h5>
      <div className="card-body">
        <p className="card-text">
          In 1974, the St. Anne's Orphanage located just outside of Quebec City
          was forced to close its doors after a scandalous child abuse case
          rocked the community. Since then, the once vibrant building has been
          left to rot, its halls now...
        </p>
        <hr />
        <div className="row d-flex justify-content-center">
          <img
            className="img-fluid img-thumbnail rounded p-1 border"
            src="./img/PreviewImg/pic1.jpg"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />{" "}
          <img
            className="img-fluid img-thumbnail rounded p-1 border"
            src="./img/PreviewImg/pic2.jpg"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />{" "}
          <img
            className="img-fluid img-thumbnail rounded p-1 border"
            src="./img/PreviewImg/pic3.jpg"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />{" "}
        </div>
        <hr />
        <a href="http://www.example.com" className="btn btn-primary">
          Read more...
        </a>
      </div>
      <div className="card-footer">
        <small>Added 3 months ago</small>
      </div>
    </div>
  );
}

export default CardPreviews;
