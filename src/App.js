import "./App.css";
import Header from "./Header";
import getLogo from "./getLogo";
import Image from "./Image";
import { useState, useEffect } from "react";

function initializeDefaultUrl() {
  return "google.com";
}

function App() {
  const [logoUrl, setLogoUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState(() => initializeDefaultUrl());
  const [loading, setLoading] = useState(true);

  console.log("render");
  console.log(searchTerm);

  function handleSubmitEvent(e) {
    e.preventDefault();
    setSearchTerm(e.target[0].value);
    setLoading(true);
  }

  useEffect(() => {
    getLogo(searchTerm).then((data) => {
      setLoading(false);
      if (data !== undefined) {
        setLogoUrl(data);
      } else {
        setLogoUrl("");
      }
    });
  }, [searchTerm]);

  return (
    <div className="container">
      <Header />
      <form className="search-form" onSubmit={handleSubmitEvent}>
        <input
          defaultValue="google.com"
          type="text"
          className="search-input"
          placeholder="Enter website url"
        />
        <button className="submit-btn" type="submit">
          Search
        </button>
      </form>
      <div className="result-container">
        {loading ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : logoUrl ? (
          <Image logoUrl={logoUrl} logoAlt={"logo"} />
        ) : (
          <h1
            style={{
              color: "red",
              fontFamily: "Righteous",
              letterSpacing: "0.3mm",
            }}
          >
            No logo found!
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
