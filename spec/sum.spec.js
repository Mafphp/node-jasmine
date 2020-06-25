const sum = require('../helpers/sum');
describe('sum calculate', () => {
    it(`sum 1 + 2 = 3`, () => {
        expect(sum(1,2)).toBe(3)
    });
    it(`sum null + 2 = throw error`, () => {
        try {
            sum(null,2)
            fail('FAILED')
        } catch (error) {
            expect(error.message).toEqual(`first argument is not defined`);
        }
    });
    it(`sum 1 + null = throw error`, () => {
        try {
            sum(1,null)
            fail('FAILED')
        } catch (error) {
            expect(error.message).toEqual(`second argument is not defined`);
        }
    });
    it(`sum null + null = throw error`, () => {
        try {
            sum(null,null)
            fail('FAILED')
        } catch (error) {
            expect(error.message).toEqual(`first argument is not defined`);
        }
    });
});