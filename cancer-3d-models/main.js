const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Example: Healthy Cell (Green Sphere)
const healthyGeometry = new THREE.SphereGeometry(1, 32, 32);
const healthyMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, shininess: 100 });
const healthyCell = new THREE.Mesh(healthyGeometry, healthyMaterial);
healthyCell.position.x = -2;
scene.add(healthyCell);

// Example: Cancer Cell (Red Sphere, Distorted)
const cancerGeometry = new THREE.SphereGeometry(1, 32, 32);
for (let i = 0; i < cancerGeometry.vertices?.length; i++) {
  cancerGeometry.vertices[i].x += (Math.random() - 0.5) * 0.2;
}
const cancerMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 30 });
const cancerCell = new THREE.Mesh(cancerGeometry, cancerMaterial);
cancerCell.position.x = 2;
scene.add(cancerCell);

// Lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  healthyCell.rotation.y += 0.01;
  cancerCell.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
