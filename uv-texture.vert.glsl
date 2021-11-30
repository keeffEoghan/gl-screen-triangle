precision highp float;

attribute vec2 position;

varying vec2 uv;

void main() {
    // Transform UV NDC to texture coordinates.
    uv = (position*0.5)+0.5;
    gl_Position = vec4(position, 0, 1);
}
