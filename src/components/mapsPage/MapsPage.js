import React, { useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from './mapsPage.module.css';

import LeafletMap from "../leaflet/Leaflet";
import BlockMenu from "../blockMenu/BlockMenu";

import TextFiller from "../textFiller/TextFiller";

import ReactMapGl,
{
  Layer, ScaleControl,
  NavigationControl, GeolocateControl,
  FullscreenControl, Marker, Popup, Source
} from "react-map-gl";
import { LngLat } from 'react-map-gl';
import markerIcon from '../../assets/images/marker-icon.png';

import YorkFirstImg from '../../assets/images/york1.PNG';
import YorkSecondImg from '../../assets/images/york2.PNG';

// for production
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const MapsPage = () => {

  const primaryColor = useSelector(state => state.theme.themeColorPrimary);

    const parkLayer = {
        'id': 'add-3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
            ],
            'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
        }
    }

    const [firstMarker, setFirstMarker] = useState({
        longitude: -74.06342915344241,
        latitude: 40.794616940239536,
    });

    const [secondMarker, setSecondMarker] = useState({
        longitude: -73.97399357604988,
        latitude: 40.78954841007655,
    });

    const [showPopupFirst, setShowPopupFirst] = React.useState(true);
    const [showPopupSecond, setShowPopupSecond] = React.useState(true);

    const onFirstMarkerDrag = useCallback((event) => {

        setFirstMarker({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat
        });
    }, []);

    const onSecondMarkerDrag = useCallback((event) => {

        setSecondMarker({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat
        });
    }, []);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '500px',
        latitude: 40.7811,
        longitude: -74.0630,
        zoom: 12,
        scrollZoom: false,
    });

  const mapRef = useRef()
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  )

  return (
    <div className={classes.mapsWrapper} style={{ color: primaryColor }}>

      <BlockMenu></BlockMenu>

      <TextFiller></TextFiller>
      <TextFiller></TextFiller>

      <div >
        <h2 style={{ marginBottom: "20px", marginTop: "20px", color: primaryColor}} className="">Leaflet map</h2>
        <LeafletMap></LeafletMap>
      </div>
      <div style={{ marginTop: "100px" }}>
        <h2 style={{ marginBottom: "20px", marginTop: "20px", color: primaryColor }} className="">MapBox map</h2>
        <ReactMapGl
          ref={mapRef}
          initialViewState={viewport}
          onViewportChange={handleViewportChange}
          scrollZoom="disable"
          mapboxAccessToken="pk.eyJ1IjoidmxhZHZhc2luZXYiLCJhIjoiY2xpMzd2MnlhMmV4ajNkbnQ2YjlzY2wxZyJ9.vmimI0yPvHzI48xMTztqJg" //pk.eyJ1IjoidmxhZHZhc2luZXYiLCJhIjoiY2xpMzhvaWMxMGRnZTNlbXZqbDA0aGI0eSJ9.2PHt8q4XjKlD8Es3tt0-_g
          style={{  }}
          mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        >

          <Layer {...parkLayer} />
          <ScaleControl />
          <NavigationControl position="top-left" />
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <Marker draggable
              onClick={() => setShowPopupFirst(true)}
              onDrag={onFirstMarkerDrag}
              longitude={firstMarker.longitude}
              latitude={firstMarker.latitude} anchor="bottom" >
              <img src={markerIcon} />
          </Marker>
          <Marker draggable
              onDrag={onSecondMarkerDrag}
              longitude={secondMarker.longitude}
              latitude={secondMarker.latitude} anchor="bottom" >
              <img src={markerIcon} />
          </Marker>
          {showPopupFirst && (
              <Popup longitude={firstMarker.longitude} latitude={firstMarker.latitude}
                  anchor="top"
                  closeOnClick="false"
                  onClose={() => setShowPopupFirst(false)}>
                  place 1
                  <br></br>
                  {firstMarker.longitude}
                  <br></br>
                  {firstMarker.latitude}
                  <br></br>
                  <img style={{ width: "100%", height: "100%" }} src={YorkFirstImg} alt="New York's day"></img>
              </Popup>)}
          {showPopupSecond && (
              <Popup longitude={secondMarker.longitude} latitude={secondMarker.latitude}
                  anchor="top"
                  closeOnClick="false"
                  onClose={() => setShowPopupSecond(false)}>
                  place 2
                  <br></br>
                  {secondMarker.longitude}
                  <br></br>
                  {secondMarker.latitude}
                  <br></br>
                  <img style={{ width: "100%", height: "100%" }} src={YorkSecondImg} alt="New York's night"></img>
              </Popup>)}
        </ReactMapGl>
      </div>
      <TextFiller></TextFiller>
      <TextFiller></TextFiller>
      <TextFiller></TextFiller>
    </div>
  )
}

export default MapsPage;