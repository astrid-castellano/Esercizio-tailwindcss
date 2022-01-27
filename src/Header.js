import iconBlack from './img/maps_home_work_black_48dp.svg';
import iconWhite from './img/maps_home_work_white_48dp.svg';

import './Header.css';
import Toggle from './Toggle';

export default function Header() {
  
  let icon;
  if(window.localStorage.getItem('color-theme') === 'light'){
    icon = iconBlack;
  }else{
    icon = iconWhite;
  }

  return (
    <div className = "shadow px-16 py-4 w-full sticky z-10 top-0 bg-white dark:bg-gray-dark-100 flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-between">
        <div>
            <img alt="" src={icon} width={25}/>
        </div>
        <nav className = "flex flex-col md:flex-row justify-end items-center space-x-8 dark:text-white">
            <a href="#startPage" className="hover:text-dark-green-blue">Home</a>
            <a href="#cosafacciamo" className="hover:text-dark-green-blue">Cosa facciamo</a>
            <a href="#progetti" className="hover:text-dark-green-blue">Progetti</a>
            <a href="#team" className="hover:text-dark-green-blue">Chi siamo</a>
            <a href="#footer" className="hover:text-dark-green-blue">Contatti</a>
            <Toggle className="hover:text-dark-green-blue"/>
        </nav>
    </div>
  )
}

