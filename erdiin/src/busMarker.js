import {positionA, positionB} from './positions.js'
const kakao = { window }

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

    // blue : A , red : B
    const imageSrc_A = "https://github.com/dhflxhdxhd/JNU_InformationWeb/blob/main/img/bus-stop.png?raw=true"; 
    const imageSrc_B = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/bus-stop-red.png?raw=true"; 

     // 마커 이미지의 이미지 크기 입니다
    const imageSize = new kakao.maps.Size(40,40); 
    
     // 마커 이미지를 생성합니다    
    const markerImage_A = new kakao.maps.MarkerImage(imageSrc_A, imageSize); 
    const markerImage_B = new kakao.maps.MarkerImage(imageSrc_B, imageSize); 

    for (let i = 0; i < positionA.length; i ++) {
        let latlng = new kakao.maps.LatLng(positionA[i].lat,positionA[i].lng);
        let title = positionA[i].title

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: latlng, // 마커를 표시할 위치
            title : title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage_A // 마커 이미지 
        });
    }

    for (let i = 0; i < positionB.length; i ++) {
        let latlng = new kakao.maps.LatLng(positionB[i].lat,positionB[i].lng);
        let title = positionA[i].title

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: latlng, // 마커를 표시할 위치
            title : title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage_B // 마커 이미지 
        });
    }
}

export default busMarker