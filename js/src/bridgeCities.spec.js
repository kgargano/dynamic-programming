import bridgeCities from './bridgeCities'

describe('when there are no cities to bridge', ()=>{
    let bridgedCities = bridgeCities([]);
    it('it returns an empty result', ()=>{
        bridgedCities.should.deep.equal([]);
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
    //                [c, a, e, g, f, b, d]
    describe('such as [a, b, c, d, e, f, g] and [c, a, e, g, f, b, d] ', ()=>{
        let bridgedCities = bridgeCities(['abcdefg', 'caegfbd']);
        it('it should pair {a, 1}, {e, 2}, {f, 1} ', ()=> {
            bridgedCities.should.equal('aef');
        });
    });

    //                [c, d, e, g, f, b, a]
    describe('such as [a, b, c, d, e, f, g] and [c, a, e, g, f, b, d] ', ()=>{
        let bridgedCities = bridgeCities(['abcdefg', 'caegfbd']);
        it('it should pair {c, 2}, {d, 2}, {e, 2}, {g, 3} ', ()=> {
            bridgedCities.should.deep.equal('cdeg');
        });
    });
});
