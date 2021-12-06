/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React,{useState} from 'react';
import './navbar.css'

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
            </div>
            <div className={isOpen3 ? "navBar-contents show-menu" : "navBar-contents hide-menu"} >
                <div>contents &97; 시설정보</div>
            </div>
        </div>

    )



}



