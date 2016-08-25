export default (sequence)=> {

    let subsequences = [];

    sequence.forEach((element)=>{
        let matchingSubsequences = subsequences.filter((subsequence)=> element > subsequence[0]);

        if(matchingSubsequences.length > 0){
            matchingSubsequences.forEach((subsequence)=>subsequence.unshift(element))
        }else{
            subsequences.push([element]);
        }
    });

    subsequences = subsequences.map((ss)=> ss.reverse()).sort((ss1, ss2)=> ss2.length - ss1.length);

    let longestIncreasingSubsequence = [];

    if(subsequences.length > 0 && subsequences[0].length > 1){
        longestIncreasingSubsequence = subsequences[0];
    }

    return longestIncreasingSubsequence;
};
