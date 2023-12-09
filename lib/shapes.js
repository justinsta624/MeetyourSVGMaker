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
        return `
        <circle cx="150" cy="100" r="80" fill="${this.color}">`
    }
}

class triangle extends shapes {
    render() {
        return `
        <polygon points="0,150 250,150 200,0" fill="${this.color}">`
    }
}    

class square extends shapes {
    render() {
        return `
        <rect x="20" y="20" rx="20" ry="20" width="30" height="30" fill="${this.color}">`
    }
};

module.exports = [circle, triangle, square];