// Class shapes with a constructor function to set values for color
class shapes {

    constructor() {
        this.color = ''
    }

    setColor(color) {
        this.color = (color);
    } 
}

// Renders an SVG shapes with display options pursuant to answer from terminal
class circle extends shapes {
    render() {
        return `<circle cx="150" cy="110" r="80" stroke="black" stroke-width="5" fill="${this.color}"/>`
    }
}

class triangle extends shapes {
    render() {
        return `<polygon points="150,10 275,160 25,160" stroke="black" stroke-width="5" fill="${this.color}"/>`
    }
}    

class square extends shapes {
    render() {
        return `<rect x="80" y="50" width="140" height="140" stroke="black" stroke-width="5" fill="${this.color}"/>`
    }
};

module.exports = { circle, triangle, square };