import bridgeCities from './bridgeCities'

describe('city bridging', ()=>{
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


        describe('abc, bca', ()=>{
            let bridgedCities = bridgeCities(['abc', 'bca']);
            it('it should match bc', ()=> {
                bridgedCities.should.equal('bc');
            });
        });

        describe('when all the cities uniquely connect, it matches the last one \n abc \n cba', ()=>{
            let bridgedCities = bridgeCities(['abc', 'cba']);
            it('it should match for every city pair', ()=> {
                bridgedCities.should.equal('b');
            });
        });

        //                abcdefg
        //                caegfbd
        describe('such as \nabcdefg and \ncaegfbd ', ()=>{
            let bridgedCities = bridgeCities(['abcdefg', 'caegfbd']);
            it('it should suggest cef', ()=> {
                bridgedCities.should.equal('cef');
            });
        });

        //                caegfbd
        //                abcdefg
        describe('such as \ncaegfbd and \nabcdefg ', ()=>{
            let bridgedCities = bridgeCities(['caegfbd', 'abcdefg']);
            it('it should pair aef', ()=> {
                bridgedCities.should.equal('aef');
            });
        });

        describe('such as acdefbg and cdegfba ', ()=>{
            let bridgedCities = bridgeCities(['acdefbg', 'cdegfba']);
            it('it should pair cdefb', ()=> {
                bridgedCities.should.equal('cdefb');
            });
        });


        //                [b, a, c, g, f, e, d]
        //                [c, a, e, g, f, b, d]
        describe('such as bacgfed and caegfbd', ()=>{
            let bridgedCities = bridgeCities(['bacgfed', 'caegfbd']);
            it('it should suggest agfd', ()=> {
                bridgedCities.should.equal('agfd');
            });
        });
    });
});

