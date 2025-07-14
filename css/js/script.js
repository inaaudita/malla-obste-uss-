// Lista de ramos que ya completaste
const completados = [
  "Inglés General",
  "Biología Celular",
  "Anatomía Humana",
  "Química General y Orgánica",
  "Fundamentos de la Matronería"
];

// Prerrequisitos para cada ramo (nombre exacto debe coincidir)
const prerrequisitos = {
  "Fisiología Humana": ["Biología Celular", "Anatomía Humana"],
  "Histoembriología": ["Biología Celular"],
  "Bioquímica General": ["Biología Celular", "Química General y Orgánica"],
  "Fundamentos de la SSyR": ["Fundamentos de la Matronería"],
  "Atención en Salud Basada en la Evidencia": ["Inglés General"],
  "Ética": ["Antropología"],
  "Embriología y Genética": ["Histoembriología"],
  "Microbiología General": ["Biología Celular"],
  "Farmacología General": ["Fisiología Humana", "Bioquímica General"],
  "Farmacología Aplicada": ["Fisiología Humana", "Bioquímica General"],
  "Anatomía Aplicada": ["Anatomía Humana"],
  "Género y Salud": ["Antropología", "Fundamentos de la SSyR"],
  // Continúa para el resto de los ramos...
};

// Seleccionamos todos los elementos con clase .ramo
const ramosElements = document.querySelectorAll('.ramo');

ramosElements.forEach(ramoEl => {
  const nombre = ramoEl.textContent.trim();

  if (completados.includes(nombre)) {
    // Si ya completaste el ramo
    ramoEl.classList.add('completado');
  } else {
    // Verificamos si todos los prerrequisitos están completados
    const reqs = prerrequisitos[nombre] || [];
    const liberado = reqs.every(r => completados.includes(r));

    if (liberado) {
      ramoEl.classList.add('liberado');
    } else {
      ramoEl.classList.add('bloqueado');
    }
  }
});
