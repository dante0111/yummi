import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import { Component } from "react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 41.311081,
          lng: 69.240562,
        }}
        style={{
          borderRadius: "6px",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        zoom={14}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBAjKp0fRz4OfKnjKzyivrZLBaR4kDz6js",
})(MapContainer);
