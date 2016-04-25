// This is the script for the whole website
// This is the function to adjust every pages' sizes to fit the window
var width = window.innerWidth;
var height = window.innerHeight;
var quizwidth = width * 0.85,
    quizheight = height * 0.9;
var xiaolongwidth = width * 0.7;

document.getElementById("transpquiz").style.height = quizheight + "px";
document.getElementById("transpquiz").style.width = quizwidth +"px";
// document.getElementById("xiaolong").style.width = xiaolongwidth + "px";
// document.getElementById("xiaolong").style.height = height + "px";
function resize(d) {

  document.getElementById(d).style.height = height + "px";
  document.getElementById(d).style.width = width + "px";
};
 resize("homepage");
 resize("mappage");
 resize("quiz");
 resize("contact");
 window.onresize = function() {
   resize("homepage");
   resize("mappage");
   resize("quiz");
   resize("contact");
 };

// This is the jQuery to scroll the window.
 var blockScroller = $("#main").blockScroll();
 $("#main").blockScroll({
   scrollDuration: [100],
   fadeDuration: [100]
});
