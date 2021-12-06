/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React,{useState} from 'react';
import './navbar.css'
import * as facPos from "./Item/facilityPosition";
import * as facLoc from "./Modules/FacilityLocationInfo";
import {map} from "./busMap";

export const Header = () => {

    const [isOpen1, setMenu1] = useState(false);  // 메뉴의 초기값을 false로 설정
    const [isOpen2, setMenu2] = useState(false);
    const [isOpen3, setMenu3] = useState(false);

    const toggleMenu = () => {
        setMenu1(isOpen1 => !isOpen1); // on,off 개념 boolean
    }
    const toggleMenu2 = () => {
        setMenu2(isOpen2 => !isOpen2); // on,off 개념 boolean
    }
    const toggleMenu3 = () => {
        setMenu3(isOpen3 => !isOpen3); // on,off 개념 boolean
    }

    const searchMajor = () => {
        const major = document.getElementById("major");
        const input = major.value;
        let result = [];

        for(let i = 0; i<facPos.positionOffice.length; i++){
            for(let j=0; j<facPos.positionOffice[i].content.length; j++){
                if(facPos.positionOffice[i].content[j].name.indexOf(input) >= 0){
                    let temp = {
                        name : '',
                        room : '',
                        floor : '',
                        tel : '',
                        building : ''
                    }

                    temp.name = facPos.positionOffice[i].content[j].name;
                    temp.room = facPos.positionOffice[i].content[j].room;
                    temp.floor = facPos.positionOffice[i].content[j].floor;
                    temp.tel = facPos.positionOffice[i].content[j].tel;
                    temp.building = facPos.positionOffice[i].title;

                    result.push(temp);
                }
            }
        }

        const resultDiv = document.getElementById('result');

        let innerText='';

        for(let i = 0; i<result.length; i++){
            innerText += '<div class="result">' +
                '<p class="major">' + result[i].name + '는</p>'+
                '<p class="building">'+ result[i].building + ' ' + result[i].floor + '층에 있습니다.</p>' +
                '<p class="tel">과사무실 전화번호는 '+ result[i].tel +'</p> </div>';
        }

        resultDiv.innerHTML = innerText;
    }

    const showFacList = (mode) => {
        let str = '';
        if(mode === 'store'){
            facLoc.changeMarker('store', map);
            for(let i = 0; i<facPos.positionCvtStore.length; i++){
                str = str + '<p class="list">' + facPos.positionCvtStore[i].title +' </p>'
            }
        }else if(mode === 'atm'){
            facLoc.changeMarker('atm', map);
            for(let i = 0; i<facPos.positionATM.length; i++){
                str = str + '<p class="list">' + facPos.positionATM[i].title +' </p>'
            }
        }else if(mode === 'rstrt'){
            facLoc.changeMarker('rstrt', map);
            for(let i = 0; i<facPos.positionRstrt.length; i++){
                str = str + '<p class="list">' + facPos.positionRstrt[i].title +' </p>'
            }
        }else if(mode === 'etc'){
            facLoc.changeMarker('etc', map);
            for(let i = 0; i<facPos.positionEtc.length; i++){
                str = str + '<p class="list">' + facPos.positionEtc[i].title +' </p>'
            }
        }else if(mode === 'print'){
            facLoc.changeMarker('print', map);
            for(let i = 0; i<facPos.positionPrint.length; i++){
                str = str + '<p class="list">' + facPos.positionPrint[i].title +' </p>'
            }
        }
        const listWrapperDiv = document.getElementById('listWrapper');
        listWrapperDiv.innerHTML = str;
    }


    return(
        <div>
            <div className="navBar-wrapper">
                <ul className="navBar">
                    <li onClick={()=>toggleMenu()}>순환버스</li>
                    <li onClick={()=>toggleMenu2()}>학과정보</li>
                    <li onClick={()=>toggleMenu3()}>시설정보</li>
                </ul>
            </div>
            <div className={isOpen1 ? "navBar-contents show-menu" : "navBar-contents hide-menu"} >
                <div>contents &97; 순환버스</div>
            </div>
            <div className={isOpen2 ? "navBar-contents show-menu" : "navBar-contents hide-menu"} >
                <div>contents &97; 학과정보</div>
                <div className="search">
                    <input type="text" id="major" placeholder="학과를 입력하세요"/>
                    <button onClick={()=>searchMajor()}>검색</button>
                </div>
                <div id="result"> </div>
            </div>
            <div className={isOpen3 ? "navBar-contents show-menu" : "navBar-contents hide-menu"} >
                <div>contents &97; 시설정보</div>
                <p>궁금한 편의시설 버튼을 눌러주세요.</p>
                <div className="wrapper">
                    <ul className="navCategory">
                        <li id="store" className="facility_info">
                            <button className="btn conv" onClick={() => showFacList('store')}>
                                <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/store.png?raw=true" alt="편의점아이콘"/>
                                편의점
                            </button>
                        </li>
                        <li id="atm" className="facility_info">
                            <button className="btn atm" onClick={() => showFacList('atm')}>
                                <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/atm.png?raw=true" alt="atm아이콘"/>
                                ATM
                            </button>
                        </li>
                        <li id="rstrt" className="facility_info">
                            <button className="btn cafe" onClick={() => showFacList('rstrt')}>
                                <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/restaurant.png?raw=true" alt="식당아이콘"/>
                                식당
                            </button>
                        </li>
                        <li id="print" className="facility_info">
                            <button className="btn cafe" onClick={() => showFacList('print')}>
                                <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/print.png?raw=true" alt="프린터기 아이콘"/>
                                프린터기
                            </button>
                        </li>
                        <li id="etc" className="facility_info">
                            <button className="btn etc" onClick={() => showFacList('etc')}>
                                <img className="facilityIcon" src="https://github.com/nayeon0731/JNU_InformationWeb/blob/main/img/information.png?raw=true" alt="기타 아이콘"/>
                                기타
                            </button>
                        </li>
                    </ul>
                </div>
                <div id = 'listWrapper'></div>
            </div>
        </div>

    )

}



