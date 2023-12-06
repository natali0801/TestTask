function GenerateRandomInteger(randomGenerator,min, max)
{
    return Math.max(min, randomGenerator.random()*max).toFixed(0);
}

function GenerateRandomArr(randomGenerator,randomItems, isUniq, count)
{
    var arr = [];
    for(var i=0;i<count;i++){
        var maxTries=10;
        var tries=0;
        var item="";
        do
        {
            item=GetRandomItem(randomGenerator,randomItems);
            tries++;
        }
        while(arr.includes(item) && tries<maxTries);
        
        arr.push(item);
    }
    return arr;
}

function GetRandomItem(randomGenerator, arr) {
    var randomValue = randomGenerator.random();
    var index=Math.round(randomValue * (arr.length - 1));
    return arr[index];
}