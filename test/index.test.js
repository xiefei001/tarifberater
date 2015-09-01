/**
 * Created by xie.fei on 01.09.2015.
 */
describe("unit test suite", function () {
    it("true is true", function () {
        expect(true).toBe(true);
    });
});


describe("test not", function () {
    it("first", function () {
        expect(true).not.toBe(false);
    });
});

describe("Testing routes", function () {
    beforeEach(module('tarifBerater'));
    it("route route test", function() {
        inject(function ($route) {
            expect($route.routes[null].redirectTo).toEqual('/tarifberater');
        });
    });
});