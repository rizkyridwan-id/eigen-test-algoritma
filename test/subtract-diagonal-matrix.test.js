const { subtractDiagonalMatrix } = require("../src/subtract-diagonal-matrix")

describe("Subtract diagonal matrix function", () => {
    const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
    const expectedOutput = 3
    test(`Input: ${matrix}. to be equal ${expectedOutput}`, () => {
        expect(subtractDiagonalMatrix(matrix)).toBe(expectedOutput)
    })
})