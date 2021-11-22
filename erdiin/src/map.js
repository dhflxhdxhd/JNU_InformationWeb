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

 
    }, []);

    return (
        <div id='myMap'></div>
    );
}
export default MapContainer