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

function move(x){
  if(x < getTranslateX()){
    x = getTranslateX() + (x*(0.025));
  }else{
    x = getTranslateX() + (x*(0.025));
  }
  itemContainer.style.transform = "translateX("+ x +"px)";
}

function getTranslateX() {
  var style = window.getComputedStyle(itemContainer);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  return matrix.m41;
}
