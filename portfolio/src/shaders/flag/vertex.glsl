uniform float uAmplitude;
uniform float uWaveLength;
uniform float uTime;
varying vec2 vUv;


void main() {
    vec3 newPosition = position;
     float wave = sin(position.x * uWaveLength + uTime);
     newPosition.z += wave;
     gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPosition, 1.0);

     vUv = uv;

}