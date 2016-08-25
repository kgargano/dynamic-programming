export default (sequence)=> {

    let subsequences = [];

    sequence.forEach((element)=>{
        let matchingSubsequences = subsequences.filter((subsequence)=> { return subsequence[0] > element });

        if(matchingSubsequences.length > 0){
            matchingSubsequences.forEach((subsequence)=>{subsequence.unshift(element);})
        }else{
            subsequences.push([element]);
        }
    });

    let increasingSubsequences = subsequences.sort((subsequence)=>{return subsequence.length;});
    let longestIncreasingSubsequence = [];

    if(increasingSubsequences.length > 0 && increasingSubsequences[0].length > 1){
        longestIncreasingSubsequence = increasingSubsequences[0].reverse();
    }

    return longestIncreasingSubsequence;
};
