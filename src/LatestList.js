function LatestList() {
  return (
    <div className="card">
      <div className="card-header">Latest visited places</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href="#">St. Anne's Orphanage</a>
          <span className="d-flex">
            <small>Added 3 months ago</small>
          </span>
        </li>
        <li className="list-group-item">
          <a href="#">Belgo, Shawi's Decaying Factory</a>
          <span className="d-flex">
            <small>Added 2 year ago</small>
          </span>
        </li>
        <li className="list-group-item">
          <a href="#">Fading Memories of St-Damien</a>
          <span className="d-flex">
            <small>Added 2 year ago</small>
          </span>
        </li>
        <li className="list-group-item">
          <a href="#" style={{ display: "inline-block" }}>
            Lake Edward's Abandoned Sanatorium
          </a>
          <span className="d-flex">
            <small>Added 4 year ago</small>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default LatestList;
