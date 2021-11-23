import React from 'react';
import { useEffect } from 'react';

const { kakao } = window;

// 좌표 수정  필요
const positionA = [
    {
        title:'정문',
        lat:33.459757645661135,
        lng:126.56156244046907
    },
    {
        title:'약학대학',
        lat:33.45765980279611,
        lng:126.56120368204893
    },
    {
        title:'학생회관',
        lat:33.45447762722062, 
        lng:126.56041377940119
    },
    {
        title:'인문대학(서)',
        lat:33.452670268370625, 
        lng:126.55759743769
    },
    {
        title:'학생생활관',
        lat:33.45150010633254, 
        lng:126.55817168486676
    },
    {
        title:'인문대학(동)',
        lat:33.45283611684007, 
        lng:126.55928152796277
    },
    {
        title:'중앙도서관',
        lat:33.45303421319616, 
        lng:126.56087175088973
    },
    {
        title:'의학전문대학원',
        lat:33.45306185451311, 
        lng:126.5639969807739
    },
    {
        title:'공과대학4호관',
        lat:33.45484836448853,
        lng: 126.56438327325252
    },
    {
        title:'해양과학대학4호관',
        lat: 33.455239979623826, 
        lng: 126.56582644604401
    },
    {
        title:'교양강의동',
        lat:33.45562913922756, 
        lng:126.56369221978743
    },
    {
        title:'본관',
        lat:33.45624902921638,
        lng:126.56217253287211
    },
    {
        title:'해양과학대학1호관',
        lat:33.45729334627107, 
        lng:126.56317866659457
    }
]

const positionB = [
    {
        title:'정문',
        lat:33.459757645661135,
        lng:126.56156244046907
    },
    {
        title:'약학대학',
        lat:33.45765980279611,
        lng:126.56120368204893
    },
    {
        title:'학생회관',
        lat:33.454495054198425, 
        lng:126.56076168393238 
    },
    {
        title:'인문대학(서)',
        lat:33.45295911653265,
        lng:126.55767030400025 
    },
    {
        title:'학생생활관',
        lat:33.45159770093905, 
        lng:126.55806668817324 
    },
    {
        title:'인문대학(동)',
        lat:33.45288370434394, 
        lng:126.55917623721048
    },
    {
        title:'중앙도서관',
        lat:33.453144549990135, 
        lng:126.56128157645469 
    },
    {
        title:'의학전문대학원',
        lat:33.45315052125619, 
        lng:126.56381450412859
    },
    {
        title:'해양과학대학4호관',
        lat: 33.45533484214813, 
        lng: 126.56577080285433
    },
    {
        title:'교양강의동',
        lat:33.45554887014677, 
        lng:126.56363064554937
    },
    {
        title:'본관',
        lat:33.45617042932575, 
        lng:126.56254106568592
    },
    {
        title:'해양과학대학1호관',
        lat:33.45729334627107, 
        lng:126.56317866659457
    }
]

const MapContainer = () => {
    
    useEffect(() => {
        busMap();
    }, []);

    return (
        <div id='myMap'></div>
    );
}


// maker -> busimg.
const imgSrc = "../img/bus-stop.png"

const createMarkerImg = (src,size,options) => {
    const busImg = new kakao.maps.MarkerImage(src,size,options);
    return busImg
}


const busMap = () =>{
    const container = document.getElementById('myMap');
    const options = {
    center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
    level: 3
    };
    const map = new kakao.maps.Map(container, options);

    positionA.forEach(element => {
    new kakao.maps.Marker(
        {
            map:map,
            position: new kakao.maps.LatLng(element.lat,element.lng),
            title:element.title,
            img:imgSrc //임의로 설정해놓음(안되면 에러떠서 진행이 불가ㅠㅠ)
        }
    );
    });

    positionB.forEach(element => {
    new kakao.maps.Marker(
        {
            map:map,
            position: new kakao.maps.LatLng(element.lat,element.lng),
            title:element.title,
        }
    );
    });
}
export default MapContainer