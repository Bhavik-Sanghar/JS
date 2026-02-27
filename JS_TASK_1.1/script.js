let size = 2;
const table = document.getElementById("table_area");

function make_table() {
  table.innerHTML = ``;
  // set grid columns/rows so cells split available space evenly
  table.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  table.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // create size*size cells (using td elements for minimal change)
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("td");
    cell.style.background = "pink";
    table.appendChild(cell);
  }
}

function canGrow(nextSize) {
  // compute future cell pixel size and ensure it's not too small
  const rect = table.getBoundingClientRect();
  const availableW = rect.width;
  const availableH = rect.height;
  const cellPx = Math.min(availableW / nextSize, availableH / nextSize);
  // threshold: stop growing when cells would be smaller than 14px
  return cellPx >= 14;
}

table.addEventListener("click", (e) => {
  e.preventDefault();
  const next = size + 1;
  if (canGrow(next)) {
    size = next;
    make_table();
  } else {
    console.log('maximum size reached — cells would be too small');
  }
});

// build initial grid and also rebuild on resize so cells stay square and fit
make_table();
window.addEventListener('resize', () => {
  // keep current size but rebuild grid so CSS grid adapts to new container size
  make_table();
});
