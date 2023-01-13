import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoiZ2hlcm5hZ29uIiwiYSI6ImNsY3NobzIydDBweWYzb2s2aTdoM2prZWoifQ.EOlE6KBtzw1AMaHQvhgabA",
  },
});

export default searchApi;
