exports.subtractDiagonalMatrix = function (matrix) {
    if(!matrix.every(el => el.length === matrix.length)) {
        throw new Error("Matrix is not squared")
    }
    const firstDiagonal = matrix.map((el, i) => el[i])
    const secondDiagonal = matrix.map((el, i) => el[matrix.length - (i + 1)])

    return sum(firstDiagonal) - sum(secondDiagonal)
}

function sum (numberList) {
    return numberList.reduce((a, b) => a + b, 0)
}