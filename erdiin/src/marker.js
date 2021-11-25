import { positionA , positionB } from "./positions";

const { kakao } = window;
let busMarkers = [];


const createMarkerImage = (src,size) => {
    const markerImage = new kakao.maps.markerImage(src,size);
    return markerImage;
}

const createMarker = (position,image) => {
    let marker = new kakao.maps.Marker({
        position : position,
        image : image
    });
    return marker;
}

export const createBusMarkers = () => {
    
    const imageSrc_A = "https://github.com/dhflxhdxhd/JNU_InformationWeb/blob/main/img/bus-stop.png?raw=true"; 
    const imageSize = new kakao.maps.size(40,40);

    for(let i = 0 ; i<positionA.length; i++){    

        let latlng = new kakao.maps.LatLng(positionA[i].lat,positionA[i].lng);
        let markerImage = createMarkerImage(imageSrc_A,imageSize);
        let marker = createMarker(latlng,markerImage);

        busMarkers.push(marker);
    }
}

const setBusMarkers = (map) => {
    for(let i=0; i<busMarkers.length; i++){
        busMarkers[i].setMap(map);
    }
}


export const changeMarker = (t,map) => {
    const busBtn = document.getElementById('busBtn');

    if (t === 'busBtn'){
        setBusMarkers(map);
    }
}

