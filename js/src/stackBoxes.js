

export default (boxes)=>{



    const boxesSortedByArea = boxes.map((box)=>[
            {l:box.a, w:box.b, h:box.c, base: box.a*box.b},
            {l:box.b, w:box.c, h:box.a, base: box.b*box.c},
            {l:box.c, w:box.a, h:box.b, base: box.c*box.a}
            ].reduce((orientation, orientations)=>{
                if(!orientations.find(o=> o.base == orientation.base)){
                    orientations.push(orientation)
                }
            }, []))
        .reduce((orientations, all)=>orientations.concat(all), [])
        .sort((box1, box2)=> box2 - box1);

    const boxesSortedByHeight = boxesSortedByArea.sort((b1, b2)=> b1.h - b2.h);


    let stacks = [];


    boxesSortedByArea.foreach((box)=>{

    });


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
