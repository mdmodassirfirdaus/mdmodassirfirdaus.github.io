const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  alpha: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.getElementById("background").appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(2, 2);

const colors = [
  new THREE.Color("#00A1FF"),
  new THREE.Color("#004E64")
];

const uniforms = {
  u_time: { value: 0 },
  u_color1: { value: colors[0] },
  u_color2: { value: colors[1] }
};

const material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  vertexShader: document.querySelector("#vertexShader").textContent,
  fragmentShader: document.querySelector("#fragmentShader").textContent,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 1;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  uniforms.u_time.value += 0.01;
}

animate();
