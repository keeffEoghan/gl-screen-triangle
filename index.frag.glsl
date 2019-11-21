precision highp float;

uniform float width;
uniform float height;

void main() {
    gl_FragColor = vec4(0, gl_FragCoord.x/width, gl_FragCoord.y/height, 1);
}
