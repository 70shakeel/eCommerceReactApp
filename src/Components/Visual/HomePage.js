import React from "react";
import menCatalog from "../../Assets/menCatalog.jpg";
import womenCatalog from "../../Assets/womenCatalog.jpg";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          Mens Catalog
          <img src={menCatalog} alt="" width="100%" height="90%" />
        </div>
        <div className="col-md-6">
          Women Catalog
          <img src={womenCatalog} alt="" width="100%" height="90%" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
