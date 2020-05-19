import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import { MainWrapper, LocationTitle, MapWrapper } from "./style";
const mapStyles = {
  width: "100%",
  height: "100%"
};
const defaultCenter = {
  lat: -35.295407,
  lng: 149.122908
};
export default function Location() {
  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  };
  const locations = [
    {
      name: "CSC in Sydney",
      location: {
        lat: -33.883336,
        lng: 151.2025
      },
      locationName: "857 George St, Sydney NSW 2000, Australia",
      phone: "0421234567"
    },
    {
      name: "CSC in Melbourne",
      location: {
        lat: -37.796026,
        lng: 144.963439
      },
      locationName: "743-751 Swanston St, Carlton VIC 3053, Australia",
      phone: "0421234568"
    }
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <MainWrapper>
        <LocationTitle>Location</LocationTitle>
        <MapWrapper>
          {" "}
          <LoadScript googleMapsApiKey="AIzaSyBuURePm1_0Vr_RO4fTxpECjP_H2UHPQmk">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={6}
              center={defaultCenter}
            >
              {locations.map(item => {
                return (
                  <Marker
                    key={item.name}
                    position={item.location}
                    onClick={() => onSelect(item)}
                  />
                );
              })}
              {selected.location && (
                <InfoWindow
                  position={selected.location}
                  clickable={true}
                  onCloseClick={() => setSelected({})}
                >
                  <div>
                    <p>{selected.name}</p>
                    <p>{selected.locationName}</p>
                    <p>{selected.phone}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </MapWrapper>
      </MainWrapper>
    </React.Fragment>
  );
}
