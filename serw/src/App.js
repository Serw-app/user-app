import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List"
import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List />
    </div>
  );
}







class Map extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 8
    });
  }

  render() {
    return <div id="map" style={{ height: '500px' }} />;
  }
}

export default Map;
