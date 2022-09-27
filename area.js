const squareArea = (r) => {
    return r * r;
};

const rectangleArea = (p, l) => {
    return p * l;
};

const circleArea = (r) => {
    return 22 / 7 * r * r;
};

module.exports = {
    squareArea,
    rectangleArea,
    circleArea,
};