


export default (boxes)=>{

    let sides = []
    for(let side in boxes[0]){
        sides.push(boxes[0][side]);
    }
    sides.sort();


    return [{
        height: sides.pop(),
        width: sides.pop(),
        depth: sides.pop()
    }];
}
