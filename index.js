module.exports = function(rad, amplitude, length){
  const theta = Math.sin(rad) * Math.PI * amplitude;
  const x = Math.cos(theta) * length;
  const y = Math.sin(theta) * length;
  return {x: x, y: y}
}
