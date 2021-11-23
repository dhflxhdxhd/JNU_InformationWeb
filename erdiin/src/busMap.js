import React from 'react';
import { useEffect } from 'react';
import {positionA,positionB} from './positions.js'

const { kakao } = window;

const MapContainer = () => {
    
    useEffect(() => {
        busMap();
    }, []);

    return (
        <div id='myMap'></div>
    );
}



const busMap = () =>{
    const container = document.getElementById('myMap');
    const options = {
    center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
    level: 3
    };
    const map = new kakao.maps.Map(container, options);

    const busImgSrc = 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_b_x.png', 
      busImgSize = new kakao.maps.Size(64, 69),
      busImgOption = {offset: new kakao.maps.Point(27, 69)}; 

    const markerImage = new kakao.maps.MarkerImage(busImgSrc,busImgSize,busImgOption);
    const markerPos = new kakao.maps.LatLng(33.459757645661135,126.56156244046907);

    const marker = new kakao.maps.Marker({
        position : markerPos,
        image : markerImage
    })

    marker.setMap(map)
    // positionA.forEach(el=> {
    // new kakao.maps.Marker(
    //     {
    //         map:map,
    //         position: new kakao.maps.LatLng(el.lat,el.lng),
    //         title:el.title,
    //         img:markerImage
    //     }
    // );
    // });

    // positionB.forEach(el => {
    // new kakao.maps.Marker(
    //     {
    //         map:map,
    //         position: new kakao.maps.LatLng(el.lat,el.lng),
    //         title:el.title,
    //         img:markerImage
    //     }
    // );
    // });

}
export default MapContainer