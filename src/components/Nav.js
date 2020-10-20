import React,{useState, useEffect} from "react";
import './Nav.css'


function Nav() {

  const [show, setShow] = useState(false)
  useEffect(() =>{
    window.addEventListener('scroll', () => {
    if (window.scrollY > 100){
      setShow(true);
      
    } else setShow(false);
    });
    return () => {window.removeEventListener('scroll')} ;
  },[]);
  return (
    <div className={`nav ${ show && 'fade'}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/archive/0/08/20190205011501%21Netflix_2015_logo.svg"
        alt="netfix logo"
      />
     <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" className="avatar"/>
    </div>
  );
}

export default Nav;
