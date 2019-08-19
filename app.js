const logo = document.querySelector("#logo");
const halfWidth = 100;
const fullWidth = halfWidth * 2;
const state = {
  position: {
    x: window.innerWidth / 2 - logo.clientWidth / 2,
    y: window.innerHeight / 2 - logo.clientHeight / 2
  },
  velocity: {
    x: 1,
    y: -1
  }
};

function draw() {
  logo.style.top = state.position.y + "px";
  logo.style.left = state.position.x + "px";
}

function update() {
  state.position.y += state.velocity.y * 4;
  state.position.x += state.velocity.x * 4;
}

function collisionDetection() {
  if (state.position.x + logo.clientWidth >= window.innerWidth) {
    state.velocity.x = -state.velocity.x;
  } else if (state.position.x <= 0) {
    state.velocity.x = -state.velocity.x;
  }

  if (state.position.y <= 0) {
    state.velocity.y = -state.velocity.y;
  } else if (state.position.y + logo.clientHeight >= window.innerHeight) {
    state.velocity.y = -state.velocity.y;
  }
}

function start() {
  draw();
  update();
  collisionDetection();
  requestAnimationFrame(start);
}

start();
