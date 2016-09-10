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

    let subsequenceTrace = Array.from(Array(sequence.length), () => null);


    let subsequenceTails = sequence.slice(1, sequence.length).reduce((subsequenceTails, element, index)=>{
        index++;
        let low = sequence[subsequenceTails[0]],
            high = sequence[subsequenceTails[subsequenceTails.length-1]];

        if(element > high){
            subsequenceTrace[index] = subsequenceTails[subsequenceTails.length-1];
            subsequenceTails.push(index);
        }
        else if (element < low){
            subsequenceTails[0] = index;
        }else{
            let indexToBump = findNextHighest(sequence, subsequenceTails, element);
            subsequenceTails[indexToBump] = index;
            subsequenceTrace[subsequenceTails[indexToBump]] = subsequenceTails[indexToBump-1];
        }
        return subsequenceTails;
    }, [0]);

    return unfoldLongestSubsequence(sequence, subsequenceTails, subsequenceTrace);
};
