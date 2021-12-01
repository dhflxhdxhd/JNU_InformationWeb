import './busMap.css'
import {positionA, positionB} from './positions.js'

const {kakao} = window;
let busMarkers = [];

const createMarker = (position, image) => {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image
    });
    return marker;
}


//과사무실 마커 생성 후 마커배열에 추가하는 함수
const createBusMarkers = () => {
    const imageSrc_A = "https://github.com/dhflxhdxhd/JNU_InformationWeb/blob/main/img/bus-stop.png?raw=true"; 
    for (let i = 0; i < positionA.length; i ++) {
        
        const imageSize = new kakao.maps.Size(30,30); 
        let latlng = new kakao.maps.LatLng(positionA[i].lat,positionA[i].lng);

        let markerImage = new kakao.maps.MarkerImage(imageSrc_A,imageSize);
        let marker = createMarker(latlng,markerImage);

        busMarkers.push(marker);
    }
}

const setBusMarkers = (map) => {
    for(let i=0; i<busMarkers.length; i++){
        busMarkers[i].setMap(map); 
    }
}

function createHtmlContent(title) {
    let str = "<div></div><div class='mapContent'><p class='test'>" + title + "</p></div>"
    return str;
}

const changeMarker = (type,map) => {
    let bus = document.getElementById('bus');

    if (type === 'bus'){
        setBusMarkers(map);

        for (let i=0; i<busMarkers.length; i++) {
            kakao.maps.event.addListener(busMarkers[i], 'click', function () {

                let latlng = new kakao.maps.LatLng(positionA[i].lat,positionA[i].lng);
                let content = createHtmlContent(positionA.title)
                var infoWindow = new kakao.maps.InfoWindow({
                    map: map,
                    position: latlng,
                    content: content,
                    removable: true
                })
            });
        }

    }
}

export {changeMarker, createBusMarkers}

// const busMarker = () =>{


//     const imageSrc_A = "https://github.com/dhflxhdxhd/JNU_InformationWeb/blob/main/img/bus-stop.png?raw=true"; 
//     const imageSrc_B = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/bus-stop-red.png?raw=true"; 

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     // const [isVisible] = useState(true);

//      // 마커 이미지의 이미지 크기 입니다
//     const imageSize = new kakao.maps.Size(30,30); 
    
//      // 마커 이미지를 생성합니다    
//     const markerImage_A = new kakao.maps.MarkerImage(imageSrc_A, imageSize); 
//     const markerImage_B = new kakao.maps.MarkerImage(imageSrc_B, imageSize); 

//     for (let i = 0; i < positionA.length; i ++) {

        
//         let latlng = new kakao.maps.LatLng(positionA[i].lat,positionA[i].lng);
//         let title = positionA[i].title

//         // 마커를 생성합니다
//         let marker = new kakao.maps.Marker({
//             map: map, // 마커를 표시할 지도
//             position: latlng, // 마커를 표시할 위치
//             title : title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//             image : markerImage_A // 마커 이미지 
//         });

//         let infoWindow = new kakao.maps.infoWindow({
//             content : title
//         });
    
//         kakao.maps.event.addListener(marker,'mouseover',infoWindow.open(map,marker,infoWindow));
//         kakao.maps.event.addListener(marker,'mouseover',infoWindow.close(infoWindow));

    // }

//     for (let i = 0; i < positionB.length; i ++) {
//         let latlng = new kakao.maps.LatLng(positionB[i].lat,positionB[i].lng);
//         let title = positionA[i].title

//         // 마커를 생성합니다
//         let marker = new kakao.maps.Marker({
//             map: map, // 마커를 표시할 지도
//             position: latlng, // 마커를 표시할 위치
//             title : title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//             image : markerImage_B // 마커 이미지 
//         });
//     }
    

// }