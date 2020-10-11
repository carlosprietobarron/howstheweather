import { geoLib } from './city';
import { domcon } from './ui';

const initialize = () => {
  domcon.createIcon();
  domcon.setBtnEvent();
  domcon.setToggle();
};

initialize();
geoLib.geoLocal();
