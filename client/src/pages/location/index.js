import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import {
  MainWrapper,
  LocationTitle,
  MapWrapper,
  LocationWrapper
} from "./style";
import LocationItem from "./components/LocationItem";

import building1 from "../../sources/building1.jpg";
import building2 from "../../sources/building2.jpg";

const mapStyles = {
  width: "100%",
  height: "100%"
};
const defaultCenter = {
  lat: -35.295407,
  lng: 149.122908
};

const tileData = [
  {
    img: building1,
    name: "Sydney",
    phone: "0421234567",
    email: "CSCSydney@gmail.com",
    address: "857 George St, Sydney NSW 2000, Australia"
  },
  {
    img: building2,
    name: "Melbourne",
    phone: "0421234568",
    email: "CSCMelbourne@gmail.com",
    address: "743-751 Swanston St, Carlton VIC 3053, Australia"
  }
];
export default function Location() {
  const [selected, setSelected] = useState({});
  const [zoomSize, setZoomSize] = useState(6);
  const [center, setCenter] = useState({
    lat: -35.295407,
    lng: 149.122908
  });
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
        <Grid container>
          <Grid item lg={6} sm={12}>
            <LocationWrapper>
              <Grid container spacing={3}>
                {tileData.map((object, i) => (
                  <Grid item lg={6} sm={6} xs={12}>
                    <LocationItem item={object} index={i}></LocationItem>{" "}
                  </Grid>
                ))}
              </Grid>
            </LocationWrapper>
          </Grid>{" "}
          <Grid item lg={6} sm={12} xs={12}>
            <LocationTitle>Location</LocationTitle>
            <MapWrapper>
              {" "}
              <LoadScript googleMapsApiKey="AIzaSyBuURePm1_0Vr_RO4fTxpECjP_H2UHPQmk">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={zoomSize}
                  center={center}
                >
                  {locations.map(item => {
                    return (
                      <Marker
                        key={item.name}
                        position={item.location}
                        onClick={() => {
                          onSelect(item);
                          setZoomSize(10);
                          setCenter(item.location);
                        }}
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
            </MapWrapper>{" "}
          </Grid>
        </Grid>
      </MainWrapper>
    </React.Fragment>
  );
}
