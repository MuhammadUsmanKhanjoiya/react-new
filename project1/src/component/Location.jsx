import GoogleMapReact from "google-map-react";
import Navbar from "./Navbar";

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 24.885467,
      lng: 67.172175,
    },
    zoom: 17,
  };

  return (
    <div className="">
      <div className="mb-10">
        <Navbar />
      </div>

      <div
       
        style={{ height: "80vh", width: "90%" ,margin: "0 auto" }}
      >
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </div>
  );
}
