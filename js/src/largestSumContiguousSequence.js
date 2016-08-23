export default (sequence)=> {
    let subsequence = {
        sum: sequence[0]
    };
    let max = subsequence.sum;

    sequence.slice(1).forEach( (element) => {
        if( (subsequence.sum + element) > subsequence.sum && subsequence.sum > 0){
            subsequence.sum = subsequence.sum + element;
        } else {
            subsequence.sum = element;
        }

        if(subsequence.sum > max)
            max = subsequence.sum;
    });

    return max;
};
