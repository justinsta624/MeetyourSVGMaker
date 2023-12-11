// Test: classes "shapes" from shapes.js 
// for a render() method that returns a string for the corresponding SVG file with the given shape color.
const { circle, triangle, square } = require("./shapes");

// Test circle
describe('circle', () => {
    test('renders with corresponding SVG file with the given shape color', () => {
        const shapes = new circle();
        var color = ('green');
        shapes.setColor(color);
        expect(shapes.render()).toEqual(`<circle cx="150" cy="110" r="80" stroke="black" stroke-width="5" fill="${color}"/>`);
    });
});

// Test triangle
describe('triangle', () => {
    test('renders with corresponding SVG file with the given shape color', () => {
        const shapes = new triangle();
        var color = ('magenta');
        shapes.setColor(color);
        expect(shapes.render()).toEqual(`<polygon points="150,10 275,160 25,160" stroke="black" stroke-width="5" fill="${color}"/>`);
    });
});

// Test square
describe('square', () => {
    test('renders with corresponding SVG file with the given shape color', () => {
        const shapes = new square();
        var color = ('blue');
        shapes.setColor(color);
        expect(shapes.render()).toEqual(`<rect x="80" y="50" width="140" height="140" stroke="black" stroke-width="5" fill="${color}"/>`);
    });
});