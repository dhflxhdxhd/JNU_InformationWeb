import "../busMap.css";
import { positionA, positionB } from "../Item/positions.js";
import * as facLoc from "./FacilityLocationInfo";
import { callTime } from "./time.js";

const { kakao } = window;
let busMarkers_A = [];
let busMarkers_B = [];

const createMarker = (position, image) => {
  var marker = new kakao.maps.Marker({
    position: position,
    image: image,
  });
  return marker;
};

//과사무실 마커 생성 후 마커배열에 추가하는 함수
const createBusMarkers = () => {
  const imageSrc_A =
    "https://raw.githubusercontent.com/dhflxhdxhd/erdiin-JNU-information/main/erdiin_web/img/bus-stop.png";
  const imageSrc_B =
    "https://raw.githubusercontent.com/dhflxhdxhd/erdiin-JNU-information/main/erdiin_web/img/bus-stop-red.png";
  const imageSize = new kakao.maps.Size(30, 30);

  for (let i = 0; i < positionA.length; i++) {
    let latlng = new kakao.maps.LatLng(positionA[i].lat, positionA[i].lng);

    let markerImage = new kakao.maps.MarkerImage(imageSrc_A, imageSize);
    let marker = createMarker(latlng, markerImage);

    busMarkers_A.push(marker);
  }

  for (let i = 0; i < positionB.length; i++) {
    console.log("positionB.length : " + positionB.length);
    let latlng = new kakao.maps.LatLng(positionB[i].lat, positionB[i].lng);

    let markerImage = new kakao.maps.MarkerImage(imageSrc_B, imageSize);
    let marker = createMarker(latlng, markerImage);

    busMarkers_B.push(marker);
  }
};

export const setBusMarkers_A = (map) => {
  for (let i = 0; i < busMarkers_A.length; i++) {
    busMarkers_A[i].setMap(map);
  }
};

export const setBusMarkers_B = (map) => {
  for (let i = 0; i < busMarkers_B.length; i++) {
    busMarkers_B[i].setMap(map);
  }
};

function createHtmlContent(title, name, num) {
  let str =
    "<div class='busContent'><div class='busstop'>" +
    title +
    "</div><div class='limit'>" +
    callTime(name, num) +
    "분 뒤에 버스가 도착합니다.</div></div>";
  return str;
}

const changeMarker = (type, map) => {
  let bus = document.getElementById("bus");

  if (type === "bus") {
    setBusMarkers_A(map);
    setBusMarkers_B(map);
    facLoc.setOfficeMarkers(null);
    facLoc.setStoreMarkers(null);
    facLoc.setEtcMarkers(null);
    facLoc.setRstrtMarkers(null);
    facLoc.setAtmMarkers(null);
    facLoc.setPrintMarkers(null);

    for (let i = 0; i < busMarkers_A.length; i++) {
      kakao.maps.event.addListener(busMarkers_A[i], "click", function () {
        let latlng = new kakao.maps.LatLng(positionA[i].lat, positionA[i].lng);
        let content = createHtmlContent(positionA[i].title, "A", i);
        var infoWindow = new kakao.maps.InfoWindow({
          map: map,
          position: latlng,
          content: content,
          removable: true,
        });
      });
    }

    for (let i = 0; i < busMarkers_B.length; i++) {
      kakao.maps.event.addListener(busMarkers_B[i], "click", function () {
        let latlng = new kakao.maps.LatLng(positionB[i].lat, positionB[i].lng);
        let content = createHtmlContent(positionB[i].title, "B", i);
        var infoWindow = new kakao.maps.InfoWindow({
          map: map,
          position: latlng,
          content: content,
          removable: true,
        });
      });
    }
  } else if (type === "A") {
    setBusMarkers_A(map);
    setBusMarkers_B(null);
    facLoc.setOfficeMarkers(null);
    facLoc.setStoreMarkers(null);
    facLoc.setEtcMarkers(null);
    facLoc.setRstrtMarkers(null);
    facLoc.setAtmMarkers(null);
    facLoc.setPrintMarkers(null);

    for (let i = 0; i < busMarkers_A.length; i++) {
      kakao.maps.event.addListener(busMarkers_A[i], "click", function () {
        let latlng = new kakao.maps.LatLng(positionA[i].lat, positionA[i].lng);
        let content = createHtmlContent(positionA[i].title, "A", i);
        var infoWindow = new kakao.maps.InfoWindow({
          map: map,
          position: latlng,
          content: content,
          removable: true,
        });
      });
    }
  } else if (type === "B") {
    setBusMarkers_A(null);
    setBusMarkers_B(map);
    facLoc.setOfficeMarkers(null);
    facLoc.setStoreMarkers(null);
    facLoc.setEtcMarkers(null);
    facLoc.setRstrtMarkers(null);
    facLoc.setAtmMarkers(null);
    facLoc.setPrintMarkers(null);

    for (let i = 0; i < busMarkers_B.length; i++) {
      kakao.maps.event.addListener(busMarkers_B[i], "click", function () {
        let latlng = new kakao.maps.LatLng(positionB[i].lat, positionB[i].lng);
        let content = createHtmlContent(positionB[i].title, "B", i);
        var infoWindow = new kakao.maps.InfoWindow({
          map: map,
          position: latlng,
          content: content,
          removable: true,
        });
      });
    }
  }
};

export { changeMarker, createBusMarkers };
