// make the province name hid when it is not mouseoverd

var mouseover= document.getElementsByClassName("province");
var province = document.getElementById("chinamap").getElementsByTagName("path");
province.className="province";
var flag = document.getElementsByClassName("flag");

function focuseflag() {
  for (var i=0; i<flag.length;i++) {
    flag[i].addEventListener("mouseover",function(event){
      event.target.setAttribute("fill","red");
    });
    flag[i].addEventListener("mouseout",function(event){
      event.target.setAttribute("fill","black");
    });

  }
}

focuseflag();

function changestrokecolor () {
  for (var i=0; i<province.length;i++) {
    province[i].setAttribute("stroke","white");
  }
}

changestrokecolor();
function focuseprovince() {

  for (var i=0; i<province.length-6;i++) {
    province[i].addEventListener("mouseover", function(event){
      event.target.setAttribute("stroke-width","3px");
      event.target.setAttribute("stroke","lightgray");
    });
    province[i].addEventListener("mouseout", function(event){

      event.target.setAttribute("stroke-width"," ");
      event.target.setAttribute("stroke","white");
    });
  }
}

focuseprovince();

function overlayshanghai() {
	el = document.getElementById("shanghaioverlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function overlayhunan() {
	el = document.getElementById("hunanoverlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function overlayyunnan() {
	el = document.getElementById("yunnanoverlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}
