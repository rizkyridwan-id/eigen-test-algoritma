const { searchLongest } = require("../src/search-long-word")


describe("Search Long Word from sentence", () => {
    const sentence = "Saya sangat senang mengerjakan soal algoritma"
    const expectedOutput = "mengerjakan: 11 character"
    test(`find longest word from sentence: "${sentence}", to be equal ${expectedOutput}`, () => {
        expect(searchLongest(sentence)).toBe(expectedOutput)
    })
})