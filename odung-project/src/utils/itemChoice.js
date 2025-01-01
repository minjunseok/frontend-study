import odung1 from '../assets/odung1.png'
import odung2 from '../assets/odung2.png'
import odung3 from '../assets/odung3.png'

 export function itemChoice (odungId) {

  switch(odungId) {

    case 1: return odung1;
    case 2: return odung2;
    case 3: return odung3;

    default:
      return null;

  };

};