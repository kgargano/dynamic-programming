import stackBoxes from './stackBoxes'

describe('when stacking one cube box', () => {
    let stack = stackBoxes([[1, 1, 1]]);
    it('it should return one box', () => {
        stack.boxes.length.should.equal(1);
    });
    it('it should return a stack the height of a side', () => {
        stack.height.should.equal(1)
    });
});


describe('when stacking cube boxes of different sizes ', () => {
    let stack = stackBoxes([[1, 1, 1], [2, 2, 2]]);

    it('it should stack the smallest on the top', ()=>{
        stack.boxes[1].l.should.equal(1);
    });
    it('it should have a stack height of 3', ()=>{
        stack.height.should.equal(3);
    });
});

describe('when stacking mixed dimension boxes', ()=>{
    describe('for example [1, 2, 3], [3, 3, 4]', ()=>{

        let stack = stackBoxes([[1, 2, 3], [3, 3, 4]]);
        it('it should have a stack height of 7', ()=>{

        });
    })
});
