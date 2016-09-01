

export default (boxes)=>{
    const orient = (side, box, sideIndex)=>{
        return {l:side, w:box[(sideIndex+1)%3], h:box[(sideIndex+2)%3], base:side * box[(sideIndex+1)%3]};
    };

    const boxesSortedByArea = boxes.map((box)=>
            box.reduce((orientations, side, i)=>orientations.concat([orient(side, box, i)]), [])
                .reduce((orientations, orientation)=>{
                if(!orientations.find(o=> o.base == orientation.base)){
                    orientations.push(orientation)
                }
                return orientations;
            }, []))
        .reduce((all, orientations)=>orientations.concat(all), [])
        .sort((box1, box2)=> box2 - box1);

    return boxesSortedByArea.reduce((stacks, box, ind)=>{
        let stack = { boxes:[box], height:box.h };
        let lastBox = box;
        boxesSortedByArea.slice(ind+1, boxesSortedByArea.length).forEach((nextBox)=>{
            if (nextBox.l < lastBox.l && nextBox.w < lastBox.w){
                stack.boxes.push(nextBox);
                lastBox = nextBox;
                stack.height += lastBox.h;
            }
        });
        stacks.push(stack);
        return stacks;
    }, []).sort((stack1,stack2)=> stack2.height - stack1.height)[0];
}
