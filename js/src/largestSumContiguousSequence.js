export default (sequence)=> {
    let sum = sequence[0];
    let max = sum;
    let maxSequence = [sequence[0]];

    sequence.slice(1).reduce( (subsequence, element) => {
        sum = Math.max(sum, 0);

        if( (sum + element) > 0){
            sum = sum + element;
            subsequence.push(element);
        } else if(sum + element <= 0){
            sum = element;
            subsequence = [element];
        }

        if(sum > max) {
            max = sum;
            maxSequence = subsequence;
        }
        return subsequence;
    }, [sequence[0]]);

    return max;
};
