import longestIncreasingSubsequence from './longestIncreasingSubsequence'

describe('longest increasing subsequence', ()=>{
    describe('when running a sequence of one element', () => {
        let sequence = [1];
        it('it should return a subsequence of that element', () => {
            longestIncreasingSubsequence(sequence).should.deep.equal([1]);
        });
    });

    describe('when running a sequence [-1, -2, -3]', () => {
        let sequence = [-1, -2, -3];
        it('it should return [-3]', () => {
            longestIncreasingSubsequence(sequence).should.deep.equal([-3]);
        });
    });

    describe('when running a sequence [1, -1, 2, 3]', () => {
        let sequence = [1, -1, 2, 3];
        it('it should return [-1, 2, 3]', () => {
            longestIncreasingSubsequence(sequence).should.deep.equal([-1, 2, 3]);
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
        it('it should return [-3, 1, 2, 3]', () => {
            longestIncreasingSubsequence(sequence).should.deep.equal([-3, 1, 2, 3]);
        });
    });

    describe('when running a sequence [10, 20, 30, -30, 30, 20, 10, 20, 30, 40]', () => {
        let sequence = [10, 20, 30, -30, 30, 20, 10, 20, 30, 40];
        it('it should return [-30, 10, 20, 30, 40]', () => {
            longestIncreasingSubsequence(sequence).should.deep.equal([-30, 10, 20, 30, 40]);
        });
    });

    describe('when running a sequence [-1, -2, -1, 0, 1]', () => {
        let sequence = [-1, -2, -1, 0, 1];
        it('it should return [-2, -1, 0, 1]', () => {
            longestIncreasingSubsequence(sequence).should.deep.equal([-2, -1, 0, 1]);
        });
    });

    describe('when running a sequence with a non-contiguous inreasing subsequence [-1, 1, -2, 2, -3, 3, -4, 4]', () => {
        let sequence = [-1, 1, -2, 2, -3, 3, -4, 4];
        it('it should return [-1, 1, 2, 3, 4]', () => {
            longestIncreasingSubsequence(sequence).should.deep.equal([-1, 1, 2, 3, 4]);
        });
    });

    describe('when running a sequence with a non-contiguous inreasing subsequence [1, 2, 5, 3, 4]', () => {
        let sequence = [1, 2, 5, 3, 4];
        it('it should return [1, 2, 3, 4]', () => {
            longestIncreasingSubsequence(sequence).should.deep.equal([1, 2, 3, 4]);
        });
    });
});
