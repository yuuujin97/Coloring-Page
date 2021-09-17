'use strict';

const drag_elements = document.querySelectorAll('.drag_element');
const areas = document.querySelectorAll('.paint_area');
const texts = document.querySelectorAll('.paint_text');
let color;

for (const drag_element of drag_elements) {
  drag_element.setAttribute('draggable', 'true');
  drag_element.addEventListener('dragstart', dragStart);
  drag_element.addEventListener('dragend', dragEnd);
}

for (const area of areas) {
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragenter', dragEnter);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', dragDrop);
}

for (const text of texts) {
  text.addEventListener('dragover', dragOver);
  text.addEventListener('dragenter', dragEnter);
  text.addEventListener('dragleave', dragLeave);
  text.addEventListener('drop', dragDrop);
}

function dragStart() {
  color = this.getAttribute('data-color');
}

function dragEnd() {
  color = this.getAttribute('data-color');
}

function dragOver(e) {
  e.preventDefault();
  e.stopPropagation();
  this.classList.add('hold');
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {
  this.classList.remove('hold');
}
function dragDrop(e) {
  e.stopPropagation();
  this.classList.remove('hold');
  if (this.classList.contains('paint_text')) {
    this.style.color = color;
  } else if (this.classList.contains('paint_area')) {
    this.style.backgroundColor = color;
  }
}
