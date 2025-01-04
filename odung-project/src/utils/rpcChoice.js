import rock from '../assets/rock.jpg'
import paper from '../assets/paper.jpg'
import scissors from '../assets/sicssors.jpg'

 export function rpcChoice (rpcId) {

  switch(rpcId) {

    case 1: return rock;
    case 2: return paper;
    case 3: return scissors;

    default:
      return null;

  };

};