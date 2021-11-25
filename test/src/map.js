import React from 'react';
import { useEffect } from 'react';

const { kakao } = window;
const MapContainer = () => {
    
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.45606028280052, 126.56205448172588),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);

        const busPosition_A = [
            {
                title:'정문',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'약학대학',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'학생회관',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'인문대학(서)',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'학생생활관',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'인문대학(동)',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'중앙도서관',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'의학전문대학원',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'공과대학4호관',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'해양과학대학4호관',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'교양강의동',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'본관',
                latlng: new kakao.maps.LatLng()
            },
            {
                title:'해양과학대학1호관',
                latlng: new kakao.maps.LatLng()
            }
            
        ]
    }, []);

    return (
        <div id='myMap'></div>
    );
}
export default MapContainer