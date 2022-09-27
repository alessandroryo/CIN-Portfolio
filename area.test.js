const { squareArea, rectangleArea, circleArea } = require('./area.js');

test('Square area with r = 5', () => {
    expect(squareArea(5)).toBe(25);
});

test('Rectangle area with p = 2 and l = 3', () => {
    expect(rectangleArea(2, 3)).toBe(6);
});

test('Circle area with r = 7', () => {
    expect(circleArea(7)).toBe(154);
});