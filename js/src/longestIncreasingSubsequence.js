export default (sequence)=> {

    let currentSubsequence = [],
        longestSubsequence = [];

    sequence.forEach((element)=>{
        if(currentSubsequence.length == 0){
            currentSubsequence.push(element);
        }

        if(longestSubsequence.length < currentSubsequence.length){
            longestSubsequence = currentSubsequence;
        }

        if(currentSubsequence[currentSubsequence.length-1] < element){
            currentSubsequence.push(element);
        }else{
            currentSubsequence = [element];
        }
    });

    return longestSubsequence;
};
