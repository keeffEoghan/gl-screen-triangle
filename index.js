/**
 * The 3 vertices of a 2D triangle covering the viewport in NDC coordinates ([-1, 1]).
 *
 * @export
 * @type {array.<array.<number>>}
 */
export const vertices = [[-1, -1], [-1, 4], [4, -1]];

export const count = vertices.length;
export const dim = 2;

/**
 * The flat array of the above triangle, to be bound as a WebGL attribute buffer for
 * rendering the triangle in the vertex shader.
 * These positions will result in clipped NDC coordinates ([-1, 1]) over the
 * viewport's width and height.
 *
 * @export
 * @type {array.<number>}
 */
export const positions = vertices.flat();

export default positions;
