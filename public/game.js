const stats = document.getElementById("stats");

let state = {
  justice: 50,
  military: 50
};

function update() {
  stats.innerHTML = `
    Justiz: ${state.justice}<br>
    Militär: ${state.military}
  `;
}

function send(type, value) {
  state[type] += value;
  update();
}

update();
