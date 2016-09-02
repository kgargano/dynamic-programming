import bridgeCities from './bridgeCities'

describe('when there are no cities to bridge', ()=>{
    let bridgedCities = bridgeCities([]);
    it('it returns an empty result', ()=>{
        bridgedCities.should.deep.equal([]);
    });
});
