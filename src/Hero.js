import React from 'react';
import img from './img/Risorsa 1.png';


export default function Hero() {

  let colorwave;
  if(localStorage.getItem('color-theme') === 'light'){
    colorwave = '#ffffff';
  } else {
    colorwave = '#273444';
  }

  return (
    <>
      <div id="startPage" className = "bg-fixed bg-gradient-to-r from-light-blue to-purple-100 dark:bg-gradient-to-r dark:from-dark-green-blue dark:to-purple-200 pt-16 pb-32 w-full flex items-center justify-center">
        <img src={img} className="w-1/4" alt="worker"/>
      </div>
      <div className="absolute hidden xl:block xl:bottom-12 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill={colorwave} /* fill-opacity="1" */ d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,208C672,213,768,267,864,250.7C960,235,1056,149,1152,112C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>  
      </div>
    </>
      
  )
  
}
