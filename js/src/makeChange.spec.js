import makeChange from './makeChange'

describe('when making USD change', () => {

    describe("with no value", ()=>{
        let dollars = 0;
        it('it should return no change', () => {
            makeChange(dollars).should.deep.equal({});
        });
    });

    describe('of 1 cent', () => {
        let dollars = .01;
        it('it should return 1 penny', () => {
            makeChange(dollars).should.deep.equal({
                "pennies":1
            });
        });
    });

    describe('of 5 cents', () => {
        let dollars = .05;
        it('it should return 1 nickel', () => {
            makeChange(dollars).should.deep.equal({
                "nickels":1
            });
        });


    });

    describe('of 10 cents', () => {
        let dollars = .10;
        it('it should return 1 dime', () => {
            makeChange(dollars).should.deep.equal({
                "dimes":1
            });
        });
    });

    describe('of 25 cents', () => {
        let dollars = .25;
        it('it should return 1 quarter', () => {
            makeChange(dollars).should.deep.equal({
                "quarters":1
            });
        });
    });


    describe('of 50 cents', () => {
        let dollars = .5;
        it('it should return 2 quarters', () => {
            makeChange(dollars).should.deep.equal({
                "quarters":2
            });
        });
    });


    describe('of 55 cents', () => {
        let dollars = .55;
        it('it should return 2 quarters 1 nickel', () => {
            makeChange(dollars).should.deep.equal({
                "quarter":2,
                "nickels":1
            });
        });
    });


    describe('of 56 cents', () => {
        let dollars = .56;
        it('it should return 2 quarters 1 nickel 1 penny', () => {
            makeChange(dollars).should.deep.equal({
                "quarter":2,
                "nickels":1,
                "pennies":1
            });
        });
    });


    describe('of 66 cents', () => {
        let dollars = .66;
        it('it should return 2 quarters 1 dime 1 nickel 1 penny', () => {
            makeChange(dollars).should.deep.equal({
                "quarter":2,
                "dimes":1,
                "nickels":1,
                "pennies":1
            });
        });
    });


    describe('of 1 dollar 1 cents', () => {
        let dollars = 1.01;
        it('it should return 4 quarters 1 penny', () => {
            makeChange(dollars).should.deep.equal({
                "quarter":4,
                "pennies":1
            });
        });
    });

});

