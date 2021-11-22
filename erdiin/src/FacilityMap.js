import React from "react";
import map from "../../test/src/map";

//시설 위치 정보
//과사무실
const positionOffice = [
    {
        title:'생명자원과학대학',
        lat:33.45829395287701,
        lng:126.56276625841375
    },
    {
        title:'감귤화훼과학기술센터',
        lat:33.458793459339155,
        lng:126.56251635312326
    },
    {
        title:'자연과학대학 1호관',
        lat:33.45796705673137,
        lng:126.56466908097185
    },
    {
        title:'자연과학대학 2호관',
        lat:33.458452635460326,
        lng:126.56047166153468
    },
    {
        title:'약학대학',
        lat:33.45736953316251,
        lng:126.56013830453905
    },
    {
        title:'사회과학대학',
        lat:33.45483698256901,
        lng:126.56167843596047
    },
    {
        title:'공과대학 1호관',
        lat:33.45711811540354,
        lng:126.56554457804513
    },
    {
        title:'공과대학 2호관',
        lat:33.45755257119383,
        lng:126.56602644390912
    },
    {
        title:'공과대학 3호관',
        lat:33.456404920945886,
        lng:126.56527923146923
    },
    {
        title:'공과대학 4호관',
        lat:33.45471869327195,
        lng:126.56521235440862
    },
    {
        title:'해양대학 1호관',
        lat:33.45706699370703,
        lng:126.5638238375624
    },
    {
        title:'해양대학 3호관',
        lat:33.45724014780579,
        lng:126.56435002643653
    },
    {
        title:'해양대학 4호관',
        lat:33.45485335946973,
        lng:126.56633567897074
    },
    {
        title:'사범대학 1호관',
        lat:33.454957476169625,
        lng:126.56324819984451
    },
    {
        title:'사범대학 2호관',
        lat:33.45534635060007,
        lng:126.56358506452214
    },
    {
        title:'통역번역대학',
        lat:33.45644269373568,
        lng:126.56384040865943
    },
    {
        title:'간호대학',
        lat:33.45603904142683,
        lng:126.56442863680266
    },
    {
        title:'미래융합대학',
        lat:33.456770977275106,
        lng:126.56361288510824
    },
    {
        title:'수의과대학',
        lat:33.45208753580414,
        lng:126.55862423237437
    },
    {
        title:'인문대학 1호관',
        lat:33.45347507583514,
        lng:126.55836444231359
    },
    {
        title:'인문대학 2호관',
        lat:33.4528173405885,
        lng:126.55848608903368
    },
    {
        title:'의과대학',
        lat:33.452886092975994,
        lng:126.56390123725441
    },
    {
        title:'경상대학 1호관',
        lat:33.45405922327465,
        lng:126.56164201463677
    },
    {
        title:'경상대학 2호관',
        lat:33.453878272225964,
        lng:126.56274001940378
    },
    {
        title:'미술관',
        lat:33.45296421606238,
        lng:126.5617658369985
    },
    {
        title:'음악관',
        lat:33.45232336062159,
        lng:126.56283924607867
    }
]
const positionCvtStore = [
    {
        //공과대학 1호관
        title:'공대1호관 CU',
        lat:33.45709670803491,
        lng:126.5652246871005
    },
    {
        //통번대 앞
        title:'미래융합대학 아라홀',
        lat:33.456696161127276,
        lng:126.56348956388659
    },
    {
        //학생회관 CU
        title:'학생회관 CU',
        lat:33.454883343832535,
        lng:126.5607666359419
    },
    {
        //교양동 근처 아라홀
        title:'본관 아라홀',
        lat:33.4557356504165,
        lng:126.56276296498771
    },
    {
        //6호관 CU
        title:'6호관 CU',
        lat:33.45358542389254,
        lng:126.55707318841908
    },
    {
        //도서관 CU
        title:'도서관 CU',
        lat:33.45244785887272,
        lng:126.56107469485441
    },
]
const positionPrint = [
    {
        //학생회관 2층 프린터기
        title:'학생회관 2층 프린터기',
        lat:33.45492102281142,
        lng:126.56058628373628
    },
    {
        //본관 편의점 내 프린터기
        title:'학생회관 2층 프린터기',
        lat:33.45573553662005,
        lng:126.56273069739073
    },
    {
        //중도 프린터기
        title:'중도 3층 프린터기',
        lat:33.452706607538715,
        lng:126.56094432314194
    },
    {
        //기숙사 프린터기
        title:'6호관 프린터기',
        lat:33.45365979497876,
        lng:126.55707012136831
    },
    {
        //수의대 프린터기
        title:'수의대 프린터기',
        lat:33.45199497980749,
        lng:126.55858436778188
    },
]
const positionRstrt = [
    {
        //백두관식당
        title:'백두관 식당',
        lat:33.454957000416876,
        lng:126.56056190136135
    },
    {
        //글로벌하우스
        title:'백두관 식당',
        lat:33.456750153599685,
        lng:126.55963589161543
    },
    {
        //교수회관
        title:'백두관 식당',
        lat:33.45290144834068,
        lng:126.55995381641875
    },
    {
        //6호관 식당
        title:'6호관 식당',
        lat:33.45360693536863,
        lng:126.55678536167527
    }
]
const positionATM = [
    {
        //해대 3호관
        title:'해대 ATM',
        lat:33.457243672754,
        lng:126.56407034648728
    },
    {
        //본관
        title:'본관 농협&ATM',
        lat:33.455827631852586,
        lng:126.56136421461156
    },
    {
        //학생회관
        title:'학생회관 ATM',
        lat:33.45496622591157,
        lng:126.56062101260517
    },
    {
        //도서관
        title:'중도 ATM',
        lat:33.45283005167409,
        lng:126.56079581023562
    },
    {
        //아라뮤즈홀
        title:'아라뮤즈홀 ATM',
        lat:33.45394411600208,
        lng:126.55969041000085
    },
]
const positionEtc = [
    {
        //학생회관(서점, 카페, 문구점, 안경원...)
        title:'학생회관',
        lat:33.45499742875333,
        lng:126.56052136256902
    },
    {
        //우체국
        title:'학생회관',
        lat:33.45590691839906,
        lng:126.56211405173592
    },
]
const FacilityMap = () => {
    positionOffice.forEach(element => {
        new kakao.maps.Marker(
            {
                map:map,
                position: new kakao.maps.LatLng(element.lat,element.lng),
                title:element.title,
                img:imgSrc
            }
        );
    });
    positionCvtStore.forEach(element => {
        new kakao.maps.Marker(
            {
                map:map,
                position: new kakao.maps.LatLng(element.lat,element.lng),
                title:element.title,
                img:imgSrc
            }
        );
    });
    positionPrint.forEach(element => {
        new kakao.maps.Marker(
            {
                map:map,
                position: new kakao.maps.LatLng(element.lat,element.lng),
                title:element.title,
                img:imgSrc
            }
        );
    });
    positionRstrt.forEach(element => {
        new kakao.maps.Marker(
            {
                map:map,
                position: new kakao.maps.LatLng(element.lat,element.lng),
                title:element.title,
                img:imgSrc
            }
        );
    });
    positionATM.forEach(element => {
        new kakao.maps.Marker(
            {
                map:map,
                position: new kakao.maps.LatLng(element.lat,element.lng),
                title:element.title,
                img:imgSrc
            }
        );
    });
    positionEtc.forEach(element => {
        new kakao.maps.Marker(
            {
                map:map,
                position: new kakao.maps.LatLng(element.lat,element.lng),
                title:element.title,
                img:imgSrc
            }
        );
    });
    return (
        <div>hello</div>

    )
}

export default FacilityMap;