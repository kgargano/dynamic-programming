import stackBoxes from './stackBoxes'

describe('when stacking one box', () => {
    let boxes = [{a: 4, b: 3, c: 2}]
    let stackedBoxes = stackBoxes(boxes);
    it('it should return one box', () => {
        stackedBoxes.l.should.equal(1)
    });
    it('it should orient the box with height 4', () => {
        stackedBoxes[0].h.should.equal(4)
    });
});


describe('when stacking a box x:{a:1, b:1, c:1} and y:{a:2, b:2, c:2}', () => {

    let boxes = [{a: 4, b: 3, c: 2}]
    let stackedBoxes = stackBoxes(boxes);

    it('should stack x on top of y', ()=>{

    });
});
