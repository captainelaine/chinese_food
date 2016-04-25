var video = document.getElementById("springVideo");
var controlBar = document.getElementById("controlBar");
var control = document.getElementById("control");
var noodlevideo = document.getElementById("noodleVideo");
var noodlecontrolBar = document.getElementById("noodlecontrolBar");
var noodlecontrol = document.getElementById("noodlecontrol");
var hunanvideo = document.getElementById("hunanVideo");
var hunancontrolBar = document.getElementById("hunancontrolBar");
var hunancontrl = document.getElementById("hunancontrol");


video.volume = 0.2;
noodlevideo.noodlevolume = 0.2;
hunanvideo.hunanvolume = 0.2;

controlBar.addEventListener("click", function(e) {

  var id = e.target.id;


  if (id == "control") {

    if (video.paused) {

      video.play();
      control.setAttribute("class", "typcn typcn-media-pause");
    } else {

      video.pause();
      control.setAttribute("class", "typcn typcn-media-play");
    };
  };


  if (id == "loop") {
    var loop = document.getElementById("loop");

    if (!video.loop) {

      video.loop = true;
      loop.setAttribute("class", "typcn typcn-arrow-loop active");
    } else {

      video.loop = false;
      loop.setAttribute("class", "typcn typcn-arrow-loop");
    }
  }

  function adjustVolume(id) {

    adjustment = 0.1


    if (id == "up" && video.volume <= 0.9) {

      video.volume += adjustment;

    } else if (id == "down" && video.volume >= 0.1){

      video.volume -= adjustment;
    } else {
      video.volume;
    }
  }

  function muteVolume() {
    var mute = document.getElementById("mute");


    if (!video.muted) {

      video.muted = true;
      mute.setAttribute("class", "typcn typcn-volume-mute active");

    } else {

      video.muted = false;
      mute.setAttribute("class", "typcn typcn-volume-mute");
    }
  }

  switch (id) {
    case "down":
      adjustVolume(id);
      break;

    case "up":
      adjustVolume(id);
      break;

    case "mute":
      muteVolume();
      break;

    default:
      break;
  }


});

noodlecontrolBar.addEventListener("click", function(e) {

  var id = e.target.id;


  if (id == "noodlecontrol") {

    if (noodlevideo.paused) {

      noodlevideo.play();
      noodlecontrol.setAttribute("class", "typcn typcn-media-pause");
    } else {

      noodlevideo.pause();
      noodlecontrol.setAttribute("class", "typcn typcn-media-play");
    };
  };


  if (id == "noodleloop") {
    var noodleloop = document.getElementById("noodleloop");

    if (!noodlevideo.loop) {

      noodlevideo.loop = true;
      noodleloop.setAttribute("class", "typcn typcn-arrow-loop active");
    } else {

      noodlevideo.loop = false;
      noodleloop.setAttribute("class", "typcn typcn-arrow-loop");
    }
  }

  function adjustVolume(id) {

    noodleadjustment = 0.1


    if (id == "noodleup" && noodlevideo.volume <= 0.9) {

      noodlevideo.volume += noodleadjustment;

    } else if (id == "noodledown" && noodlevideo.volume >= 0.1){

      noodlevideo.volume -= noodleadjustment;
    } else {
      noodlevideo.volume;
    }
  }

  function muteVolume() {
    var noodlemute = document.getElementById("noodlemute");


    if (!noodlevideo.muted) {

      noodlevideo.muted = true;
      noodlemute.setAttribute("class", "typcn typcn-volume-mute active");

    } else {

      noodlevideo.muted = false;
      noodlemute.setAttribute("class", "typcn typcn-volume-mute");
    }
  }

  switch (id) {
    case "noodledown":
      adjustVolume(id);
      break;

    case "noodleup":
      adjustVolume(id);
      break;

    case "noodlemute":
      muteVolume();
      break;

    default:
      break;
  }


});

hunancontrolBar.addEventListener("click", function(e) {

  var id = e.target.id;


  if (id == "hunancontrol") {

    if (hunanvideo.paused) {

      hunanvideo.play();
      hunancontrol.setAttribute("class", "typcn typcn-media-pause");
    } else {

      hunanvideo.pause();
      hunancontrol.setAttribute("class", "typcn typcn-media-play");
    };
  };


  if (id == "hunanloop") {
    var hunanloop = document.getElementById("hunanloop");

    if (!hunanvideo.loop) {

      hunanvideo.loop = true;
      hunanloop.setAttribute("class", "typcn typcn-arrow-loop active");
    } else {

      hunanvideo.loop = false;
      hunanloop.setAttribute("class", "typcn typcn-arrow-loop");
    }
  }

  function adjustVolume(id) {

    hunanadjustment = 0.1


    if (id == "hunanup" && hunanvideo.volume <= 0.9) {

      hunanvideo.volume += hunanadjustment;

    } else if (id == "hunandown" && hunanvideo.volume >= 0.1){

      hunanvideo.volume -= adjustment;
    } else {
      hunanvideo.volume;
    }
  }

  function muteVolume() {
    var hunanmute = document.getElementById("hunanmute");


    if (!hunanvideo.muted) {

      hunanvideo.muted = true;
      hunanmute.setAttribute("class", "typcn typcn-volume-mute active");

    } else {

      hunanvideo.muted = false;
      mute.setAttribute("class", "typcn typcn-volume-mute");
    }
  }

  switch (id) {
    case "hunandown":
      adjustVolume(id);
      break;

    case "hunanup":
      adjustVolume(id);
      break;

    case "hunanmute":
      muteVolume();
      break;

    default:
      break;
  }


});
