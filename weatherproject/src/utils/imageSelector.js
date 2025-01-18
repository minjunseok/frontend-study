import odung1 from '../assets/sunny.png';
import odung2 from '../assets/well.png';
import odung3 from '../assets/bad.png';
import odung4 from '../assets/rain.png';
import odung5 from '../assets/heavyrain.png';
import odung6 from '../assets/snow.png';


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
