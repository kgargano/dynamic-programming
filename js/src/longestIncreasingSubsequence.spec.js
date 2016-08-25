import longestIncreasingSubsequence from './longestIncreasingSubsequence'

describe('when running a sequence of one element', () => {
    let sequence = [1];
    it('it should return that element as longest increasing subsequence', () => {
        longestIncreasingSubsequence(sequence).should.deep.equal([1]);
    });
});

describe('when running a sequence [1, -1, 2, 3]', () => {
    let sequence = [1, -1, 2, 3];
    it('it should return [2, 3]', () => {
        longestIncreasingSubsequence(sequence).should.deep.equal([2, 3]);
    });
});

describe('when running a sequence [1, 2, 3]', () => {
    let sequence = [1, 2, 3];
    it('it should return [1, 2, 3]', () => {
        longestIncreasingSubsequence(sequence).should.deep.equal([1, 2, 3]);
    });
});

describe('when running a sequence [1, 2, 3, -3, 3, 2, 1, 2, 3]', () => {
    let sequence = [1, 2, 3, -3, 3, 2, 1, 2, 3];
    it('it should return [1, 2, 3]', () => {
        longestIncreasingSubsequence(sequence).should.deep.equal([1, 2, 3]);
    });
});

describe('when running a sequence [1, 2, 3, -3, 3, 2, 1, 2, 3, 4]', () => {
    let sequence = [1, 2, 3, -3, 3, 2, 1, 2, 3, 4];
    it('it should return [1, 2, 3, 4]', () => {
        longestIncreasingSubsequence(sequence).should.deep.equal([1, 2, 3, 4]);
    });
});

describe('when running a sequence [-1, -2, -1, 0, 1]', () => {
    let sequence = [-1, -2, -1, 0, 1];
    it('it should return [-2, -1, 0, 1]', () => {
        longestIncreasingSubsequence(sequence).should.deep.equal([-2, -1, 0, 1]);
    });
});
