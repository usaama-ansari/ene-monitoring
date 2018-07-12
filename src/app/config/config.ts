export const BASE_URL = "http://customer.enggenv.com/monitoring/";

export const WMS = "wms";

export const PARAM_CODE_MAP = {
  1: { name: 'temperature', unit: '\xB0 C', icon: 'assets/icons/temp.png' },
  2: { name: 'humidity', unit: '%', icon: 'assets/icons/hum.png' },
  3: { name: 'pressure', unit: 'mbar', icon: 'assets/icons/pr.png' },
  4: { name: 'wind direction', unit: resolve_WD, icon: 'assets/icons/wd.png' },
  5: { name: 'wind speed', unit: 'kmph', icon: 'assets/icons/ws.png' },
  6: { name: 'current rainfall', unit: 'mm', icon: 'assets/icons/crf.png' },
  7: { name: 'previous rainfall', unit: 'mm', icon: 'assets/icons/prf.png' },
  8: { name: 'solar radiation', unit: 'watt', icon: 'assets/icons/sr.png' },
  9: { name: 'soil moisture', unit: 'C', icon: 'assets/icons/sr.png' }
}


function resolve_WD(degrees: number) {
  degrees = Number(degrees);
  degrees = Math.floor(degrees);

  if (degrees < 22)
    return "\xB0 N";
  else if (degrees < 67)
    return "\xB0 NE";
  else if (degrees < 112)
    return "\xB0 E";
  else if (degrees < 157)
    return "\xB0 SE";
  else if (degrees < 212)
    return "\xB0 S";
  else if (degrees < 247)
    return "\xB0 SW";
  else if (degrees < 292)
    return "\xB0 W";
  else if (degrees < 337)
    return "\xB0 NW";
  else return "\xB0 N";
}






/*
SELECT 
    ROUND((COUNT( 
    CASE WHEN SUBSTRING_INDEX(_4,':',-1) < 22.5 and SUBSTRING_INDEX(_4,':',-1) > 0 OR SUBSTRING_INDEX(_4,':',-1) <= 360 and SUBSTRING_INDEX(_4,':',-1) > 337.5 THEN 1 END)/(SELECT COUNT(*) FROM wmsA5_00002))*100,1) as 'N',
   
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_4,':',-1) > 22.5 and SUBSTRING_INDEX(_4,':',-1) < 67.5 THEN 1 END)/(SELECT COUNT(*) FROM wmsA5_00002))*100,1) as 'NE',
    
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_4,':',-1) > 67.5 and SUBSTRING_INDEX(_4,':',-1) < 112.5 THEN 1 END)/(SELECT COUNT(*) FROM wmsA5_00002))*100,1) as 'E',

    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_4,':',-1) > 112.5 and SUBSTRING_INDEX(_4,':',-1) < 157.5 THEN 1 END)/(SELECT COUNT(*) FROM wmsA5_00002))*100,1) as 'SE',
    
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_4,':',-1) > 157.5 and SUBSTRING_INDEX(_4,':',-1) < 212.5 THEN 1 END)/(SELECT COUNT(*) FROM wmsA5_00002))*100,1) as 'S',

    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_4,':',-1) > 212.5 and SUBSTRING_INDEX(_4,':',-1) < 247.5 THEN 1 END)/(SELECT COUNT(*) FROM wmsA5_00002))*100,1) as 'SW',
    
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_4,':',-1) > 247.5 and SUBSTRING_INDEX(_4,':',-1) < 292.5 THEN 1 END)/(SELECT COUNT(*) FROM wmsA5_00002))*100,1) as 'W',
    
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_4,':',-1) > 292.5 and SUBSTRING_INDEX(_4,':',-1) < 337.5 THEN 1 END)/(SELECT COUNT(*) FROM wmsA5_00002))*100,1) as 'NW',
    
    CASE
     WHEN SUBSTRING_INDEX(_5,':',-1) < 1 THEN 'a'
    WHEN SUBSTRING_INDEX(_5,':',-1) < 24 THEN 'b'
    WHEN SUBSTRING_INDEX(_5,':',-1) < 38 THEN 'c'
    WHEN SUBSTRING_INDEX(_5,':',-1) < 63 THEN 'd'
    ELSE 'z'
    END as wind_category
    FROM `wmsA5_00002` GROUP BY wind_category ORDER BY wind_category


*/




/*FOR AMU WATATION
SELECT 
    ROUND((COUNT( 
    CASE WHEN SUBSTRING_INDEX(_wd,' ',1) < 22.5 and SUBSTRING_INDEX(_wd,' ',1) > 0 OR SUBSTRING_INDEX(_wd,':',-1) <= 360 and SUBSTRING_INDEX(_wd,':',-1) > 337.5 THEN 1 END)/(SELECT COUNT(*) FROM WMS_AMU_01))*100,1) as 'N',
   
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_wd,' ',1) > 22.5 and SUBSTRING_INDEX(_wd,' ',1) < 67.5 THEN 1 END)/(SELECT COUNT(*) FROM WMS_AMU_01))*100,1) as 'NE',
    
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_wd,' ',1) > 67.5 and SUBSTRING_INDEX(_wd,' ',1) < 112.5 THEN 1 END)/(SELECT COUNT(*) FROM WMS_AMU_01))*100,1) as 'E',

    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_wd,' ',1) > 112.5 and SUBSTRING_INDEX(_wd,' ',1) < 157.5 THEN 1 END)/(SELECT COUNT(*) FROM WMS_AMU_01))*100,1) as 'SE',
    
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_wd,' ',1) > 157.5 and SUBSTRING_INDEX(_wd,' ',1) < 212.5 THEN 1 END)/(SELECT COUNT(*) FROM WMS_AMU_01))*100,1) as 'S',

    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_wd,' ',1) > 212.5 and SUBSTRING_INDEX(_wd,' ',1) < 247.5 THEN 1 END)/(SELECT COUNT(*) FROM WMS_AMU_01))*100,1) as 'SW',
    
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_wd,' ',1) > 247.5 and SUBSTRING_INDEX(_wd,' ',1) < 292.5 THEN 1 END)/(SELECT COUNT(*) FROM WMS_AMU_01))*100,1) as 'W',
    
    ROUND((COUNT(
    CASE
    WHEN SUBSTRING_INDEX(_wd,' ',1) > 292.5 and SUBSTRING_INDEX(_wd,' ',1) < 337.5 THEN 1 END)/(SELECT COUNT(*) FROM WMS_AMU_01))*100,1) as 'NW',
    
    CASE
    WHEN SUBSTRING_INDEX(_5,':',-1) < 1 THEN 'a'
    WHEN SUBSTRING_INDEX(_5,':',-1) < 24 THEN 'b'
    WHEN SUBSTRING_INDEX(_5,':',-1) < 38 THEN 'c'
    WHEN SUBSTRING_INDEX(_5,':',-1) < 63 THEN 'd'
    ELSE 'z'
    END as wind_category
    FROM `wmsA5_00002` GROUP BY wind_category


*/




