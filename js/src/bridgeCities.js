export default (cities)=>{
    let n = cities[0].split(''),
        s = cities[1].split(''),
        nLocations = n.reduce((map, city, index)=>  { map[city] = index; return map; } , {}),
        bridges = s.map((city, index)=> ({ south: index, north: nLocations[city], city }));

    console.log('start')
    console.log('nlocations', nLocations, 'n', n, 's', s, 'bridges', bridges)
    return bridges.reduce((bridgedCities, bridge)=>{

        let subsequences = bridgedCities.filter(b=> b[0].north < bridge.north);
        console.log('subsequences', subsequences);
        if(subsequences.length == 0){
            bridgedCities.unshift([bridge]);
            console.log('made a new one with ', bridge)
        }else{
            subsequences.forEach(b=> b.unshift(bridge));
            console.log('adding to each found')
        }

        console.log('bridgedCities', bridgedCities)
        return bridgedCities;
    }, []).sort((b1, b2)=> b2.length - b1.length).map(b=> b.reverse().map(c=>c.city).join(''))[0];
}
