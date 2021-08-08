const anguloA = 60;
const anguloB = 60;
const anguloC = 60;
if (anguloA > 180 || anguloA <= 0) {
  console.log('angulo A invalido');
} else if (anguloB >= 180 || anguloB <= 0) {
  console.log('angulo B invalido');
} else if (anguloC >= 180 || anguloC <= 0) {
  console.log('angulo C invalido');
} else if (anguloA + anguloB + anguloC == 180) {
  console.log('true');
} else {
  console.log('false');
}