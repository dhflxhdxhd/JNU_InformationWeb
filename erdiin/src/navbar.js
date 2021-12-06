/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React,{useState} from 'react';
import './navbar.css'  
  
export const Header = () => {
  
  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  
  const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }
  
    return(

        <div>
        <div className="navBar-wrapper">
            <ul className="navBar">
                <li onClick={()=>toggleMenu()}>순환버스</li>                      
                <li onClick={()=>toggleMenu()}>학과정보</li>
                <li onClick={()=>toggleMenu()}>시설정보</li>
            </ul>
        </div>    
        <div className={isOpen ? "navBar-contents show-menu" : "navBar-contents hide-menu"} > 
            <div>navBar contents</div>
        </div>
        </div>
        
    )
  

  
  }
  

  
  
