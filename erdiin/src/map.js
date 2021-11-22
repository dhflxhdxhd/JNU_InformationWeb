import React from 'react';
import { useEffect } from 'react';

const { kakao } = window;
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
        lat:33.45562206115204, 
        lng:126.56365980252178
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

const MapContainer = () => {
    
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);

 
    }, []);

    return (
        <div id='myMap'></div>
    );
}
export default MapContainer