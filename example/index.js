// Any rendering library, but made with `regl` in mind.
import getRegl from 'regl';

import positions from '../';

import uvVert from '../index.vert.glsl';
import stVert from '../texture.vert.glsl';

import frag from '../index.frag.glsl';

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
