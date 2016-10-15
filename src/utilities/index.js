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

    function degToCompass(num) {
      var val = Math.floor((num / 22.5) + 0.5);
      var arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW"
      ];
      return arr[(val % 16)];
    }

    return degToCompass(angle);

  }
  return Math.round(d*1000) + 'm '+ bearing(lat1, lon1, lat2, lon2);
}
