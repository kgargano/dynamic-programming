import largestSumContiguousSequence from './largestSumContiguousSequence'

describe('when running a sequence of one element', () => {
    let sequence = [1]
    it('it should return that element as the max', () => {
        largestSumContiguousSequence(sequence).should.equal(1);
    });
});
