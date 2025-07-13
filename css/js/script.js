const container = document.getElementById('grid-container');

for (let i = 1; i <= 25; i++) {
  const cell = document.createElement('div');
  cell.className = 'grid-item';
  cell.textContent = i;

  cell.addEventListener('click', () => {
    alert(`Hiciste clic en la celda ${i}`);
  });

  container.appendChild(cell);
}
