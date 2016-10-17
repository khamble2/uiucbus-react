export function distanceAndBearing(lat1, lon1, lat2, lon2) {

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  

  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  function bearing(lat1, lng1, lat2, lng2) {
    function _toRad(deg) {
      return deg * Math.PI / 180;
    }

    function _toDeg(rad) {
      return rad * 180 / Math.PI;
    }

    var dLon = (lng2 - lng1);
    var y = Math.sin(dLon) * Math.cos(lat2);
    var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    var brng = _toDeg(Math.atan2(y, x));

    let angle = 360 - ((brng + 360) % 360);


    function getCardinal(angle) {
        //easy to customize by changing the number of directions you have 
        var directions = 8;
        
        var degree = 360 / directions;
        angle = angle + degree/2;
        
        if (angle >= 0 * degree && angle < 1 * degree)
            return "N";
        if (angle >= 1 * degree && angle < 2 * degree)
            return "NE";
        if (angle >= 2 * degree && angle < 3 * degree)
            return "E";
        if (angle >= 3 * degree && angle < 4 * degree)
            return "SE";
        if (angle >= 4 * degree && angle < 5 * degree)
            return "S";
        if (angle >= 5 * degree && angle < 6 * degree)
            return "SW";
        if (angle >= 6 * degree && angle < 7 * degree)
            return "W";
        if (angle >= 7 * degree && angle < 8 * degree)
            return "NW";
        //Should never happen: 
        return "N";
    }

    return getCardinal(angle);

  }
  return (d*0.621371).toFixed(2) + ' mi '+ bearing(lat1, lon1, lat2, lon2);
}
