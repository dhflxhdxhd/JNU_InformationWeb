const {kakao} = window;

//과 사무실 좌표 배열
const positionOffice = [
    //생명자원과학대학
    new kakao.maps.LatLng(33.45829395287701, 126.56276625841375),
    //감귤화훼과학기술센터
    new kakao.maps.LatLng(33.458793459339155,126.56251635312326),
    //자연과학대학 1호관
    new kakao.maps.LatLng(33.45796705673137, 126.56466908097185),
    //자연과학대학 2호관
    new kakao.maps.LatLng(33.458452635460326,126.56047166153468),
    //약학대학
    new kakao.maps.LatLng(33.45736953316251, 126.56013830453905),
    //사회과학대학
    new kakao.maps.LatLng(33.45483698256901, 126.56167843596047),
    //공과대학 1호관
    new kakao.maps.LatLng(33.45711811540354, 126.56554457804513),
    //공과대학 2호관
    new kakao.maps.LatLng(33.45755257119383, 126.56602644390912),
    //공과대학 3호관
    new kakao.maps.LatLng(33.456404920945886, 126.56527923146923),
    //공과대학 4호관
    new kakao.maps.LatLng(33.45471869327195, 126.56521235440862),
    //해양대학 1호관
    new kakao.maps.LatLng(33.45706699370703, 126.5638238375624),
    //해양대학 3호관
    new kakao.maps.LatLng(33.45724014780579, 126.56435002643653),
    //해양대학 4호관
    new kakao.maps.LatLng(33.45485335946973, 126.56633567897074),
    //사범대학 1호관
    new kakao.maps.LatLng(33.454957476169625, 126.56324819984451),
    //사범대학 2호관
    new kakao.maps.LatLng(33.45534635060007, 126.56358506452214),
    //통역번역대학
    new kakao.maps.LatLng(33.45644269373568, 126.56384040865943),
    //간호대학
    new kakao.maps.LatLng(33.45603904142683, 126.56442863680266),
    //미래융합대학
    new kakao.maps.LatLng(33.456770977275106, 126.56361288510824),
    //수의과대학
    new kakao.maps.LatLng(33.45208753580414, 126.55862423237437),
    //인문대학 1호관
    new kakao.maps.LatLng(33.45347507583514, 126.55836444231359),
    //인문대학 2호관
    new kakao.maps.LatLng(33.4528173405885, 126.55848608903368),
    //의과대학
    new kakao.maps.LatLng(33.452886092975994, 126.56390123725441),
    //경상대학 1호관
    new kakao.maps.LatLng(33.45405922327465, 126.56164201463677),
    //경상대학 2호관
    new kakao.maps.LatLng(33.453878272225964, 126.56274001940378),
    //미술관
    new kakao.maps.LatLng(33.45296421606238, 126.5617658369985),
    //음악관
    new kakao.maps.LatLng(33.45232336062159, 126.56283924607867)
]
//기타 시설 좌표 배열
const positionEtc = [
    //학생회관(서점, 카페, 문구점, 안경원...)
    new kakao.maps.LatLng(33.45499742875333, 126.56052136256902),
    //우체국
    new kakao.maps.LatLng(33.45590691839906, 126.56211405173592)
]
//매점 좌표 배열
const positionCvtStore = [
    //공과대학 1호관
    new kakao.maps.LatLng(33.45709670803491, 126.5652246871005),
    //통번대 앞
    new kakao.maps.LatLng(33.456696161127276, 126.56348956388659),
    //학생회관 CU
    new kakao.maps.LatLng(33.454883343832535, 126.5607666359419),
    //교양동 근처 아라홀
    new kakao.maps.LatLng(33.4557356504165, 126.56276296498771),
    //6호관 CU
    new kakao.maps.LatLng(33.45358542389254, 126.55707318841908),
    //도서관 CU
    new kakao.maps.LatLng(33.45244785887272, 126.56107469485441),
]
//프린터기 좌표 배열
const positionPrint = [
    //학생회관 2층 프린터기
    new kakao.maps.LatLng(33.45492102281142, 126.56058628373628),
    //본관 편의점 내 프린터기
    new kakao.maps.LatLng(33.45573553662005, 126.56273069739073),
    //중도 프린터기
    new kakao.maps.LatLng(33.452706607538715, 126.56094432314194),
    //기숙사 프린터기
    new kakao.maps.LatLng(33.45365979497876, 126.55707012136831),
    //수의대 프린터기
    new kakao.maps.LatLng(33.45199497980749, 126.55858436778188)
]
//식당 좌표 배열
const positionRstrt = [
    //백두관식당
    new kakao.maps.LatLng(33.454957000416876, 126.56056190136135),
    //글로벌하우스
    new kakao.maps.LatLng(33.456750153599685, 126.55963589161543),
    //교수회관
    new kakao.maps.LatLng(33.45290144834068, 126.55995381641875),
    //6호관 식당
    new kakao.maps.LatLng(33.45360693536863, 126.55678536167527)
]
//ATM기 좌표 배열
const positionATM = [
    //해대 3호관
    new kakao.maps.LatLng(33.457243672754, 126.56407034648728),
    //본관
    new kakao.maps.LatLng(33.455827631852586, 126.56136421461156),
    //학생회관
    new kakao.maps.LatLng(33.45496622591157, 126.56062101260517),
    //도서관
    new kakao.maps.LatLng(33.45283005167409, 126.56079581023562),
    //아라뮤즈홀
    new kakao.maps.LatLng(33.45394411600208, 126.55969041000085)
]


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
    for (var i = 0; i < positionOffice.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(officeMarker, imageSize),
            marker = createMarker(positionOffice[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        officeMarkers.push(marker);
    }
}

//과사무실 마커들의 지도 표시 여부 설정 함수
const setOfficeMarkers = (map) => {
    for (let i=0; i<officeMarkers.length; i++) {
        officeMarkers[i].setMap(map);
    }
}

//기타시설 마커 생성 후 마커배열에 추가하는 함수
export const createEtcMarkers = () => {
    //기타시설 마커 이미지 주소(grey)
    const etcMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/greypin.png?raw=true";
    for (var i = 0; i < positionEtc.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(etcMarker, imageSize),
            marker = createMarker(positionEtc[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        etcMarkers.push(marker);
    }
}

//기타시설 마커들의 지도 표시 여부 설정 함수
const setEtcMarkers = (map) => {
    for (let i=0; i<etcMarkers.length; i++) {
        etcMarkers[i].setMap(map);
    }
}


//식당 마커 생성 후 마커배열에 추가하는 함수
export const createRstrtMarkers = () => {
    //식당 마커 이미지 주소(orange)
    const rstrtMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/orangepin.png?raw=true";
    for (var i = 0; i < positionRstrt.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(rstrtMarker, imageSize),
            marker = createMarker(positionRstrt[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        rstrtMarkers.push(marker);
    }
}

//식당 마커들의 지도 표시 여부 설정 함수
const setRstrtMarkers = (map) => {
    for (let i=0; i<rstrtMarkers.length; i++) {
        rstrtMarkers[i].setMap(map);
    }
}

//매점 마커 생성 후 마커배열에 추가하는 함수
export const createStoreMarkers = () => {

    //매점 마커 이미지 주소(red)
    const storeMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/redpin.png?raw=true";
    for (var i = 0; i < positionCvtStore.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(storeMarker, imageSize),
            marker = createMarker(positionCvtStore[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        storeMarkers.push(marker);



    }
}

//매점 마커들의 지도 표시 여부 설정 함수
const setStoreMarkers = (map) => {
    for (let i=0; i<storeMarkers.length; i++) {
        storeMarkers[i].setMap(map);
    }
}


//프린터기 마커 생성 후 마커배열에 추가하는 함수
export const createPrintMarkers = () => {
    //프린터기 마커 이미지 주소(green)
    const printMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/greenpin.png?raw=true";
    for (var i = 0; i < positionPrint.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(printMarker, imageSize),
            marker = createMarker(positionPrint[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        printMarkers.push(marker);
    }
}

//프린터기 마커들의 지도 표시 여부 설정 함수    
const setPrintMarkers = (map) => {
    for (let i=0; i<printMarkers.length; i++) {
        printMarkers[i].setMap(map);
    }
}

//atm 마커 생성 후 마커배열에 추가하는 함수
export const createAtmMarkers = () => {
    //atm 마커 이미지 주소(purple)
    const atmMarker = "https://github.com/JNU-erdiin/JNU_InformationWeb/blob/main/img/purplepin.png?raw=true";
    for (var i = 0; i < positionATM.length; i++) {

        let imageSize = new kakao.maps.Size(50, 50);

        // 마커이미지와 마커를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(atmMarker, imageSize),
            marker = createMarker(positionATM[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        atmMarkers.push(marker);
    }
}

//atm 마커들의 지도 표시 여부 설정 함수
const setAtmMarkers = (map) => {
    for (let i=0; i<atmMarkers.length; i++) {
        atmMarkers[i].setMap(map);
    }
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
        setOfficeMarkers(map);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(null);
    }
    else if (type === 'etc') {
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(map);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(null);
    }
    else if (type === 'store') {
        setOfficeMarkers(null);
        setStoreMarkers(map);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(null);
    }
    else if (type === 'rstrt') {
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(map);
        setAtmMarkers(null);
        setPrintMarkers(null);
    }
    else if (type === 'atm') {
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(map);
        setPrintMarkers(null);
    }
    else if (type === 'print') {
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(map);
    }
}