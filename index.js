import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js';

const canvas = document.getElementById('animation-canvas');

const sphereEffect = Spheres2Background(canvas, {
    count: 180,
    colors: [0x00ffcc, 0xff66b2, 0xffffff],
    minSize: 0.5,
    maxSize: 1.2
});

const colorButton = document.getElementById('change-colors');

document.body.addEventListener('click', (event) => {
    if (event.target !== colorButton) {
        sphereEffect.togglePause();
    }
});

colorButton.addEventListener('click', () => {
    sphereEffect.spheres.setColors([
        0xffffff * Math.random(),
        0xffffff * Math.random(),
        0xffffff * Math.random()
    ]);
    sphereEffect.spheres.light1.color.set(0xffffff * Math.random());
});
