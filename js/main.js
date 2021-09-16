'use strict';

const drag_elements = document.querySelectorAll('.drag_element');
const sections = document.querySelectorAll('.mockup_section');
let color;

for (const drag_element of drag_elements) {
  drag_element.setAttribute('draggable', 'true');
  drag_element.addEventListener('dragstart', dragStart);
  drag_element.addEventListener('dragend', dragEnd);
}

for (const section of sections) {
  section.addEventListener('dragover', dragOver);
  section.addEventListener('dragenter', dragEnter);
  section.addEventListener('dragleave', dragLeave);
  section.addEventListener('drop', dragDrop);
}

function dragStart() {
  color = this.getAttribute('data-color');
}

function dragEnd() {
  color = this.getAttribute('data-color');
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {}
function dragDrop() {
  this.style.backgroundColor = color;
}
