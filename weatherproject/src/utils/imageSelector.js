import odung1 from '../assets/오둥더움.png';
import odung2 from '../assets/오둥맑음.png';
import odung3 from '../assets/오둥이흐림.png';
import odung4 from '../assets/오둥이비.png';
import odung5 from '../assets/오둥폭우.png';
import odung6 from '../assets/오둥이눈.png';


export function imageSelector (id) {

  switch(id) {

    case 1 : return odung1;
    case 2 : return odung2;
    case 3 : return odung3;
    case 4 : return odung4;
    case 5 : return odung5;
    case 6 : return odung6;
  
    default: null;
  
    
  } 

}
