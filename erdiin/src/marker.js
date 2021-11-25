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
    let busMarker = {imgSrc};

    

    for (let i = 0; i < {position}.length; i++) {
        
        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        let markerImage = new kakao.maps.MarkerImage(busMarker, imageSize),
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




// const busMap = () =>{
//     const container = document.getElementById('myMap');
//     const options = {
//     center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
//     level: 3
//     };

//     map = new kakao.maps.Map(container, options);

//     const busImgSrc = 'https://github.com/JNU-erdiin/JNU_InformationWeb/blob/803c95a318738d58b58784236853f8717c8d8c0f/img/bus-stop.png?raw=true';
//     let busMarkers = [];

//     createBusMarkers();


//     return busMarkers;
// }

export default MapContainer



// const container = document.getElementById('myMap');
// const options = {
// center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
// level: 3
// };
// map = new kakao.maps.Map(container, options);


// const busImgSrc = 'https://github.com/JNU-erdiin/JNU_InformationWeb/blob/803c95a318738d58b58784236853f8717c8d8c0f/img/bus-stop.png?raw=true', 
//       busImgSize = new kakao.maps.Size(50,50),
//       busImgOption = {offset: new kakao.maps.Point(27, 69)}; 

// const markerImage = new kakao.maps.MarkerImage(busImgSrc,busImgSize,busImgOption);
// // const markerPos = new kakao.maps.LatLng(33.45295911653265,126.55767030400025 );

// // const marker = new kakao.maps.Marker({    
// //     position : markerPos,
// //     image : markerImage
// // })

// // marker.setMap(map)

// let busMarkers = [];

// //좌표와 마커 이미지를 받아 마커생성 후 리턴 함수
// const createMarker = (position, image) => {
//     var marker = new kakao.maps.Marker({
//         position: position,
//         image: image
//     });

//     return marker;
// }

// //과사무실 마커 생성 후 마커배열에 추가하는 함수
// const createBusMarkers = () => {
//     //사무실 마커 이미지 주소(blue)
//     const officeMarker = busImgSrc;
//     for (var i = 0; i < positionA.length; i++) {

//         let imageSize = new kakao.maps.Size(50, 50);

//         // 마커이미지와 마커를 생성합니다
//         var markerImage = new kakao.maps.MarkerImage(officeMarker, imageSize),
//             marker = createMarker(positionA[i], markerImage);

//         // 생성된 마커를 커피숍 마커 배열에 추가합니다
//         busMarkers.push(marker);
//     }
// }

// //과사무실 마커들의 지도 표시 여부 설정 함수
// const setBusMarkers = (map) => {
//     for (let i=0; i<busMarkers.length; i++) {
//         busMarkers[i].setMap(map);
//     }
// }

// createBusMarkers();
// setBusMarkers();

// // makeMarkers.createMarkers();
// // makeMarkers.createMarkers(busImgSrc,positionA);
// // makeMarkers.setMarkers();


// // positionA.forEach(el=> {
// // new kakao.maps.Marker(
// //     {
// //         map:map,
// //         position: new kakao.maps.LatLng(el.lat,el.lng),
// //         title:el.title,
// //         // img:markerImage
// //     }
// // );
// // });

// // positionB.forEach(el => {
// // new kakao.maps.Marker(
// //     {
// //         map:map,
// //         position: new kakao.maps.LatLng(el.lat,el.lng),
// //         title:el.title,
// //         // img:markerImage
// //     }
// // );
// // });