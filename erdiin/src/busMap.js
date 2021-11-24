import React from 'react';
import './busMap.css'
import { useEffect } from 'react';

import {positionA,positionB} from './positions.js'
import {createOfficeMarkers, createStoreMarkers, createRstrtMarkers, createAtmMarkers, createPrintMarkers, createEtcMarkers, changeMarker} from "./FacilityLocationInfo";

const { kakao } = window;
let map;

const MapContainer = () => {
    
    useEffect(() => {
        busMap();

        createOfficeMarkers();
        createStoreMarkers();
        createRstrtMarkers();
        createAtmMarkers();
        createPrintMarkers();
        createEtcMarkers();
    }, []);

    return (
        <div className="Map">
            <div id='myMap'></div>
            //지도 위 버튼
            <div className="nav">
                <div className="facility">시설정보
                    <div className="category">
                        <ul>
                            <li className="facility_info"><button id="store" className="btn conv" onClick={() => changeMarker('store', map)}>편의점</button></li>
                            <li id="atm" className="facility_info"><button className="btn atm" onClick={() => changeMarker('atm', map)}>ATM</button></li>
                            <li id="office" className="facility_info"><button className="btn room" onClick={() => changeMarker('office', map)}>과사무실</button></li>
                            <li id="rstrt" className="facility_info"><button className="btn cafe" onClick={() => changeMarker('rstrt', map)}>식당</button></li>
                            <li id="print" className="facility_info"><button className="btn cafe" onClick={() => changeMarker('print', map)}>프린터기</button></li>
                            <li id="etc" className="facility_info"><button className="btn cafe" onClick={() => changeMarker('etc', map)}>기타</button></li>
                        </ul>
                    </div>
                </div>
                <div className="bus">순환버스</div>
            </div>
        </div>
    );
}




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
    map = new kakao.maps.Map(container, options);


//     const busImgSrc = 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_b_x.png', 
//       busImgSize = new kakao.maps.Size(64, 69),
//       busImgOption = {offset: new kakao.maps.Point(27, 69)}; 

//     const markerImage = new kakao.maps.MarkerImage(busImgSrc,busImgSize,busImgOption);
//     const markerPos = new kakao.maps.LatLng(33.459757645661135,126.56156244046907);

//     const marker = new kakao.maps.Marker({
//         position : markerPos,
//         image : markerImage
//     })

//     marker.setMap(map)
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

    positionA.forEach(element => {
    new kakao.maps.Marker(
        {
            map:map,
            position: new kakao.maps.LatLng(element.lat,element.lng),
            title:element.title,
            img:imgSrc //임의로 설정해놓음(안되면 에러떠서 진행이 불가ㅠㅠ)
        }
    );
    });


}
export default MapContainer