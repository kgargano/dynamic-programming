import bridgeCities from './bridgeCities'

describe('when there are no cities to bridge', ()=>{
    let bridgedCities = bridgeCities([]);
    it('it returns an empty result', ()=>{
        bridgedCities.should.deep.equal([]);
    });
});


describe('when there is a single matching city on either side', ()=>{

    let bridgedCities = bridgeCities([['a'],['a']]);
    it('it returns a single connection between those cities', ()=>{
        bridgedCities.length.should.equal(1);
    });
    it('it returns a connection for that pair with length 0', ()=>{
        bridgedCities.should.deep.equal([{pair:'a', length:0}]);
    });
});

describe('when there is are disjoint cities on either side', ()=>{

    let bridgedCities = bridgeCities([['a'], ['b']]);
    it('it returns an empty result set', ()=>{
        bridgedCities.should.deep.equal([]);
    });
});

