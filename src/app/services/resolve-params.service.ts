/*
 * This service is used to resolve the parameter code
 * to its parameter name, unit and icon.The PARAM_CODE_MAP 
 * config is used to facilitate this task by provideing
 * mapped names, units and icons, against the parameter code.
 * Example '1:45' translates to {name:'temperature,unit:'\xB0 C',icon:''}.
 * for more info plz check config/config.ts file
 */

import { Injectable } from '@angular/core';
import { PARAM_CODE_MAP } from '../config/config';

@Injectable()
export class ResolveParamsService {

  constructor() { }

  resolve_real_time(rawParamsArray: string[]) {
    let resolvedArray: { name: string, value: string, unit: string }[] = rawParamsArray.map((el) => {
      let splitted = el.split(':');// split raw value at ':'
      let eachMap = PARAM_CODE_MAP[splitted[0]];
      return {
        name: eachMap.name,
        value: splitted[1],
        unit: typeof (eachMap.unit) === 'function' ? eachMap.unit(splitted[1]) : eachMap.unit,
        icon: eachMap.icon
      };
    });
    return resolvedArray;
  }

  resolve_average(rawAverageArray: any) {
    let resolvedAvArray = []; // final resolved array of averaged data in any type of device
    // Here we are mapping the received data to what we want
    resolvedAvArray = rawAverageArray.map((el) => {
      let date = Object.keys(el)[0];// separating the date key from raw 
      let avPerDay = { date: date };// structuring average data for the day 
      //passing parameters key values pairs in avPerDay
      el[date].forEach((param) => {
        let splitted = param.split(':');// split raw value at ':'
        avPerDay[PARAM_CODE_MAP[splitted[0]].name] = splitted[1];
      });
      return avPerDay;
    });
    return resolvedAvArray;
  }

}
