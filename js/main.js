'use strict';

const drag_color = document.querySelector('.input_color');
const areas = document.querySelectorAll('.paint_area');
const texts = document.querySelectorAll('.paint_text');
const reset_button = document.querySelector('.reset_button');
const position = { x: 0, y: 0 };
let color;

reset_button.addEventListener('click', () => {
  for (const area of areas) {
    area.style.backgroundColor = '';
  }
  for (const text of texts) {
    text.style.color = '';
  }
});

function addDropzone(elements) {
  for (let type of elements) {
    interact(type).dropzone({
      accept: '#drag_drop',
      overlap: 0.5,

      ondragenter: function (event) {
        let dropzoneElement = event.target;
        dropzoneElement.classList.add('hold');
      },

      ondragleave: function (event) {
        event.target.classList.remove('hold');
      },

      ondrop: function (event) {
        event.target.classList.remove('hold');
        if (event.target.classList.contains('paint_text')) {
          event.target.style.color = color;
        } else if (event.target.classList.contains('paint_area')) {
          event.target.style.backgroundColor = color;
        }
      },
    });
  }
}

addDropzone(areas);
addDropzone(texts);

interact(drag_color)
  .on('tap', () => {
    drag_color.removeAttribute('disabled');
  })
  .draggable({
    listeners: {
      start(event) {
        color = event.target.value;
      },

      move(event) {
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },

      end(event) {
        position.x = 0;
        position.y = 0;
        event.target.style.transform = `translate(0, 0)`;
        drag_color.setAttribute('disabled', 'true');
      },
    },
  });
