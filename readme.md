# gl-screen-triangle

Convenient definitions for a triangle covering the full screen in WebGL, along with default GLSL shaders, but without dependencies or drawing (for easier compatibility with any renderer which may rely on tracking the WebGL state, e.g: [regl](https://github.com/regl-project/regl/)).

BYORenderer.

[Check out the demo](http://epok.tech/gl-screen-triangle/) - click to switch between the Normalised Device Coordinates (NDC) and texture coordinates setup examples.

## Usage

```javascript
// Any rendering library, but made with `regl` in mind.
import getRegl from 'regl';

import positions from 'gl-screen-triangle';

import uvVert from 'gl-screen-triangle/index.vert.glsl';
import stVert from 'gl-screen-triangle/texture.vert.glsl';

import frag from 'gl-screen-triangle/index.frag.glsl';

const regl = getRegl();
const verts = [stVert, uvVert];

const drawScreenTriangle = regl({
    vert: ({ tick: t }) => verts[t%verts.length],
    frag,
    attributes: { position: positions },
    count: positions.length/2
});

const clear = {
    color: [0, 0, 0, 1],
    depth: 1,
    stencil: 0
};

function frame() {
    regl.poll();
    regl.clear(clear)
    drawScreenTriangle();
}

document.addEventListener('click', frame);
frame();
```

## See Also

Based on:
- [a-big-triangle](https://github.com/mikolalysenko/a-big-triangle)
- [gl-big-triangle](https://github.com/Jam3/gl-big-triangle)
