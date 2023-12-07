function Generate(randomGenerator,jsonString, successCallback, errorCallback){
    try{
        var jsonData = JSON.parse(jsonString);
        var keys = Object.keys(jsonData);

        var item = {};
        var mainJsonData=jsonData
        GenerateRecursively(randomGenerator,null,item,mainJsonData,jsonData);
    
        successCallback(item);
    }catch (e) {
        errorCallback(e);
    }
}

function GenerateRecursively(randomGenerator, jsonName, jsonObject, mainJsonData, jsonData, inclusionArr){
    //console.log("GenerateRecursively="+jsonName)
    if(!jsonData) return;
    
    if(jsonData["anyOf"])
    {
        var randomItemAnyOf = GetRandomItem(randomGenerator,jsonData["anyOf"]);
        return GenerateRecursively(randomGenerator, jsonName, jsonObject, mainJsonData, randomItemAnyOf, null);
    }
    else if(jsonData["enum"])
    {
        jsonObject[jsonName] = GetRandomItem(randomGenerator, jsonData["enum"]);
        return jsonObject[jsonName];
    }
    else if(jsonData["type"])
    {
        switch (jsonData["type"]){
            case "object":
                var tempObject=null;
                if(jsonName)
                    tempObject = jsonObject[jsonName] = {};
                else
                    tempObject = jsonObject;

                var keys = Object.keys(jsonData);
                keys.forEach(key => {
                    var value=jsonData[key];
                    if (typeof value === 'object'
                       && !Array.isArray(value)
                       && value !== null)
                    {
                        return GenerateRecursively(randomGenerator,key,tempObject,mainJsonData,jsonData["properties"],jsonData["required"]);
                    }
                });
                break;

            case "integer":
                var min = jsonData["minimum"]?jsonData["minimum"] : 0;
                var max = jsonData["maximum"]?jsonData["maximum"] : maxRandomNumberValue;
                jsonObject[jsonName] = GenerateRandomInteger(randomGenerator,min,max);
                return jsonObject[jsonName];
            case "number":
                jsonObject[jsonName] = GenerateRandomNumber(randomGenerator,min, max);
                return jsonObject[jsonName];
            case "string":
                // create own library for generation string from regexp will take a lot of time
                // one of test task restrictions was "don't use external libraries"
                // Sorry, but I'm not sure that I can spend a lot of time for this point
                // It looks like monkey work - write pretty hard method or even lirary,instead of using already working external library)
                jsonObject[jsonName] = GetRandomItem(randomGenerator,randomNames);
                return jsonObject[jsonName];
            case "boolean":
                jsonObject[jsonName] = Math.round(randomGenerator.random());
                return jsonObject[jsonName];
            case "array":
                var item = FindRefRecursively(mainJsonData,jsonData["items"]["$ref"])
                var itemsCount = randomGenerator.random()*100;
                var arr = [];
                for(var i=0;i<itemsCount;i++){
                    var arrItem={};
                    GenerateRecursively(randomGenerator,null,arrItem,mainJsonData,item)
                    arr.push(arrItem);
                }
                jsonObject[jsonName]=arr;
                return jsonObject[jsonName];
                /*var minItems = jsonData["minItems"] ?? 0;
                minItems.clamp(0, maxRandomNumberValue);
                var itemsCount = Math.max(minItems, randomGenerator.random() * maxRandomNumberValue);

                var isUniq = jsonData["uniqueItems"] ?? false;

                jsonObject[jsonName] = GenerateRandomArr(randomGenerator,randomNames, isUniq, itemsCount);*/
            default:
                break
        }
    }
    else
    {
        var keys = Object.keys(jsonData);

        if(inclusionArr)
        for(var i=0;i<inclusionArr.length;i++){
            if(!keys.includes(inclusionArr[i])){
                throw new Error(inclusionArr[i]+" required");
            }
        }
        
        keys.forEach(key => {
            if(inclusionArr && inclusionArr.includes(key))
                return GenerateRecursively(randomGenerator,key,jsonObject,mainJsonData,jsonData[key]);
        });
    }
}