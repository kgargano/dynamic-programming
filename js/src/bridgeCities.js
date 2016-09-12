const findNextHighest = (bridges, tails, bridge)=>{
    let low = 0,
        high = tails.length;

    while(high >= low){
        let mid = Math.floor((high+low)/2);

        if(bridge.north > bridges[tails[mid]].north && bridge.north <= bridges[tails[mid+1]].north){
            return mid+1;
        }else if(bridge.north > bridges[tails[mid]]){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return high;
};

export default (cities)=>{
    if(cities.length == 0) { return '';}
    let n = cities[0].split(''),
        s = cities[1].split(''),
        nLocations = n.reduce((map, city, index)=>  { map[city] = index; return map; } , {}),
        bridges = s.map((city, index)=> ({ south: index, north: nLocations[city], city }));


    let sequenceTrace = Array.from(Array(bridges.length), (b)=>null);

    let tailIndices =  bridges.reduce((tailIndices, bridge, index)=>{
        if(tailIndices.length == 0) { return [0];}

        let low = bridges[tailIndices[0]].north,
            high = bridges[tailIndices[tailIndices.length-1]].north;

        if(bridge.north > high){
            sequenceTrace[index] = tailIndices[tailIndices.length-1];
            tailIndices.push(index);
        }else if(bridge.north < low){
            tailIndices[0] = index;
        }else{
            let nextHighestIndex = findNextHighest(bridges, tailIndices, bridge);

        }

        return tailIndices;
    }, []);


    console.log("START");
    console.log("tails", tailIndices);
    let result = [];
    let b = tailIndices[tailIndices.length-1];
    while(b != null){
        result.push(bridges[b].city);
        b = sequenceTrace[b];
    }
    console.log('result', result, result.join(''))

    return result.reverse().join('');
}
