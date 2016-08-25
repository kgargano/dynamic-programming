export default (sequence)=> {
    let sum = sequence[0];
    let max = sum;

    sequence.slice(1).forEach( (element) => {
        if( (sum + element) > sum && sum > 0){
            sum = sum + element;
        } else {
            sum = element;
        }

        if(sum > max)
            max = sum;
    });

    return max;
};
