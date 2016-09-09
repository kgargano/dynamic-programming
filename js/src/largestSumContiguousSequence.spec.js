import largestSumContiguousSequence from './largestSumContiguousSequence'

describe.only('largest sum contiguous sequence tests', ()=>{
    describe('when running a sequence of one element', () => {
        let sequence = [1],
            actual = largestSumContiguousSequence(sequence);
        it('it should return that element as the max', () => {
            actual.max.should.equal(1);
        });
    });

    describe('when running a sequence [1, 2]', () => {
        let sequence = [1, 2],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 3 as the max', () => {
            actual.max.should.equal(3);
        });
    });

    describe('when running a sequence [-1, -10, 10, 2]', () => {
        let sequence = [-1, -10, 10, 2],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 12 as the max', () => {
            actual.max.should.equal(12);
        });
    });

    describe('when running a sequence [-1, -10, 10, 2, -13, 14]', () => {
        let sequence = [-1, -10, 10, 2, -13, 14],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 14 as the max', () => {
            actual.max.should.equal(14);
        });
    });

    describe('when running a sequence [-1, -10, 10, 2, -13, 14, 1]', () => {
        let sequence = [-1, -10, 10, 2, -13, 14, 1],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 15 as the max', () => {
            actual.max.should.equal(15);
        });
    });

    describe('when running a sequence [-1, -10, -3, -5]', () => {
        let sequence = [-1, -10, -3, -5],
            actual = largestSumContiguousSequence(sequence);
        it('it should return -1 as the max', () => {
            actual.max.should.equal(-1);
        });
    });


    describe('when running a sequence [-3, -2, -1]', () => {
        let sequence = [-3, -2, -1],
            actual = largestSumContiguousSequence(sequence);
        it('it should return -1 as the max', () => {
            actual.max.should.equal(-1);
        });
    });

    describe('when running a sequence [-12, -10, -3, -5]', () => {
        let sequence = [-12, -10, -3, -5],
            actual = largestSumContiguousSequence(sequence);
        it('it should return -3 as the max', () => {
            actual.max.should.equal(-3);
        });
    });


    describe('when running a sequence [8, 4, -1, 2]', () => {
        let sequence = [8, 4, -1, 2],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 13 as the max', () => {
            actual.max.should.equal(13);
        });
    });
});


