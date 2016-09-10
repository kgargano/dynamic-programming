//referenced this: https://github.com/mission-peace/interview/blob/master/src/com/interview/array/LongestIncreasingSubSequenceOlogNMethod.java
const findNextHighest = (sequence, tails, element)=>{
    let low = 0,
        high = tails.length;

    while(high >= low){
        let mid = Math.floor((high + low) / 2);
        if(element > sequence[tails[mid]] && element <= sequence[tails[mid+1]] ){
            return mid+1;
        } else if (element > sequence[tails[mid]]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return high;
};


const unfoldLongestSubsequence = (sequence, tails, trace)=>{
    let longestSequence = [];
    let nextElementIndex = tails[tails.length-1];
    while(nextElementIndex != null){
        longestSequence.push(sequence[nextElementIndex]);
        nextElementIndex = trace[nextElementIndex];
    }
    return longestSequence.reverse();
};

export default (sequence)=> {
    if(sequence.length == 0) return sequence;

    let trace = Array.from(Array(sequence.length), () => null);

    let tailIndices = sequence.reduce((tails, element, index)=>{
        if(tails.length == 0) { return [0]; }

        let low = sequence[tails[0]],
            high = sequence[tails[tails.length-1]];

        if (element > high) {
            trace[index] = tails[tails.length-1];
            tails.push(index);
        } else if (element < low) {
            tails[0] = index;
        } else {
            let indexToBump = findNextHighest(sequence, tails, element);
            tails[indexToBump] = index;
            trace[tails[indexToBump]] = tails[indexToBump-1];
        }
        return tails;
    }, []);

    return unfoldLongestSubsequence(sequence, tailIndices, trace);
};
