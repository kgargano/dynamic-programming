import longestIncreasingSubsequence from './longestIncreasingSubsequence'

describe('when running a sequence of one element', () => {
    let sequence = [1]
    it('it should return that element as longest increasing subsequence', () => {
        longestIncreasingSubsequence(sequence).should.deep.equal([1]);
    });
});
