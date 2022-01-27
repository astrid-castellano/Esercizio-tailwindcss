import user1 from './img/caricatura-1.jpeg';
import user2 from './img/caricatura-2.jpeg';
import user3 from './img/caricatura-3.jpeg';
import user4 from './img/caricatura-4.jpeg';
import user5 from './img/caricatura-5.jpeg';

import user1dark from './img/user1dark.png';
import user2dark from './img/user2dark.png';
import user3dark from './img/user3dark.png';
import user4dark from './img/user4dark.png';
import user5dark from './img/user5dark.png';

import Profile from './Profile';

export default function Team() {

    let arrayImg;
    if(window.localStorage.getItem('color-theme') === 'light'){
        arrayImg = [user1, user2, user3, user4, user5];
    } else {
        arrayImg = [user1dark, user2dark, user3dark, user4dark, user5dark];
    }

    return (
        <div id="team" className="w-full p-16 pb-0 flex flex-nowrap flex-col items-center justify-center">
            <h2 className='dark:text-white font-bold text-4xl mb-16 lg:mb-0'>Il nostro team</h2>
            <div className="grid grid-flow-row grid-rows-2 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-8">
                {arrayImg.map((image, i) => 
                    <Profile setUserImg={image} key={'user'+(i+1)} id={'user'+(i+1)} />
                )}
            </div>
        </div>
    )
  }
  
  