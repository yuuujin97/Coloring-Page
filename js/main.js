'use strict';

const areas = document.querySelectorAll('.paint_area');
const texts = document.querySelectorAll('.paint_text');
const drag = document.querySelector('.input_color');
const reset_button = document.querySelector('.reset_button');
let color;

drag.addEventListener('dragstart', dragStart);
drag.addEventListener('dragend', dragEnd);

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

reset_button.addEventListener('click', colorReset);

function dragStart() {
  color = this.value;
}

function dragEnd() {
  color = this.value;
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

function colorReset() {
  for (const area of areas) {
    area.style.backgroundColor = '';
  }
  for (const text of texts) {
    text.style.color = '';
  }
}
