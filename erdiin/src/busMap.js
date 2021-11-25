import './busMap.css'
import { useEffect } from 'react';
import {positionA, positionB} from './positions.js'

import * as facLoc from "./FacilityLocationInfo";

const { kakao } = window;
let map;

const MapContainer = () => {
    
    useEffect(() => {
        busMap();

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



const busMap = () =>{
    const container = document.getElementById('myMap');
    const options = {
    center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
    level: 3
    };
    map = new kakao.maps.Map(container, options);


    // const imgSrc = 'https://github.com/JNU-erdiin/JNU_InformationWeb/blob/803c95a318738d58b58784236853f8717c8d8c0f/img/bus-stop.png?raw=true', 
    //   busImgSize = new kakao.maps.Size(64, 69),
    //   busImgOption = {offset: new kakao.maps.Point(27, 69)}; 

    // const markerImage = new kakao.maps.MarkerImage(busImgSrc,busImgSize,busImgOption);
    // const markerPos = new kakao.maps.LatLng(33.459757645661135,126.56156244046907);

    // const marker = new kakao.maps.Marker({
    //     position : markerPos,
    //     image : markerImage
    // })

    // marker.setMap(map)

    positionA.forEach(el=> {
    new kakao.maps.Marker(
        {
            map:map,
            position: new kakao.maps.LatLng(el.lat,el.lng),
            title:el.title,
            // img:markerImage
        }
    );
    });

    positionB.forEach(el => {
    new kakao.maps.Marker(
        {
            map:map,
            position: new kakao.maps.LatLng(el.lat,el.lng),
            title:el.title,
            // img:markerImage
        }
    );
    });

}
export default MapContainer