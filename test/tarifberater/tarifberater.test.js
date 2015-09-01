/**
 * Created by xie on 01.09.2015.
 */
describe("Testing currency filter", function () {
    beforeEach(module('tarifBerater.inputview'));
    it("currency integer", function() {
        inject(function ($filter) {
            expect($filter('currency')('12.345', 'Euro', 0)).not.toEqual('12 Euro');
});
});
});