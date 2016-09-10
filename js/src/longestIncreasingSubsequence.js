//referenced this: https://github.com/mission-peace/interview/blob/master/src/com/interview/array/LongestIncreasingSubSequenceOlogNMethod.java
const findNextHighest = (sequence, subsequenceTails, element)=>{
    let low = 0,
        high = subsequenceTails.length;

    while(high >= low){
        let mid = Math.floor((high + low) / 2);
        if(element > sequence[subsequenceTails[mid]] && element <= sequence[subsequenceTails[mid+1]] ){
            return mid+1;
        } else if (element > sequence[subsequenceTails[mid]]){
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


    let tailIndices = sequence.reduce((tailIndices, element, index)=>{
        if(tailIndices.length == 0) { return [0]; }

        let low = sequence[tailIndices[0]],
            high = sequence[tailIndices[tailIndices.length-1]];

        if(element > high){
            trace[index] = tailIndices[tailIndices.length-1];
            tailIndices.push(index);
        }
        else if (element < low){
            tailIndices[0] = index;
        }else{
            let indexToBump = findNextHighest(sequence, tailIndices, element);
            tailIndices[indexToBump] = index;
            trace[tailIndices[indexToBump]] = tailIndices[indexToBump-1];
        }
        return tailIndices;
    }, []);

    return unfoldLongestSubsequence(sequence, tailIndices, trace);
};
