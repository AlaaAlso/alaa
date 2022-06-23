import React from "react";

function nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Visit{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Exhibitions{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Education
                </a>
              </li>
              <a className="navbar-brand" href="#">
                <img src="L.png" alt="lagend" width="100px" />
              </a>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Events{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default nav;
