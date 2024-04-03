const { reverseString } = require("../src/reverse-string");

describe("Reverse String Function", () => {
    test("reverse string from NEGIE1 to equal EIGEN1", () => {
        expect(reverseString("NEGIE1")).toBe("EIGEN1")
    })
})