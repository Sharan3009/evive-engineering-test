import Main from "../src/main";

let main:Main = new Main();

describe("test add function", () => {
    it("should return 15 for setTest(15)", () => {
        expect(main.setTest(15)).toBe(15);
    });it("should return 5 for setTest(5)", () => {
        expect(main.setTest(5)).toBe(5);
    });
});