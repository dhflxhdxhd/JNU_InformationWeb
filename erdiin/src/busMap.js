import './busMap.css'
import { useEffect } from 'react';
import {positionA, positionB} from './positions.js'
// import * as makeMarkers from './marker.js'
import * as facLoc from "./FacilityLocationInfo";

const { kakao } = window;
let map;

const MapContainer = () => {
    
    useEffect(() => {

        busMarker();

        facLoc.createOfficeMarkers();
        facLoc.createStoreMarkers();
        facLoc.createRstrtMarkers();
        facLoc.createAtmMarkers();
        facLoc.createPrintMarkers();
        facLoc.createEtcMarkers();
    }, []);

    return (
        <div className="Map">
            <div id='myMap'></div>
            <div className="nav">
                <div className="facility">시설정보
                    <div className="category">
                        <ul>
                            <li className="facility_info"><button id="store" className="btn conv" onClick={() => facLoc.changeMarker('store', map)}>편의점</button></li>
                            <li id="atm" className="facility_info"><button className="btn atm" onClick={() => facLoc.changeMarker('atm', map)}>ATM</button></li>
                            <li id="office" className="facility_info"><button className="btn room" onClick={() => facLoc.changeMarker('office', map)}>과사무실</button></li>
                            <li id="rstrt" className="facility_info"><button className="btn cafe" onClick={() => facLoc.changeMarker('rstrt', map)}>식당</button></li>
                            <li id="print" className="facility_info"><button className="btn cafe" onClick={() => facLoc.changeMarker('print', map)}>프린터기</button></li>
                            <li id="etc" className="facility_info"><button className="btn cafe" onClick={() => facLoc.changeMarker('etc', map)}>기타</button></li>
                        </ul>
                    </div>  
                </div>
                <div className="bus">순환버스</div>
            </div>
        </div>
    );
}


// const createMap = () => {
//     const container = document.getElementById('myMap');
//     const options = {
//     center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
//     level: 3
//     };
//     const map = new kakao.maps.Map(container, options);
    
//     return map;
// }

const busMarker = () =>{
    const container = document.getElementById('myMap');
    const options = {
    center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
    level: 3
    };
    const map = new kakao.maps.Map(container, options);

    var imageSrc = "https://github.com/dhflxhdxhd/JNU_InformationWeb/blob/main/img/bus-stop.png?raw=true"; 

     // 마커 이미지의 이미지 크기 입니다
     const imageSize = new kakao.maps.Size(40,40); 
    
     // 마커 이미지를 생성합니다    
     const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    for (let i = 0; i < positionA.length; i ++) {
        let latlng = new kakao.maps.LatLng(positionA[i].lat,positionA[i].lng);
        let title = positionA[i].title
        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: latlng, // 마커를 표시할 위치
            title : title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });


}
    // positionA.forEach(element => {
    // new kakao.maps.Marker(
    //     {
    //         map:map,
    //         position: new kakao.maps.LatLng(element.lat,element.lng),
    //         title:element.title,
    //     }
    // );
    // });

    // positionB.forEach(element => {
    // new kakao.maps.Marker(
    //     {
    //         map:map,
    //         position: new kakao.maps.LatLng(element.lat,element.lng),
    //         title:element.title,
    //     }
    // );
    // });
}

export default MapContainer


