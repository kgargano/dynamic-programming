

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
        .sort((box1, box2)=> box2.base - box1.base);

    const boxesSortedByHeight = boxesSortedByArea.sort((box1, box2)=> box2.h - box1.h)

    return boxesSortedByArea.reduce((stacks, box, ind)=>{
        const canFit = (x, y)=> (x.l < y.l && x.w < y.w) || (x.l < y.w && x.w < y.l);
        let stack = { boxes:[box], height:box.h };
        let lastBox = box;
        boxesSortedByHeight.slice(0, ind).concat(boxesSortedByHeight.slice(ind+1, boxesSortedByArea.length)).forEach((nextBox)=>{
            if (canFit(nextBox, lastBox)){
                stack.boxes.push(nextBox);
                lastBox = nextBox;
                stack.height += lastBox.h;
            }
        });
        stacks.push(stack);
        return stacks;
    }, []).sort((stack1,stack2)=> stack2.height - stack1.height)[0];
}
