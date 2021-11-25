const kakao = {window};
let busMarkers = [];

//좌표와 마커 이미지를 받아 마커생성 후 리턴 함수
const createMarker = (position, image) => {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image
    });
    return marker;
}

//과사무실 마커 생성 후 마커배열에 추가하는 함수
const createMarkers = (imgSrc,position) => {
    //사무실 마커 이미지 주소(blue)
    const officeMarker = {imgSrc};
    for (var i = 0; i < {position}.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(officeMarker, imageSize),
            marker = createMarker({position}[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        busMarkers.push(marker);
    }
}

//과사무실 마커들의 지도 표시 여부 설정 함수
const setMarkers = (map) => {
    for (let i=0; i<busMarkers.length; i++) {
        busMarkers[i].setMap(map);
    }
}

export { createMarker, createMarkers, setMarkers }

