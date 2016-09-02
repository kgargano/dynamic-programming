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
            stack.height.should.equal(7);
        });
    });

    describe('for example [3, 1, 1], [4, 2, 5], [3, 8, 2]', ()=>{
        let stack = stackBoxes([[3, 1, 1], [4, 2, 5], [3, 8, 2]]);
        it('it should have a stack height of 13', ()=>{
            stack.height.should.equal(13);
        })
    });

    describe('for example [3, 1, 1], [4, 4, 5], [3, 8, 2]', ()=>{
        let stack = stackBoxes([[3, 1, 1], [4, 4, 5], [3, 8, 2]]);
        it('it should have a stack height of 16', ()=>{
            stack.height.should.equal(16);
        })
    });

    describe('for example  [4, 6, 7], [1, 2, 3], [4, 5, 6], [10, 12, 32]', ()=>{
        let stack = stackBoxes([[4, 6, 7], [1, 2, 3], [4, 5, 6], [10, 12, 32]]);
        it('it should have a stack height of 60', ()=>{
            stack.height.should.equal(60);
        })
    });
});
