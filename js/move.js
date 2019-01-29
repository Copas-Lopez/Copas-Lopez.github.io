var currSlide = 0;
var lastEnlarge = 0;
var isEnlarged = 0;
moveDivs(currSlide);

function plusDivs(n){
  console.log(currSlide);
  currSlide = currSlide + n;
  if(isEnlarged){
    removeEnlarge();
  }
  moveDivs(currSlide);
}

function enlarge(n){
  var x = $(".item");
  var focus = $(x).index(n);
  if(focus==currSlide && isEnlarged!=1){
    $(x[focus]).css({
      "-webkit-transform": "scale(1.5,1.5)",
      "-webkit-transition" : "transform 0.5s",
      "transition" : "transform 0.5s",
      "transform": "translateX(-" + x[currSlide].clientWidth/2 + "px) scale(1.50,1.50) translateZ(0px)",
      "opacity":"1",
      "z-index":"2"
    });
    lastEnlarge = focus;
    isEnlarged = 1;
  }else if(isEnlarged==1){
    $(x[lastEnlarge]).css({
      "-webkit-transform": "scale(1,1)",
      "transform": "scale(1,1) translateZ(0px) translateX(-" + x[currSlide].clientWidth/2 + "px)",
      "transition" : "scale 1s",
      "opacity":"1",
      "z-index":"2"
    });
    isEnlarged = 0;
  }else{
    $(x[lastEnlarge]).css({
      "-webkit-transform": "scale(1,1)",
      "transform": "scale(1,1) translateZ(0px) translateX(-" + x[currSlide].clientWidth/2 + "px)",
      "transition" : "scale 1s",
      "opacity":"1",
      "z-index":"2"
    });
    isEnlarged = 0;
  }
}

function removeEnlarge(){
  var x = $(".item");
  $(x[lastEnlarge]).css({
    "-webkit-transform": "scale(1,1)",
    "transform": "scale(1,1) translateZ(0px) translateX(-" + x[lastEnlarge].clientWidth/2 + "px)",
    "transition" : "scale 1s",
    "opacity":"1",
    "z-index":"1"
  });
  isEnlarged = 0;
}

function moveDivs(n){
  var x = $(".item");
  if(currSlide >= x.length){
    currSlide = 0;
  }else if(currSlide < 0){
    currSlide = x.length-1;
  }
  var nextSlide = getNext(currSlide, x);
  var nextSlide_right = getNext(nextSlide, x);
  var prevSlide = getPrev(currSlide, x);
  var prevSlide_left = getPrev(prevSlide, x);

  //Make all slides invisible.
  for(i=0;i<x.length;i++){
    x[i].style.opacity = "0";
  }

  //Move and make relevant slides visible.
  $(x[currSlide]).css({
    "-webkit-transform": "translateZ(0px) translateX(0px)",
    "transform": "translateZ(0px) translateX(-" + x[currSlide].clientWidth/2 + "px)",
    "transition" : "transform 1s, opacity 1s",
    "opacity":"1",
    "z-index":"2"
  });

  $(x[nextSlide]).css({
    "-webkit-transform": "translateZ(0px) translateX(0px)",
    "transform": "scale(0.85,0.85) translateX(" + x[currSlide].clientWidth/2 + "px)",
    "transition" : "transform 1s, opacity 1s",
    "opacity":"1",
    "z-index":"1"
  });

  $(x[nextSlide_right]).css({
    "-webkit-transform": "translateZ(0px) translateX(0px)",
    "transform": "scale(0.5,0.5) translateX(" + x[nextSlide_right].clientWidth + "px)",
    "transition" : "transform 1s, opacity 1s",
    "opacity":"0",
    "z-index":"0"
  });

  $(x[prevSlide]).css({
    "-webkit-transform": "scale(0.85,0.85) translateX(-" + (x[prevSlide].clientWidth + x[currSlide].clientWidth/2) + "px)",
    "transform": "scale(0.85,0.85) translateX(-" + (x[prevSlide].clientWidth + x[currSlide].clientWidth/2) + "px)",
    "transition" : "transform 1s, opacity 1s",
    "opacity":"1",
    "z-index":"1"
  });

  $(x[prevSlide_left]).css({
    "-webkit-transform": "translateZ(0px) translateX(0px)",
    "transform": "scale(0.5,0.5) translateX(-" + (x[prevSlide].clientWidth*2 + x[currSlide].clientWidth/2) + "px)",
    "transition" : "transform 1s, opacity 1s",
    "opacity":"0",
    "z-index":"0"
  });
}

function getNext(n, items){
  if(n >= items.length-1){
    return 0;
  }else{
    return n+1;
  }
}

function getPrev(n, items){
  if(n < 1){
    return items.length-1;
  }else{
    return n-1;
  }
}
