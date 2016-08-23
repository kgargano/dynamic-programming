const changeSystem =
{
    "pennies": 0.01,
    "nickels": 0.05,
    "dimes": 0.1,
    "quarters":0.25
};

export default (dollars)=> {
    let reduce = (dollarsLeft, memo)=>{
        //if i sort here and then choose the maximum value, it'll be an n^2 ish algorithm..
        //i could cache my last-chosen coin maybe...

        //pop a stack!
    };

    return reduce(dollars, {
        "pennies":0,
        "nickels":0,
        "dimes":0,
        "quarters":0
    });
};
