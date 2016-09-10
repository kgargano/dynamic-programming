import largestSumContiguousSequence from './largestSumContiguousSequence'

describe.only('largest sum contiguous sequence tests', ()=>{
    describe('when running a sequence of one element', () => {
        let sequence = [1],
            actual = largestSumContiguousSequence(sequence);
        it('it should return that element as the max', () => {
            actual.max.should.equal(1);
        });
        it('it should return a subsequence [1]', ()=>{
            actual.maxSequence.should.deep.equal([1]);
        });
    });

    describe('when running a sequence [1, 2]', () => {
        let sequence = [1, 2],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 3 as the max', () => {
            actual.max.should.equal(3);
        });
        it('it should return a subsequence [1,2]', ()=>{
            actual.maxSequence.should.deep.equal([1,2]);
        });
    });

    describe('when running a sequence [-1, -10, 10, 2]', () => {
        let sequence = [-1, -10, 10, 2],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 12 as the max', () => {
            actual.max.should.equal(12);
        });
        it('it should return a subsequence [10,2]', ()=>{
            actual.maxSequence.should.deep.equal([10,2]);
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
        it('it should return a subsequence [14, 1]', ()=>{
            actual.maxSequence.should.deep.equal([14, 1]);
        });
    });

    describe('when running a sequence [-1, -10, -3, -5]', () => {
        let sequence = [-1, -10, -3, -5],
            actual = largestSumContiguousSequence(sequence);
        it('it should return -1 as the max', () => {
            actual.max.should.equal(-1);
        });
        it('it should return a subsequence [-1]', ()=>{
            actual.maxSequence.should.deep.equal([-1]);
        });
    });


    describe('when running a sequence [-3, -2, -1]', () => {
        let sequence = [-3, -2, -1],
            actual = largestSumContiguousSequence(sequence);
        it('it should return -1 as the max', () => {
            actual.max.should.equal(-1);
        });
        it('it should return a subsequence [-1]', ()=>{
            actual.maxSequence.should.deep.equal([-1]);
        });
    });

    describe('when running a sequence [-12, -10, -3, -5]', () => {
        let sequence = [-12, -10, -3, -5],
            actual = largestSumContiguousSequence(sequence);
        it('it should return -3 as the max', () => {
            actual.max.should.equal(-3);
        });
        it('it should return a subsequence [-3]', ()=>{
            actual.maxSequence.should.deep.equal([-3]);
        });
    });


    describe('when running a sequence [8, 4, -1, 2]', () => {
        let sequence = [8, 4, -1, 2],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 13 as the max', () => {
            actual.max.should.equal(13);
        });
        it('it should return a subsequence [8, 4, -1, 2]', ()=>{
            actual.maxSequence.should.deep.equal([8, 4, -1, 2]);
        });
    });

    describe('when running a sequence [8, 4, -3, 2]', () => {
        let sequence = [8, 4, -3, 2],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 12 as the max', () => {
            actual.max.should.equal(12);
        });
        it('it should return a subsequence [8, 4]', ()=>{
            actual.maxSequence.should.deep.equal([8, 4]);
        });
    });

    describe('when running a sequence [8, 4, -13, 13]', () => {
        let sequence = [8, 4, -13, 13],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 13 as the max', () => {
            actual.max.should.equal(13);
        });
        it('it should return a subsequence [13]', ()=>{
            actual.maxSequence.should.deep.equal([13]);
        });
    });

    describe('when running a sequence [8, 4, -2, 2]', () => {
        let sequence = [8, 4, -2, 2],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 12 as the max', () => {
            actual.max.should.equal(12);
        });
        it('it should return a subsequence [8, 4]', ()=>{
            actual.maxSequence.should.deep.equal([8, 4]);
        });
    });

    describe('when running a sequence [8, 4, -2, 3]', () => {
        let sequence = [8, 4, -2, 3],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 13 as the max', () => {
            actual.max.should.equal(13);
        });
        it('it should return a subsequence [8, 4, -2, 3]', ()=>{
            actual.maxSequence.should.deep.equal([8, 4, -2, 3]);
        });
    });

    describe('when running a sequence [20, 40, -5, 10]', () => {
        let sequence = [20, 40, -5, 10],
            actual = largestSumContiguousSequence(sequence);
        it('it should return 65 as the max', () => {
            actual.max.should.equal(65);
        });
        it('it should return a subsequence [20, 40, -5, 10]', ()=>{
            actual.maxSequence.should.deep.equal([20, 40, -5, 10]);
        });
    });
});


