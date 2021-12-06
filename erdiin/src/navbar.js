/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React,{useState} from 'react';
import './navbar.css'
import {positionOffice} from "./Item/facilityPosition";

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

        for(let i = 0; i<positionOffice.length; i++){
            for(let j=0; j<positionOffice[i].content.length; j++){
                if(positionOffice[i].content[j].name.indexOf(input) >= 0){
                    let temp = {
                        name : '',
                        room : '',
                        floor : '',
                        tel : '',
                        building : ''
                    }

                    temp.name = positionOffice[i].content[j].name;
                    temp.room = positionOffice[i].content[j].room;
                    temp.floor = positionOffice[i].content[j].floor;
                    temp.tel = positionOffice[i].content[j].tel;
                    temp.building = positionOffice[i].title;

                    result.push(temp);
                }
            }
        }

        const resultDiv = document.getElementById('result');

        let innerText='';

        for(let i = 0; i<result.length; i++){
            innerText += '<div class="result">' +
                '<p class="major">' + result[i].name + '는</p>'+
                '<p class="building">'+ result[i].building + ' ' + result[i].floor + '에 있습니다.</p>' +
                '<p class="tel">과사무실 전화번호는 '+ result[i].tel +'</p> </div>';
        }

        resultDiv.innerHTML = innerText;

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
                <input type="text" id="major" placeholder="학과를 입력하세요"/>
                <button onClick={()=>searchMajor()}>검색</button>
                <div id="result">

                </div>
            </div>
            <div className={isOpen3 ? "navBar-contents show-menu" : "navBar-contents hide-menu"} >
                <div>contents &97; 시설정보</div>
            </div>
        </div>

    )



}



