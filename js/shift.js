var slideIndex = 1;
var lastEnlarge = 1;
var isEnlarged = 0;
showDivs(slideIndex);

function plusDivs(n){
  var test = slideIndex+=n;
  showDivs(test);
}

function enlarge(n){
  var x = $(".item");
  var focus = $(x).index(n);
  if(focus==slideIndex-1 && isEnlarged!=1){
    $(x[slideIndex-1]).css({
      "-webkit-transform": "scale(1.5,1.5)",
      "transform": "scale(1.50,1.50)",
      "-webkit-transition" : "scale 2s",
      "transition" : "scale 2s",
      "opacity":"1",
      "z-index":"1"
    });
    $(".remove-enlarge").css({
      "-webkit-opacity":"1",
      "opacity":"1"
    });
    lastEnlarge = focus;
    isEnlarged = 1;
  }else if(isEnlarged==1){
    $(x[lastEnlarge]).css({
      "-webkit-transform": "scale(1,1)",
      "transform": "scale(1,1)",
      "transition" : "scale 1s",
      "opacity":"1",
      "z-index":"1"
    });
    isEnlarged = 0;
  }else{
    $(x[lastEnlarge]).css({
      "-webkit-transform": "scale(1,1)",
      "transform": "scale(1,1)",
      "transition" : "scale 1s",
      "opacity":"1",
      "z-index":"1"
    });
    isEnlarged = 0;
  }
}

function removeEnlarge(){
  var x = $(".item");
  $(x[lastEnlarge]).css({
    "-webkit-transform": "scale(1,1)",
    "transform": "scale(1,1)",
    "transition" : "scale 1s",
    "opacity":"1",
    "z-index":"1"
  });
  $(".remove-enlarge").css({
    "-webkit-opacity":"0",
    "opacity":"0"
  });
}

function showDivs(n){
  var i;
  var x = $(".item");
  if(n>x.length){
    slideIndex = 1;
  }
  if(n<1){
    slideIndex = x.length;
  }
  var next = getNext(slideIndex, x);
  var next_right = getNext(next, x);
  var prev = getPrevious(slideIndex, x);
  var prev_left = getPrevious(prev, x);
  for(i=0;i<x.length;i++){
    x[i].style.opacity = "0";
    var test = x[i];
  }
  $(x[slideIndex-1]).css({
    "-webkit-transform": "translateZ(0px) translateX(0px)",
    "transform": "translateZ(0px) translateX(0px)",
    "transition" : "transform 1s, opacity 1s",
    "opacity":"1",
    "z-index":"1"
  });
  $(x[next-1]).css({
    "-webkit-transform": "translateZ(-" + x[slideIndex-1].clientWidth + "px) translateX(calc(" + x[slideIndex-1].clientWidth + "px + 25px))",
    "transform": "translateZ(-" + x[slideIndex-1].clientWidth + "px) translateX(calc(" + x[slideIndex-1].clientWidth + "px + 25px))",
    "opacity":"1",
    "transition" : "transform 1s, opacity 1s",
    "z-index":"2"
  });
  $(x[next_right-1]).css({
    "-webkit-transform": "translateZ(-" + x[next_right-1].clientWidth + "px) translateX(calc(" + (x[next_right-1].clientWidth * 2) + "px + 50px))",
    "transform": "translateZ(-" + x[next_right-1].clientWidth + "px) translateX(calc(" + (x[next_right-1].clientWidth * 2) + "px + 50px))",
    "opacity":"0",
    "transition" : "transform 1s, opacity 1s",
    "z-index":"4"
  });
  $(x[prev-1]).css({
    "-webkit-transform": "translateZ(-" + x[slideIndex-1].clientWidth + "px) translateX(calc(-" + x[slideIndex-1].clientWidth + "px - 25px))",
    "transform": "translateZ(-" + x[slideIndex-1].clientWidth + "px) translateX(calc(-" + x[slideIndex-1].clientWidth + "px - 25px))",
    "opacity":"1",
    "transition" : "transform 1s, opacity 2s",
    "z-index":"3"
  });
  $(x[prev_left-1]).css({
    "-webkit-transform": "translateZ(-" + x[prev_left-1].clientWidth + "px) translateX(-550px)",
    "transform": "translateZ(-" + x[prev_left-1].clientWidth + "px) translateX(calc(-" + (x[prev_left-1].clientWidth * 2) + "px - 50px))",
    "opacity":"0",
    "transition" : "transform 1s, opacity 1s",
    "z-index":"4"
  })
}

function getNext(n, x){
  if(n+1>x.length){
    return 1;
  }else{
    return n+1;
  }
}

function getPrevious(n, x){
  if(n-1<=0){
    return x.length;
  }else{
    return n-1;
  }
}
