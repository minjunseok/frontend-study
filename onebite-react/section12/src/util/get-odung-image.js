import odung1 from "./../assets/odung1.png";
import odung2 from "./../assets/odung2.png";
import odung3 from "./../assets/odung3.png";
import odung4 from "./../assets/odung4.png";
import odung5 from "./../assets/odung5.png";
import odung6 from "./../assets/odung6.png";



export function getOdungImage (odungId) {

  switch(odungId) {

    case 1: return odung1;
    case 2: return odung2;
    case 3: return odung3;
    case 4: return odung4;
    case 5: return odung5;
    case 6: return odung6;

    default:
      return null;

  }

  
}