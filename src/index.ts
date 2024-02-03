import { testGreeter } from './hello';
import { writeToSpreadsheet } from './spread-sheet';
import { getDevices } from './switch-bot';

global.testGreeter = testGreeter;
global.writeToSpreadsheet = writeToSpreadsheet;
global.getDevices = getDevices;
