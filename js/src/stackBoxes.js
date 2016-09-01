

export default (boxes)=>{



    const boxesSortedByArea = boxes.map((box)=>[
            {l:box.a, w:box.b, h:box.c, base: box.a*box.b},
            {l:box.b, w:box.c, h:box.a, base: box.b*box.c},
            {l:box.c, w:box.a, h:box.b, base: box.c*box.a}
            ].reduce((orientations, orientation)=>{
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
