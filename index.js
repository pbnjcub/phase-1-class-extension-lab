// Your code here
// 1. Define a `Polygon` class. `Polygon` will accept an `Array` of integers as a
//   parameter, which will represent each _side_ of a shape.
class Polygon {
    constructor(arr) {
        this.shape = arr
    }
// - Use the `get` keyword to make a getter method `countSides` that counts the
//   number of sides (each index in the array).
    get countSides() {
        return this.shape.length
    }
// - Use the `get` keyword to make a getter method `perimeter` that calculates the
//   sum of each side (each index in the array) of the polygon. This method will
//   become accessible to its child classes.
    get perimeter() {
        const reducer = (sum, val) => sum + val
        const init = 0
        return this.shape.reduce(reducer, init)
    }
}

// 2. Define a `Triangle` class that inherits from `Polygon`.
class Triangle extends Polygon {
// - Use the `get` keyword to make a getter method `isValid` that checks if the
//   given 3 sides for a triangle is valid.
    get isValid() {
        const aPlusB = this.shape[0] + this.shape[1]
        const bPlusC = this.shape[1] + this.shape[2]
        const cPlusA = this.shape[2] + this.shape[0]
        if(aPlusB > this.shape[2] && bPlusC > this.shape[0] && cPlusA > this.shape[1]) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
// - Use the `get` keyword to make a getter method `isValid` that checks if the
//   given 4 sides for a square is valid. A square is valid when the lengths of all
//   sides are equal.
    get isValid() {
        if(this.shape[0] === (this.perimeter / 4)) {
            return true
        } else {
            return false
        }
    }
    // - Use the `get` keyword to make a getter method `area` that calculates the area
    // of the square.
    get area() {
        return this.shape[0] * this.shape[0]
    }

}

