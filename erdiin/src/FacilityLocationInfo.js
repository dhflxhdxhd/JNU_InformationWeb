const {kakao} = window;

//과 사무실 좌표 배열
const positionOffice = [
    {
        //생명자원과학대학
        title: '생명자원과학대학',
        location: new kakao.maps.LatLng(33.45829395287701, 126.56276625841375),
        content: '2층 208 식물자원환경전공 사무실 \t064-754-3310\n' +
            '2층 209 산업응용경제학과 사무실 \t064-754-3350\n' +
            '2층 210 동물생명공학전공 사무실 \t064-754-3330\n' +
            '2층 211 분자생명공학전공 사무실 \t064-754-3359\n' +
            '2층 212 바이오소재전공 사무실 \t064-754-3340'
    },
    {
        //감귤화훼과학기술센터
        title: '감귤화훼과학기술센터',
        location: new kakao.maps.LatLng(33.458793459339155,126.56251635312326),
        content: '1층 101-1 원예환경전공 사무실 \t064-754-3320'
    },
    {
        //자연과학대학 1호관
        title: '자연과학대학 1호관',
        location: new kakao.maps.LatLng(33.45796705673137, 126.56466908097185),
        content: '1층 9139 물리학과 사무실 \t064-754-3510\n' +
            '2층 9205 생물학과 사무실 \t064-754-3520\n' +
            '3층 9321 화학코스메틱스학과 사무실 \t064-754-3540\n' +
            '4층 9437 식품영양학과 사무실 \t064-754-3550'
    },
    {
        //자연과학대학 2호관
        title: '자연과학대학 2호관',
        location: new kakao.maps.LatLng(33.458452635460326,126.56047166153468),
        content: '1층(116) 패션의류학과사무실 \t064-754-3530\n' +
            '2층(207) 생활한경복지학부 사무실 \t064-754-3570\n' +
            '3층(318) 수학과 사무실 \t064-754-3560\n' +
            '4층(418) 전산통계확과사무실 \t064-754-3590'
    },
    {
        //약학대학
        title: '약학대학',
        location: new kakao.maps.LatLng(33.45736953316251, 126.56013830453905),
        content: '2층 (약학과사무실) \t064-754-8191'
    },
    {
        //사회과학대학
        title: '사회과학대학',
        location: new kakao.maps.LatLng(33.45483698256901, 126.56167843596047),
        content: '3층(2329-2330) 행정학과 사무실 \t064-754-2930\n' +
            '3층(2327-2328) 정치외교학과 사무실 \t064-754-2950\n' +
            '3층(2324) 언론홍보학과 사무실 \t064-754-2940'
    },
    {
        //공과대학 1호관
        title: '공과대학 1호관',
        location: new kakao.maps.LatLng(33.45711811540354, 126.56554457804513),
        content: '1층 7107 건축공학전공사무실 064-754-3700\n' +
            '2층 7225 식품생명공학과 사무실 064-754-3610\n' +
            '3층 7313 생명화학공학전공 사무실 064-754-3680'
    },
    {
        //공과대학 2호관
        title: '공과대학 2호관',
        location: new kakao.maps.LatLng(33.45755257119383, 126.56602644390912),
        content: '1층 B106 전기공학전공사무실 064-754-3670\n'+
            '3층 문화조형디자인전공 064-754-3690'
    },
    {
        //공과대학 3호관
        title: '공과대학 3호관',
        location: new kakao.maps.LatLng(33.456404920945886, 126.56527923146923),
        content: '3층 C308 통신공학과 사무실 064-754-3630\n' +
            '4층 C415 전자공학전공 사무실 064-754-3660'
    },
    {
        //공과대학 4호관
        title: '공과대학 4호관',
        location: new kakao.maps.LatLng(33.45471869327195, 126.56521235440862),
        content: '1층(D110) 건축학전공 사무실 064-754-3709\n' +
            '1층(D109) 기계공학전공 사무실 064-754-3620\n' +
            '2층(D209) 메카트로닉스공학전공 사무실 064-754-3710\n' +
            '3층(D309) 에너지공학과 사무실 064-754-3640\n' +
            '4층(D410) 컴퓨터공학전공 사무실 064-754-3650'
    },
    {
        //해양대학 1호관
        title: '해양대학 1호관',
        location: new kakao.maps.LatLng(33.45706699370703, 126.5638238375624),
        content: '4층 5418 해양산업경찰학과 사무실 064-754-3410'
    },
    {
        //해양대학 3호관
        title: '해양대학 3호관',
        location: new kakao.maps.LatLng(33.45724014780579, 126.56435002643653),
        content: '3층 5302 지구해양과학과 사무실 064-754-3430\n' +
            '4층 5416 환경공학과 사무실 064-754-3440\n' +
            '5층 5516 토목공학과 사무실 064-754-3450'
    },
    {
        //해양대학 4호관
        title: '해양대학 4호관',
        location: new kakao.maps.LatLng(33.45485335946973, 126.56633567897074),
        content: '3층(5365) 해양생명과학과 사무실 064-754-3420' +
            '3층(5365) 수산생명의학과 사무실 064-754-3470\n' +
            '4층(5467) 해양시스템공학과 사무실 064-754-3480'
    },
    {
        //사범대학 1호관
        title: '사범대학 1호관',
        location: new kakao.maps.LatLng(33.454957476169625, 126.56324819984451),
        content: '1층 3140 과학교육(물리)학부 064-754-3281\n' +
            '2층 3249 국어교육과 064-754-3210\n' +
            '3층 3353 컴퓨터교육과 064-754-3290\n' +
            '3층 3335 사회교육(지리)과 064-754-3231'
    },
    {
        //사범대학 2호관
        title: '사범대학 2호관',
        location: new kakao.maps.LatLng(33.45534635060007, 126.56358506452214),
        content: '1층 3101 과학교육(생물)학부 064-754-3280\n' +
            '1층 3115 사회교육(일반사회)과 064-754-3240\n' +
            '2층 3230 영어교육과 064-754-3220\n' +
            '2층 3213 수학교육과 064-754-3270\n' +
            '3층 3313 윤리교육과 064-754-3260'
    },
    {
        //통역번역대학
        title: '통역번역대학',
        location: new kakao.maps.LatLng(33.45644269373568, 126.56384040865943),
        content: '2층 215 체육교육과 064-754-3255\n' +
            '2층 체육학과 사무실 064-754-8318'
    },
    {
        //간호대학
        title: '간호대학',
        location: new kakao.maps.LatLng(33.45603904142683, 126.56442863680266),
        content: '2층 217 간호대학과사무실 064-754-3880'
    },
    {
        //미래융합대학
        title: '미래융합대학',
        location: new kakao.maps.LatLng(33.456770977275106, 126.56361288510824),
        content: '1층 103 실버케어복지학과 064-754-3940\n' +
            '1층 104 부동산 관리학과 064-754-3930\n' +
            '1층 105 관광융복합학과  064-754-3920\n' +
            '1층 106 건강뷰티향장학과 064-754-3910'
    },
    {
        //수의과대학
        title: '수의과대학',
        location: new kakao.maps.LatLng(33.45208753580414, 126.55862423237437),
        content: '수의학과 064-754-3360/3305'
    },
    {
        //인문대학 1호관
        title: '인문대학 1호관',
        location: new kakao.maps.LatLng(33.45347507583514, 126.55836444231359),
        content: '국어국문학과 064-754-2710\n'+
            '영어영문학과 064-754-2720\n'+
            '독일학과 064-754-2740\n'+
            '일어일문학과 064-754-2760\n'+
            '중어중문학과 064-754-2820'
    },
    {
        //인문대학 2호관
        title: '인문대학 2호관',
        location: new kakao.maps.LatLng(33.4528173405885, 126.55848608903368),
        content: '사학과 064-754-2770\n'+
            '사회학과 064-754-2780\n'+
            '철학과 064-754-2750'
    },
    {
        //의과대학
        title: '의과대학',
        location: new kakao.maps.LatLng(33.452886092975994, 126.56390123725441),
        content: '의학과 064-754-3010\n'+
            '의예과 064-754-3878'
    },
    {
        //경상대학 1호관
        title: '경상대학 1호관',
        location: new kakao.maps.LatLng(33.45405922327465, 126.56164201463677),
        content: '회계학과 064-754-3140\n'+
            '무역학과 064-754-3150\n'+
            '경제학과 064-754-3160\n'+
            '관광개발학과 064-754-3170\n'+
            '경영정보학과 064-754-3180'
    },
    {
        //경상대학 2호관
        title: '경상대학 2호관',
        location: new kakao.maps.LatLng(33.453878272225964, 126.56274001940378),
        content: '215 경영학과 064-754-3110\n'+
            '3층 0357 관광경영학과 064-754-3130'
    },
    {
        //미술관
        title: '미술관',
        location: new kakao.maps.LatLng(33.45296421606238, 126.5617658369985),
        content: '미술학과 064-754-4602\n'+
            '멀티미디어디자인전공 064-754-3720'
    },
    {
        //음악관
        title: '음악관',
        location: new kakao.maps.LatLng(33.45232336062159, 126.56283924607867),
        content: '음악학부 064-754-2790'
    }
]
//기타 시설 좌표 배열
const positionEtc = [
    {
        //학생회관(서점, 카페, 문구점, 안경원...)
        title: '학생회관(서점, 카페, 문구점, 안경원 등)',
        location: new kakao.maps.LatLng(33.45499742875333, 126.56052136256902)
    },
    {
        //우체국
        title: '우체국',
        location: new kakao.maps.LatLng(33.45590691839906, 126.56211405173592)
    }
]
//매점 좌표 배열
const positionCvtStore = [
    {
        //공과대학 1호관
        title: '공과대학 1호관',
        location: new kakao.maps.LatLng(33.45709670803491, 126.5652246871005)
    },
    {
        //통번대 앞
        title: '통번대 앞',
        location: new kakao.maps.LatLng(33.456696161127276, 126.56348956388659)
    },
    {
        //학생회관 CU
        title: '학생회관 CU',
        location: new kakao.maps.LatLng(33.454883343832535, 126.5607666359419)
    },
    {
        //교양동 근처 아라홀
        title: '아라홀',
        location: new kakao.maps.LatLng(33.4557356504165, 126.56276296498771)
    },
    {
        //6호관 CU
        title: '6호관 CU',
        location: new kakao.maps.LatLng(33.45358542389254, 126.55707318841908)
    },
    {
        //도서관 CU
        title: '도서관 CU',
        location: new kakao.maps.LatLng(33.45244785887272, 126.56107469485441)
    },
]
//프린터기 좌표 배열
const positionPrint = [
    {
        //학생회관 2층 프린터기
        title: '학생회관 프린터기',
        location: new kakao.maps.LatLng(33.45492102281142, 126.56058628373628)
    },
    {
        //본관 편의점 내 프린터기
        title: '아라홀 내 프린터기',
        location: new kakao.maps.LatLng(33.45573553662005, 126.56273069739073)
    },
    {
        //중도 프린터기
        title: '중도 프린터기',
        location: new kakao.maps.LatLng(33.452706607538715, 126.56094432314194)
    },
    {
        //기숙사 프린터기
        title: '기숙사 프린터기',
        location: new kakao.maps.LatLng(33.45365979497876, 126.55707012136831)
    },
    {
        //수의대 프린터기
        title: '수의대 프린터기',
        location: new kakao.maps.LatLng(33.45199497980749, 126.55858436778188)
    }
]
//식당 좌표 배열
const positionRstrt = [
    {
        //백두관식당
        title: '백두관 식당',
        location: new kakao.maps.LatLng(33.454957000416876, 126.56056190136135)
    },
    {
        //글로벌하우스
        title: '글로벌하우스',
        location: new kakao.maps.LatLng(33.456750153599685, 126.55963589161543)
    },
    {
        //교수회관
        title: '교수회관',
        location: new kakao.maps.LatLng(33.45290144834068, 126.55995381641875)
    },
    {
        //6호관 식당
        title: '6호관 식당',
        location: new kakao.maps.LatLng(33.45360693536863, 126.55678536167527)
    }
]
//ATM기 좌표 배열
const positionATM = [
    {
        //해대 3호관
        title: '해대 3호관',
        location: new kakao.maps.LatLng(33.457243672754, 126.56407034648728)
    },
    {
        //본관
        title: '본관',
        location: new kakao.maps.LatLng(33.455827631852586, 126.56136421461156)
    },
    {
        //학생회관
        title: '학생회관',
        location: new kakao.maps.LatLng(33.45496622591157, 126.56062101260517)
    },
    {
        //도서관
        title: '도서관',
        location: new kakao.maps.LatLng(33.45283005167409, 126.56079581023562)
    },
    {
        //아라뮤즈홀
        title:'아라뮤즈홀',
        location: new kakao.maps.LatLng(33.45394411600208, 126.55969041000085)
    }
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
            marker = createMarker(positionOffice[i].location, markerImage);

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
            marker = createMarker(positionEtc[i].location, markerImage);

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
            marker = createMarker(positionRstrt[i].location, markerImage);

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
            marker = createMarker(positionCvtStore[i].location, markerImage);

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
            marker = createMarker(positionPrint[i].location, markerImage);

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
            marker = createMarker(positionATM[i].location, markerImage);

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

        //마커 클릭 이벤트
        for (let i=0; i<officeMarkers.length; i++) {
            kakao.maps.event.addListener(officeMarkers[i], 'click', function () {
                alert('click!'+ positionOffice[i].title);
            });
        }
    }
    else if (type === 'etc') {
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(map);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(null);

        //마커 클릭 이벤트
        for (let i=0; i<etcMarkers.length; i++) {
            kakao.maps.event.addListener(etcMarkers[i], 'click', function () {
                alert('click!'+ positionEtc[i].title);
            });
        }
    }
    else if (type === 'store') {
        setOfficeMarkers(null);
        setStoreMarkers(map);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(null);

        //마커 클릭 이벤트
        for (let i=0; i<storeMarkers.length; i++) {
            kakao.maps.event.addListener(storeMarkers[i], 'click', function () {
                alert('click!'+ positionCvtStore[i].title);
            });
        }
    }
    else if (type === 'rstrt') {
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(map);
        setAtmMarkers(null);
        setPrintMarkers(null);

        //마커 클릭 이벤트
        for (let i=0; i<rstrtMarkers.length; i++) {
            kakao.maps.event.addListener(rstrtMarkers[i], 'click', function () {
                alert('click!'+ positionRstrt[i].title);
            });
        }
    }
    else if (type === 'atm') {
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(map);
        setPrintMarkers(null);

        //마커 클릭 이벤트
        for (let i=0; i<atmMarkers.length; i++) {
            kakao.maps.event.addListener(atmMarkers[i], 'click', function () {
                alert('click!'+ positionATM[i].title);
            });
        }
    }
    else if (type === 'print') {
        setOfficeMarkers(null);
        setStoreMarkers(null);
        setEtcMarkers(null);
        setRstrtMarkers(null);
        setAtmMarkers(null);
        setPrintMarkers(map);

        //마커 클릭 이벤트
        for (let i=0; i<printMarkers.length; i++) {
            kakao.maps.event.addListener(printMarkers[i], 'click', function () {
                alert('click!'+ positionPrint[i].title);
            });
        }
    }
}