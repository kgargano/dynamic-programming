const changeSystem =
{
    "pennies": 0.01,
    "nickels": 0.05,
    "dimes": 0.1,
    "quarters":0.25
};

export default (dollars)=> {
    let dollarsLeft = Math.round(dollars * 100);
    let changeStack = [];
    let changeMade = {};

    for(let coin in changeSystem){
        changeStack.push({name:coin, value: Math.round(changeSystem[coin] * 100)});
    }

    changeStack = changeStack.sort((coin)=> coin.value);

    let coin = changeStack.shift();
    while(dollarsLeft > 0){
        if(dollarsLeft >= coin.value){
            if(!changeMade.hasOwnProperty(coin.name)){ changeMade[coin.name] = 0;}
            changeMade[coin.name]++;
            dollarsLeft -= coin.value;
        } else{
            coin = changeStack.shift();
        }
    }

    return changeMade;
};
