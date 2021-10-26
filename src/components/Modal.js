import React from 'react';
import ReactDom from 'react-dom';
import './../styles/Modal.css';
// import Home from './Home';


const Modal = ({open, children, onClose}) => {
    
    if(!open) return null
    return ReactDom.createPortal (
        <>
            <div className="overlay"></div>
            <div className="myModal">
                <span id="close" className="close-Icon" onClick={onClose}>&times;</span>
                {children}

                {/* <div id="mySidenav" class="sidenav" > */}
                
                {/* <div className="content">
                    "Empty Cart"
                </div>
                </div> */}
            
            </div>
        </>, 
        document.getElementById("portal")
    )
    
    // function closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    // }
}

export default Modal;