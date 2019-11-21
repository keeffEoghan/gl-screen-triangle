precision highp float;

attribute vec2 position;

varying vec2 uv;

// Flips the y-axis to point downwards.
const vec2 flip = vec2(1, -1);

void main() {
    uv = position*flip;
    gl_Position = vec4(position, 0, 1);
}
