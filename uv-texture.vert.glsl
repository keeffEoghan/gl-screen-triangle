precision highp float;

attribute vec2 position;

varying vec2 uv;

// Translation for UV NDC to texture coordinates.
const vec2 offset = vec2(0.5);

void main() {
    uv = (position*0.5)+offset;
    gl_Position = vec4(position, 0, 1);
}
