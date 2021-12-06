/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React,{useState} from 'react';
import './navbar.css'  

  
export const Header = () => {
    
    const [isOpen, setMenu] = useState({
        busHome : false,
        classHome : false,
        facHome : false
    });  // 메뉴의 초기값을 false로 설정


    const toggleMenu = (e) => {
        const newisOpen = {...isOpen};
        const open = e.currentTarget.id;
        
        for (let k in newisOpen){
            k === open ?  (newisOpen[k] = true) : (newisOpen[k] = false);
        }

        setMenu(newisOpen);
    }

    return(
        <div>
        <div className="navBar-wrapper">
            <ul className="navBar">
                <li id="busHome" onClick={toggleMenu}>순환버스</li>                      
                <li id="classHome" onClick={toggleMenu}>학과정보</li>
                <li id="facHome" onClick={toggleMenu}>시설정보</li>
            </ul>
        </div>    
        <div className={isOpen.busHome ? "navBar-contents show-menu" : "navBar-contents hide-menu"} > 
            <div>
                <div className="busnav-header">
                    <p>운행시간표</p>
                    <p>버스노선선택</p>
                    <button>A</button>
                    <button>B</button>
                </div>
                <div className="busnav-content">
                    <p>결과</p>
                    <p>도착시간</p>
                    <div>
                        <ul>
                            <li></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
        <div className={isOpen.classHome ? "navBar-contents show-menu" : "navBar-contents hide-menu"} > 
            <div>contents &97; 학과정보</div>
        </div>
        <div className={isOpen.facHome ? "navBar-contents show-menu" : "navBar-contents hide-menu"} > 
            <div>contents &97; 시설정보</div>
        </div>
        </div>
        
    )
  

  
  }
  

  
  
