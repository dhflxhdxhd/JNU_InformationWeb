import './busMap.css'
import { useEffect } from 'react';
import * as bus from './busInfo'
import * as facLoc from './FacilityLocationInfo';
import {Header} from './navbar'

const { kakao } = window;
let map;

const MapContainer = () => {
    
    useEffect(() => {

        const container = document.getElementById('myMap');
        const options = {
        center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
        level: 3
        };
    
        map = new kakao.maps.Map(container, options);


        bus.createBusMarkers();
        facLoc.createOfficeMarkers();
        facLoc.createStoreMarkers();
        facLoc.createRstrtMarkers();
        facLoc.createAtmMarkers();
        facLoc.createPrintMarkers();
        facLoc.createEtcMarkers();

    }, []);

    return (
        <div className="map">
            <Header />
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
                {/* btn 누르면 marker 없어지도록 추가하기 */}
                <div id="bus" className="bus" onClick={() => bus.changeMarker('bus',map)}><button>순환버스</button></div>
            </div>
            
        </div>
    );
}

export default MapContainer