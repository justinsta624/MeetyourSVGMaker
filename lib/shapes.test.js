// Test: classes "shapes" from shapes.js 
// for a render() method that returns a string for the corresponding SVG file with the given shape color.
const { circle, triangle, square } = require("./shapes");

// Test circle
describe('circle', () => {
    test('renders with corresponding SVG file with the given shape color', () => {
        const shapes = new circle();
        var color = ('green');
        shapes.setColor(color);
        expect(shapes.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}">`);
    });
});

// Test triangle
describe('triangle', () => {
    test('renders with corresponding SVG file with the given shape color', () => {
        const shapes = new triangle();
        var color = ('magenta');
        shapes.setColor(color);
        expect(shapes.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}">`);
    });
});

// Test square
describe('square', () => {
    test('renders with corresponding SVG file with the given shape color', () => {
        const shapes = new square();
        var color = ('blue');
        shapes.setColor(color);
        expect(shapes.render()).toEqual(`<rect x="20" y="20" rx="20" ry="20" width="30" height="30" fill="${color}">`);
    });
});