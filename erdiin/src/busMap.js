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


// // maker -> busimg. 수정수정수정수정
// const imgSrc = "../img/bus-stop.png"

// const createMarkerImg = (src,size,options) => {
//     const busImg = new kakao.maps.MarkerImage(src,size,options);
//     return busImg
// }
const busMap = () =>{
    const container = document.getElementById('myMap');
    const options = {
    center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
    level: 3
    };
    const map = new kakao.maps.Map(container, options);

    positionA.forEach(element => {
    new kakao.maps.Marker(
        {
            map:map,
            position: new kakao.maps.LatLng(element.lat,element.lng),
            title:element.title,
            // img:img 
        }
    );
    });

    positionB.forEach(element => {
    new kakao.maps.Marker(
        {
            map:map,
            position: new kakao.maps.LatLng(element.lat,element.lng),
            title:element.title,
        }
    );
    });
}
export default MapContainer