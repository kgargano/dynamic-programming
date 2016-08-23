import makeChange from './makeChange'

describe('when making USD change of 0 value', () => {
    let dollars = .0;
    it('it should return no change', () => {
        makeChange(dollars).should.deep.equal({});
    });
});
