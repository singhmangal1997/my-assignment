function toggleBox(box) {
  box.classList.toggle('expanded');
}

function changeColor(select, boxId) {
  const color = select.value;
  document.getElementById(boxId).style.backgroundColor = color;
}

function changeSize(select, boxId) {
  const size = select.value;
  const box = document.getElementById(boxId);
  box.style.width = size;
  box.style.height = box.classList.contains('expanded') ? '250px' : size;
}
