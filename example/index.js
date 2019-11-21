// Any rendering library, but made with `regl` in mind.
import getRegl from 'regl';

// The position attributes.
import positions from '../';

// The various shader examples.
import vert from '../index.vert.glsl';
import vertNDC from '../uv-ndc.vert.glsl';
import vertST from '../uv-texture.vert.glsl';

import frag from '../index.frag.glsl';
import fragUV from '../uv.frag.glsl';

const regl = getRegl();
const vec2 = 0.5;

const drawScreenTriangle = regl({
    vert: regl.prop('vert'),
    frag: regl.prop('frag'),
    attributes: { position: positions },
    uniforms: {
        // These are only used for the `index.frag.glsl` shader.
        width: regl.context('viewportWidth'),
        height: regl.context('viewportHeight')
    },
    count: positions.length*vec2
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
