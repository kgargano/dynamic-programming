import stackBoxes from './stackBoxes'

describe('when stacking one box', () => {
    let boxes = [{a: 4, b: 3, c: 2}]
    let stackedBoxes = stackBoxes(boxes);
    it('it should return one box', () => {
        stackedBoxes.length.should.equal(1)
    });
    it('it should orient the box with height 4', () => {
        stackedBoxes[0].height.should.equal(4)
    });
});
