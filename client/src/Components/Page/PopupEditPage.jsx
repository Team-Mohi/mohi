import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import'./PopupEditPage.css';
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import {PUBLIC_URL} from './../../Constants/public.jsx';
import { AiOutlineClose } from "react-icons/ai";

function PopupEditPage(props){
  const [lat, setLat] = useState(10.7553411);
  const [long, setLong] = useState(106.4150395);
  const [zoom, setZoom] = useState(5);
  const myIcon = L.icon({
    iconUrl: PUBLIC_URL + 'address_icon.png',
    iconSize: [30, 30],
    popupAnchor: [0,-10],
  });
  useEffect(() => {
    let map = L.map('map_page').setView([lat, long], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	maxZoom: 19,
    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // default location in HCM city if wasn't choose location
    let marker_first = L.marker([lat, long], {icon: myIcon, draggable:'true'}).addTo(map)
        .bindPopup('ReactJS Việt Nam')
        .openPopup();
     marker_first.on('dragend', function(event) {
        let marker = event.target;
        let result = marker.getLatLng();
        setLat(result.lat);
        setLong(result.lng);
    });

    //search and choose location
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);
    searchControl.on("results", function (data) {
      map.removeLayer(marker_first)
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        let marker_search = L.marker(data.results[i].latlng, {icon: myIcon, draggable:'true'})
        setLat(marker_search._latlng.lat);
        setLong(marker_search._latlng.lng);
        results.addLayer(marker_search);
        marker_search.on('dragend', function(event) {
            let marker = event.target;
            let result = marker.getLatLng();
            setLat(result.lat);
            setLong(result.lng);
        });
      }
    });
  }, []);

  const savePageAddress = () => {
    console.log(lat, long);
    props.closeEditLocationPageFunc()
  }

  const closeEditLocationPage = () => {
    props.closeEditLocationPageFunc()
  }

    return(
      <div className="popup-edit-page">
        <div className="popup-edit-page-container" onClick={closeEditLocationPage}>
          <AiOutlineClose />
        </div>
        <div className="map-page-container" >
          <h5>Chỉnh sửa vị trí cửa hàng <Link to="">ReactJS Việt Nam</Link><small>( Di chuyển vị trí có sẵn hoặc tìm kiếm địa điểm để cài đặt lại vị trí )</small></h5>
          <div id="map_page" className="map_page"></div>
          <div className="map-page-button">
            <button type="submit" onClick={savePageAddress}>Xác nhận</button>
          </div>
        </div>
      </div>
    )
  }

export default PopupEditPage;
