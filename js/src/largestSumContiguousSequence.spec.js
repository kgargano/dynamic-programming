import largestSumContiguousSequence from './largestSumContiguousSequence'

describe('when running a sequence of one element', () => {
    let sequence = [1]
    it('it should return that element as the max', () => {
        largestSumContiguousSequence(sequence).should.equal(1);
    });
});


describe('when running a sequence [-1, -10, 10, 2]', () => {
    let sequence = [-1, -10, 10, 2]
    it('it should return 12 as the max', () => {
        largestSumContiguousSequence(sequence).should.equal(12);
    });
});


describe('when running a sequence [-1, -10, 10, 2, -13, 14]', () => {
    let sequence = [-1, -10, 10, 2, -13, 14]
    it('it should return 14 as the max', () => {
        largestSumContiguousSequence(sequence).should.equal(14);
    });
});


describe('when running a sequence [-1, -10, 10, 2, -13, 14, 1]', () => {
    let sequence = [-1, -10, 10, 2, -13, 14, 1]
    it('it should return 15 as the max', () => {
        largestSumContiguousSequence(sequence).should.equal(15);
    });
});



