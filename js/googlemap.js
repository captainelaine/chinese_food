function initMap() {

  var mapOptions = {
    shanghai: {
      center: {
        lat: 31.2243084,
        lng: 121.3162679
      },
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: false,
      mapTypeControl: false
    },

    hunan: {
      center: {
        lat: 27.3682751,
        lng: 112.2816443
      },
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: false,
      mapTypeControl: false
    },

    yunnan: {
      center: {
        lat: 25.1245724,
        lng: 102.3661291
      },
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: false,
      mapTypeControl: false
    }


  }

  // Create a new map through Google Maps; feed the div we want the
  // map to appear in and the options on how to display the map (i.e
  // location, zoom);
  var shanghiMap = new google.maps.Map(document.getElementById("shanghaimap"), mapOptions.shanghai);
  var hunanMap = new google.maps.Map(document.getElementById("hunanmap"), mapOptions.hunan);
  var yunnanMap = new google.maps.Map(document.getElementById("yunnanmap"), mapOptions.yunnan);

}
