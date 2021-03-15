exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    return array.reduce(function (accumulator, currentValue) {
        if (accumulator < currentValue) {
            return accumulator;
        } else {
            return currentValue;
        }
    });
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    return array.reduce(function (accumulator, currentValue) {
        if (accumulator > currentValue) {
            return accumulator;
        } else {
            return currentValue;
        }
    });
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    const sum = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });
    return sum / array.length;
};
