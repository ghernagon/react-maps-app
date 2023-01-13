import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: "false",
    access_token:
      "pk.eyJ1IjoiZ2hlcm5hZ29uIiwiYSI6ImNsY3NobzIydDBweWYzb2s2aTdoM2prZWoifQ.EOlE6KBtzw1AMaHQvhgabA",
  },
});

export default directionsApi;
