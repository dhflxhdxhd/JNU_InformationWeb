import './busMap.css'
import { useEffect } from 'react';
import {Header} from './navbar'
import * as bus from './Modules/busInfo'
import * as facLoc from './Modules/FacilityLocationInfo';

const { kakao } = window;
let map;
let facilityFlag=0;
let busFlag = 0;

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

    const btnClick = () => {
        if (facilityFlag===0) {
            document.querySelector('.category').style.display = "block";
            facilityFlag = 1;
        }
        else if (facilityFlag===1) {
            document.querySelector('.category').style.display = "none";
            facilityFlag=0;
        }
    }

    return (
        <div className="map">
            <Header />
            <div id='myMap'></div>   
            <div id="float" className="float btn">
                <div className="facility">
                    <img src="" alt="어디인로고"/>
                    <button className="categoryBtn" onClick={() => btnClick()}>시설정보</button>
                    <div id="categoryWrapper">
                        <ul className="category">
                            <li id="store" className="facility_info">
                                <button className="btn conv" onClick={() => facLoc.changeMarker('store', map)}>
                                    <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/store.png?raw=true" alt="편의점아이콘"/>
                                    편의점
                                </button>
                            </li>
                            <li id="atm" className="facility_info">
                                <button className="btn atm" onClick={() => facLoc.changeMarker('atm', map)}>
                                    <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/atm.png?raw=true" alt="atm아이콘"/>
                                    ATM
                                </button>
                            </li>
                            <li id="office" className="facility_info">
                                <button className="btn room" onClick={() => facLoc.changeMarker('office', map)}>
                                    <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/office.png?raw=true" alt="과사무실 아이콘"/>
                                    과사무실
                                </button>
                            </li>
                            <li id="rstrt" className="facility_info">
                                <button className="btn cafe" onClick={() => facLoc.changeMarker('rstrt', map)}>
                                    <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/restaurant.png?raw=true" alt="식당아이콘"/>
                                    식당
                                </button>
                            </li>
                            <li id="print" className="facility_info">
                                <button className="btn cafe" onClick={() => facLoc.changeMarker('print', map)}>
                                    <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/print.png?raw=true" alt="프린터기 아이콘"/>
                                    프린터기
                                </button>
                            </li>
                            <li id="etc" className="facility_info">
                                <button className="btn etc" onClick={() => facLoc.changeMarker('etc', map)}>
                                    <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/information.png?raw=true" alt="기타 아이콘"/>
                                    기타
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* btn 누르면 marker 없어지도록 추가하기 */}
                <div id="bus" className="bus" onClick={() => bus.changeMarker('bus',map)}><button className= "busBtn">순환버스</button></div>
            </div>
        </div>
    );
}

export default MapContainer