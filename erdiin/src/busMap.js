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


    const imageSrc = "../img/bus-stop.png", // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);



    let marker = 
    positionA.forEach(element => {
    new kakao.maps.Marker(
        {
            map:map,
            position: new kakao.maps.LatLng(element.lat,element.lng),
            title:element.title,
            img:markerImage
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

    return marker;
}
export default MapContainer