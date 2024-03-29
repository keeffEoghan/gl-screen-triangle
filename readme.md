# `gl-screen-triangle`

Convenient definitions for a triangle covering the full screen in WebGL, along with default GLSL shaders - BYORenderer.

No drawing dependencies - for easier compatibility with any renderer which may rely on tracking the WebGL state (e.g: [`regl`](https://github.com/regl-project/regl/)).

[Check out the demo](http://epok.tech/gl-screen-triangle/) - click to switch between the Normalised Device Coordinates (NDC) and texture coordinates setup examples.

## Installation

Install from [`npm`](https://www.npmjs.com/package/@epok.tech/gl-screen-triangle) using:
```bash
npm install @epok.tech/gl-screen-triangle
```
or:
```bash
yarn add @epok.tech/gl-screen-triangle
```

## Usage

```javascript
// Any rendering library, but made with `regl` in mind.
import getRegl from 'regl';

// The position attributes.
import { positions, count } from '@epok.tech/gl-screen-triangle';

// The various shader examples.
import vert from '@epok.tech/gl-screen-triangle/index.vert.glsl';
import vertNDC from '@epok.tech/gl-screen-triangle/uv-ndc.vert.glsl';
import vertST from '@epok.tech/gl-screen-triangle/uv-texture.vert.glsl';

import frag from '@epok.tech/gl-screen-triangle/index.frag.glsl';
import fragUV from '@epok.tech/gl-screen-triangle/uv.frag.glsl';

const regl = getRegl();

const drawScreenTriangle = regl({
    vert: regl.prop('vert'),
    frag: regl.prop('frag'),
    attributes: { position: positions },
    uniforms: {
        // These are only used for the `index.frag.glsl` shader.
        width: regl.context('viewportWidth'),
        height: regl.context('viewportHeight')
    },
    count
});

const clear = { color: [0, 0, 0, 1], depth: 1, stencil: 0 };

const shaders = [
    { name: 'uv-ndc', vert: vertNDC, frag: fragUV },
    { name: 'uv-texture', vert: vertST, frag: fragUV },
    { name: 'index', vert, frag }
];

let shader;

function frame({ tick: t }) {
    regl.poll();
    regl.clear(clear);

    // Switch shader every frame.
    const s = t%shaders.length;

    shader = shaders[s];
    console.log(`Shader ${s}: '${shader.name}'`, shader);
    drawScreenTriangle(shader);
}

const draw = () => regl.draw(frame);

document.addEventListener('click', draw);
draw();
```

## See Also

Based on:
- [`a-big-triangle`](https://github.com/mikolalysenko/a-big-triangle)
- [`gl-big-triangle`](https://github.com/Jam3/gl-big-triangle)
