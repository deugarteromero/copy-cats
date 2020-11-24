//Selection
const complete = document.getElementById('complete');
const inComplete = document.getElementById('incomplete');

// Empty space to Place Draggable Item
  const box = document.createElement('div');
  box.setAttribute('class', 'empty');



//Target Functions
function dragStartHandler(e){
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.dropEffect = 'move';

  // const clone = box.cloneNode(true);
  // console.log(clone);
  complete.appendChild(box);



  const elID = e.dataTransfer.getData('text/plain');
  setTimeout( () => {
    document.getElementById(elID).classList.add('visible');
  }, 0);

};

// DropZone Functions
complete.addEventListener('dragenter', dragEnterHandler);
function dragEnterHandler(e){
  box.classList.add('expand');
};

box.addEventListener('dragover', dragOverHandler);
function dragOverHandler(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
};

box.addEventListener('dragleave', dragLeaveHandler);
function dragLeaveHandler(e){
  box.classList.remove('expand');
  // setTimeout( () => {
  //   empty.remove();
  // }, 500);
};

// complete.addEventListener('dragexit', dragExitHandler);
// function dragExitHandler(e){
//   empty.remove();
// };

box.addEventListener('drop', dropHandler);
function dropHandler(e){
  e.preventDefault();
  const elID = e.dataTransfer.getData('text/plain');
  const element = document.getElementById(elID);
  element.classList.remove('visible');
  e.target.appendChild(element);

  element.classList.toggle('strike');

};




window.addEventListener('DOMContentLoaded', () => {

  const els = document.querySelectorAll('.item');
  for(let x = 0; x < els.length; x++){
    els[x].addEventListener("dragstart", dragStartHandler);
    //add dragend maybe?
  };

});

