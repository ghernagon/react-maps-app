import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";
//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2hlcm5hZ29uIiwiYSI6ImNsY3NobzIydDBweWYzb2s2aTdoM2prZWoifQ.EOlE6KBtzw1AMaHQvhgabA";

if (!navigator.geolocation) {
  alert("Your browser does not support geolocation");
  throw new Error("Your browser does not support geolocation");
}

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
