/**
 * The flat array (3 vertices of a 2D triangle) to be bound as a WebGL attribute
 * buffer for rendering the triangle in the vertex shader.
 * These positions will result in clipped NDC coordinates in the range [-1, 1] over the
 * viewport's width and height.
 *
 * @export
 * @type {array.<number>}
 */
export const positions = [
    -1, -1,
    -1, 4,
    4, -1
];

export default positions;
