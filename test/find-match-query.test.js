const { findMatchQuery } = require("../src/find-match-query")

describe("Find Match Query Function", () => {
    const input = ['xc', 'dz', 'bbb', 'dz']
    const query = ['bbb', 'ac', 'dz']
    const expectedOutput = [1, 0, 2]
    test(`input: ${input}, query: ${query}. output: ${expectedOutput}`, () => {
        expect(findMatchQuery(input, query)).toEqual(expectedOutput)
    })
})