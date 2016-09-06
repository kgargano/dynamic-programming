export default (cities)=>{
    let n = cities[0].split(''),
        s = cities[1].split(''),
        sLocations = s.reduce((map, city, index)=> { map[city] = index; return map; } , {}),
        nLocations = n.reduce((map, city, index)=>  { map[city] = index; return map; } , {}),
        bridges = n.reduce((bridges, city, index)=> bridges.concat([{span: Math.abs(sLocations[city] - index), city:city}]), [])
            .sort((bridge1, bridge2)=> bridge1.span-bridge2.span);

    let max = 0,
        min = n.length;

    const comesBefore = (city1, city2)=> sLocations[city1] < sLocations[city2] && nLocations[city1] < nLocations[city2];
    const comesAfter = (city1, city2)=> sLocations[city1] > sLocations[city2] && nLocations[city1] > nLocations[city2];

    console.log("START")
    return bridges.reduce((bridgedCities, bridge)=>{
        console.log('bridge', bridge)

        if(bridgedCities.every((b=> comesBefore(b.city, bridge.city) || comesAfter(b.city, bridge.city) ))){
            console.log('added ', bridge)
            bridgedCities.push(bridge);
        }

        return bridgedCities;
    }, []).sort((b1, b2)=> b1.city > b2.city ? 1 : b2.city > b1.city ? -1 : 0).reduce((cities, next)=> cities+=next.city, '');
}
