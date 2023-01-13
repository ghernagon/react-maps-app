import { MapState } from "./MapProvider";

//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map, Marker } from "!mapbox-gl";

type MapAction = { type: "setMap"; payload: Map } | { type: "setMarkers"; payload: Marker[] };

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "setMap":
      return { ...state, isMapReady: true, map: action.payload };
    case "setMarkers":
      return { ...state, markers: action.payload };
    default:
      return state;
  }
};
