const currActive = 2;
const items = document.getElementsByClassName('item');
const itemContainer = document.querySelector('.item-box-master');
let isDown = false;
let startX;
let scrollLeft;

function setActive(item){
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }
  item.classList.add('active');
}

itemContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - itemContainer.offsetLeft;
});
itemContainer.addEventListener('mouseleave', () => {
  isDown = false;
});
itemContainer.addEventListener('mouseup', () => {
  isDown = false;
  //slider.classList.remove('active');
});
itemContainer.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - itemContainer.offsetLeft;
  const walk = (x - startX) * 3;
  move(walk);
  //const walk = (x - startX) * 3; //scroll-fast
  //itemContainer.scrollLeft = scrollLeft - walk;
});
itemContainer.addEventListener('touchmove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - itemContainer.offsetLeft;
  const walk = (x - startX) * 3;
  move(walk);
  //const walk = (x - startX) * 3; //scroll-fast
  //itemContainer.scrollLeft = scrollLeft - walk;
});

function slider_start(){
  var shift = itemContainer.firstElementChild.offsetWidth;
  itemContainer.style.transform = "translateX(-"+ shift +"px)";
}

function move(x){
  x = getTranslateX() + (x*(0.025));
  if(x>(-3000) && x<(-2250)){
    shiftRight();
    return;
  }else if(x>(-500) && x<(0)){
    shiftLeft();
    return;
  }
  itemContainer.style.transform = "translateX("+ x +"px)";
}

function getTranslateX() {
  var style = window.getComputedStyle(itemContainer);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  return matrix.m41;
}

function shiftRight(){
  var toRemove = itemContainer.firstElementChild;
  var toDupe = itemContainer.firstElementChild.nextElementSibling;
  var cln = toDupe.cloneNode(true);
  itemContainer.appendChild(cln);
  itemContainer.removeChild(toRemove);
  var shift = itemContainer.lastElementChild.offsetWidth;
  shift = getTranslateX() + shift;
  itemContainer.style.transform = "translateX("+ shift +"px)";
  console.log(shift);
}

function shiftLeft(){
  var toRemove = itemContainer.lastElementChild;
  var toDupe = itemContainer.firstElementChild.nextElementSibling;
  var cln = toDupe.cloneNode(true);
  itemContainer.insertBefore(cln, itemContainer.firstElementChild);
  itemContainer.removeChild(toRemove);
  console.log(getTranslateX());
  var shift = itemContainer.lastElementChild.offsetWidth;
  shift = getTranslateX() - shift;
  itemContainer.style.transform = "translateX("+ shift +"px)";
}
