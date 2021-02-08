import * as React from "react"
import Gallery from "../components/gallery";
import Header from "../components/header";
import "../styles/index.scss";

// markup
const IndexPage = () => {
  return (
    <div className="main">
      <div>
        <Header />
      </div>
      <div className="content">

        <Gallery />
      </div>
    </div>
  );
}

export default IndexPage
