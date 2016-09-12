import bridgeCities from './bridgeCities'

describe.only('city bridging', ()=>{
    describe('when there are no cities to bridge', ()=>{
        let bridgedCities = bridgeCities([]);
        it('it returns an empty result', ()=>{
            bridgedCities.should.equal('');
        });
    });


    describe('when there is a single matching city on either side', ()=>{

        let bridgedCities = bridgeCities(['a', 'a']);
        it('it returns a single connection between those cities', ()=>{
            bridgedCities.length.should.equal(1);
        });
        it('it returns a connection for that pair with length 0', ()=>{
            bridgedCities.should.equal('a');
        });
    });

    describe('when there is are disjoint cities on either side', ()=>{

        let bridgedCities = bridgeCities(['a', 'b']);
        it('it returns an empty result set', ()=>{
            bridgedCities.should.equal('');
        });
    });


    describe('when there a large set of matching cities', ()=>{
        describe('and the cities never cross', ()=>{
            let bridgedCities = bridgeCities(['abc', 'abc']);
            it('it should match for every city pair', ()=> {
                bridgedCities.should.equal('abc');
            });
        });

        describe('only the center connects', ()=>{
            let bridgedCities = bridgeCities(['abc', 'cba']);
            it('it should match for every city pair', ()=> {
                bridgedCities.should.equal('b');
            });
        });

        //                [a, b, c, d, e, f, g]
        //                [c, a, e, g, f, b, d]
        describe('such as [a, b, c, d, e, f, g] and [c, a, e, g, f, b, d] ', ()=>{
            let bridgedCities = bridgeCities(['abcdefg', 'caegfbd']);
            it('it should pair aef, cef, ceg ', ()=> {
                bridgedCities.should.deep.equal(['aef', 'cef', 'ceg']);
            });
        });

        //                [a, c, d, e, f, b, g]
        //                [c, d, e, g, f, b, a]
        describe('such as [a, c, d, e, f, b, g] and [c, a, e, g, f, b, d] ', ()=>{
            let bridgedCities = bridgeCities(['abcdefg', 'caegfbd']);
            it('it should pair bcdef', ()=> {
                bridgedCities.should.equal('bcdef');
            });
        });


        //a, 0, 6
        //c, 6, 1
        //d, 6, 1
        //e, 6, 1
        //f, 7, 0
        //b, 7, 0
        //g, 5, 3
        //                [a, c, d, e, f, b, g]
        //                [c, d, e, g, f, b, a]
        //at f, nothing past f on the north or south bank can go west of f.. or east of f...
        //at b, nothing past b on the north or south bank can go west of b or east of b
        //at c, nothing before c on the north bank can go east of c... hm..
        describe('such as [a, c, d, e, f, b, g] and [c, a, e, g, f, b, d] ', ()=>{
            let bridgedCities = bridgeCities(['caegfbd', 'abcdefg']);
            it('it should pair bcdef', ()=> {
                bridgedCities.should.equal('bcdef');
            });
        });


        //                [b, a, c, g, f, e, d]
        //                [c, a, e, g, f, b, d]
        describe('such as [a, b, c, d, e, f, g] and [c, a, e, g, f, b, d] ', ()=>{
            let bridgedCities = bridgeCities(['bacgfed', 'caegfd']);
            it('it should suggest egfd and agfd', ()=> {
                bridgedCities.should.equal('agfd');
            });
        });
    });
});

