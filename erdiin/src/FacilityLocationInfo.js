import * as facPos from './facilityPosition';
import * as bus from './busInfo'

import {
    positionATM,
    positionCvtStore,
    positionEtc,
    positionOffice,
    positionPrint,
    positionRstrt
} from "./facilityPosition";
import "./infoWindow.css";

const {kakao} = window;

//각 마커 객체를 가질 배열들
let officeMarkers = [],
    etcMarkers = [],
    storeMarkers = [],
    rstrtMarkers = [],
    atmMarkers = [],
    printMarkers = [];

//좌표와 마커 이미지를 받아 마커생성 후 리턴 함수
const createMarker = (position, image) => {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image
    });
    return marker;
}

//과사무실 마커 생성 후 마커배열에 추가하는 함수
export const createOfficeMarkers = () => {
    //사무실 마커 이미지 주소(blue)
    const officeMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/bluepin.png?raw=true";
    for (var i = 0; i < facPos.positionOffice.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(officeMarker, imageSize),
            marker = createMarker(facPos.positionOffice[i].location, markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        officeMarkers.push(marker);
    }
}

//과사무실 마커들의 지도 표시 여부 설정 함수
export const setOfficeMarkers = (map) => {
    for (let i=0; i<officeMarkers.length; i++) {
        officeMarkers[i].setMap(map);
    }
}

//기타시설 마커 생성 후 마커배열에 추가하는 함수
export const createEtcMarkers = () => {
    //기타시설 마커 이미지 주소(grey)
    const etcMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/greypin.png?raw=true";
    for (var i = 0; i < facPos.positionEtc.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(etcMarker, imageSize),
            marker = createMarker(facPos.positionEtc[i].location, markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        etcMarkers.push(marker);
    }
}

//기타시설 마커들의 지도 표시 여부 설정 함수
export const setEtcMarkers = (map) => {
    for (let i=0; i<etcMarkers.length; i++) {
        etcMarkers[i].setMap(map);
    }
}


//식당 마커 생성 후 마커배열에 추가하는 함수
export const createRstrtMarkers = () => {
    //식당 마커 이미지 주소(orange)
    const rstrtMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/orangepin.png?raw=true";
    for (var i = 0; i < facPos.positionRstrt.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(rstrtMarker, imageSize),
            marker = createMarker(facPos.positionRstrt[i].location, markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        rstrtMarkers.push(marker);
    }
}

//식당 마커들의 지도 표시 여부 설정 함수
export const setRstrtMarkers = (map) => {
    for (let i=0; i<rstrtMarkers.length; i++) {
        rstrtMarkers[i].setMap(map);
    }
}

//매점 마커 생성 후 마커배열에 추가하는 함수
export const createStoreMarkers = () => {

    //매점 마커 이미지 주소(red)
    const storeMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/redpin.png?raw=true";
    for (var i = 0; i < facPos.positionCvtStore.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(storeMarker, imageSize),
            marker = createMarker(facPos.positionCvtStore[i].location, markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        storeMarkers.push(marker);
    }
}

//매점 마커들의 지도 표시 여부 설정 함수
export const setStoreMarkers = (map) => {
    for (let i=0; i<storeMarkers.length; i++) {
        storeMarkers[i].setMap(map);
    }
}


//프린터기 마커 생성 후 마커배열에 추가하는 함수
export const createPrintMarkers = () => {
    //프린터기 마커 이미지 주소(green)
    const printMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/greenpin.png?raw=true";
    for (var i = 0; i < facPos.positionPrint.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(printMarker, imageSize),
            marker = createMarker(facPos.positionPrint[i].location, markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        printMarkers.push(marker);
    }
}

//프린터기 마커들의 지도 표시 여부 설정 함수
export const setPrintMarkers = (map) => {
    for (let i=0; i<printMarkers.length; i++) {
        printMarkers[i].setMap(map);
    }
}

//atm 마커 생성 후 마커배열에 추가하는 함수
export const createAtmMarkers = () => {
    //atm 마커 이미지 주소(purple)
    const atmMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/purplepin.png?raw=true";
    for (var i = 0; i < facPos.positionATM.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(atmMarker, imageSize),
            marker = createMarker(facPos.positionATM[i].location, markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        atmMarkers.push(marker);
    }
}

//atm 마커들의 지도 표시 여부 설정 함수
export const setAtmMarkers = (map) => {
    for (let i=0; i<atmMarkers.length; i++) {
        atmMarkers[i].setMap(map);
    }
}

//인포윈도우 html 생성
function createHtmlContent(title) {
    let str = "<div></div><div class='mapContent'><p class='test'>" + title + "</p></div>"
    return str;
}

//카테고리 클릭 시 type에 따라 카테고리 스타일, 지도 표시 마커 변경
export const changeMarker = (type, map) => {
    let office = document.getElementById('office');
    let etc = document.getElementById('etc');
    let store = document.getElementById('store');
    let rstrt = document.getElementById('rstrt');
    let atm = document.getElementById('atm');
    let print = document.getElementById('print');

    if (type === 'office') {
        bus.setBusMarkers_A(null);
        bus.setBusMarkers_B(null);
        setOfficeMarkers(map);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(null);

        //마커 클릭 이벤트
        for (let i=0; i<officeMarkers.length; i++) {
            kakao.maps.event.addListener(officeMarkers[i], 'click', function () {

                let content = createHtmlContent(positionOffice[i].content)
                var infoWindow = new kakao.maps.InfoWindow({
                    map: map,
                    position: positionOffice[i].location,
                    content: content,
                    removable: true
                })
            });
        }
    }
    else if (type === 'etc') {
        bus.setBusMarkers_A(null);
        bus.setBusMarkers_B(null);
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(map);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(null);

        //마커 클릭 이벤트
        for (let i=0; i<etcMarkers.length; i++) {
            kakao.maps.event.addListener(etcMarkers[i], 'click', function () {

                let content = createHtmlContent(positionEtc[i].title)
                var infoWindow = new kakao.maps.InfoWindow({
                    map: map,
                    position: positionEtc[i].location,
                    content: content,
                    removable: true
                })
            });
        }
    }
    else if (type === 'store') {
        bus.setBusMarkers_A(null);
        bus.setBusMarkers_B(null);
        setOfficeMarkers(null);
        setStoreMarkers(map);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(null);

        //마커 클릭 이벤트
        for (let i=0; i<storeMarkers.length; i++) {
            kakao.maps.event.addListener(storeMarkers[i], 'click', function () {

                let content = createHtmlContent(positionCvtStore[i].title)
                var infoWindow = new kakao.maps.InfoWindow({
                    map: map,
                    position: positionCvtStore[i].location,
                    content: content,
                    removable: true
                })
            });
        }
    }
    else if (type === 'rstrt') {
        bus.setBusMarkers_A(null);
        bus.setBusMarkers_B(null);
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(map);
        setAtmMarkers(null);
        setPrintMarkers(null);

        //마커 클릭 이벤트
        for (let i=0; i<rstrtMarkers.length; i++) {
            kakao.maps.event.addListener(rstrtMarkers[i], 'click', function () {

                let content = createHtmlContent(positionRstrt[i].title)
                var infoWindow = new kakao.maps.InfoWindow({
                    map: map,
                    position: positionRstrt[i].location,
                    content: content,
                    removable: true
                })
            });
        }
    }
    else if (type === 'atm') {
        bus.setBusMarkers_A(null);
        bus.setBusMarkers_B(null);
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(map);
        setPrintMarkers(null);

        //마커 클릭 이벤트
        for (let i=0; i<atmMarkers.length; i++) {
            kakao.maps.event.addListener(atmMarkers[i], 'click', function () {

                let content = createHtmlContent(positionATM[i].title)
                var infoWindow = new kakao.maps.InfoWindow({
                    map: map,
                    position: positionATM[i].location,
                    content: content,
                    removable: true
                })
            });
        }
    }
    else if (type === 'print') {
        bus.setBusMarkers_A(null);
        bus.setBusMarkers_B(null);
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(map);

        //마커 클릭 이벤트
        for (let i=0; i<printMarkers.length; i++) {
            kakao.maps.event.addListener(printMarkers[i], 'click', function () {

                let content = createHtmlContent(positionPrint[i].title)
                var infoWindow = new kakao.maps.InfoWindow({
                    map: map,
                    position: positionPrint[i].location,
                    content: content,
                    removable: true
                })
            });
        }
    }
}