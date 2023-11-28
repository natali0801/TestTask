Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
};

class PseudoRandomGenerator {
    constructor(pseudoRandomValues) {
      this.pseudoRandomValues = pseudoRandomValues;
      this.count = 0;
    }
  
    random(){
        var value = this.pseudoRandomValues[this.count]/100;
        this.count++;
        if(this.count>=this.pseudoRandomValues.length){
            this.count=0;
        }
        return value;
    }

    reset(){
        this.count=0;
    }
  }

function InitDomItems()
{
    var container = document.body;

    var inputLabel = document.createElement('pre');
    inputLabel.textContent = "Input:";
    inputLabel.style.color = "#FFFFFF";
    container.appendChild(inputLabel);

    var jsonIn = document.createElement('textarea');
    jsonIn.style.width="700px";
    jsonIn.style.height="300px";
    jsonIn.textContent=defaultJsonInValue;
    jsonIn.id = "jsonIn";
    container.appendChild(jsonIn);

    container.appendChild(document.createElement('br'));

    var generateBtn = document.createElement('button');
    generateBtn.textContent = "Generate";
    generateBtn.addEventListener('click', OnGenerateBtnClick);
    container.appendChild(generateBtn);

    var inputLabel = document.createElement('pre');
    inputLabel.textContent = "Output:";
    inputLabel.style.color = "#FFFFFF";
    container.appendChild(inputLabel);

    var jsonOut = document.createElement('textarea');
    jsonOut.style.width="700px";
    jsonOut.style.height="300px";
    jsonOut.textContent=defaultJsonOutValue;
    jsonOut.id = "jsonOut";
    container.appendChild(jsonOut);

    container.appendChild(document.createElement('br'));

    var unitTestsBtn = document.createElement('button');
    unitTestsBtn.textContent = "UnitTests";
    unitTestsBtn.addEventListener('click', OnUnitTestsBtnClick);
    container.appendChild(unitTestsBtn);
}

function OnUnitTestsBtnClick(){
    const pseudoRandomGenerator = new PseudoRandomGenerator(pseudoRandomValuesForUnitTests);
    var resultStr="UnitTests:\n";
    for(var i=0;i<unitTests.length;i++){
        pseudoRandomGenerator.reset();
        var test=unitTests[i];
        resultStr+="Test"+i+": ";
        function CheckResultSuccess(result){
            result = JSON.stringify(result);
            resultStr+=result==test.Result?"Success":"Fail";
            resultStr+="\n";
        }

        function CheckResultError(result){
            //console.log(result==test.Result?"Success":"Fail");
            resultStr+=result==test.Result?"Success":"Fail";
            resultStr+="\n";
        }
        Generate(pseudoRandomGenerator,test.Input,CheckResultSuccess,CheckResultError);
    }
    jsonOut.value = resultStr;
}

function OnGenerateBtnClick() {
    const pseudoRandomGenerator = new PseudoRandomGenerator(pseudoRandomValuesForUnitTests);
    var jsonIn = document.getElementById("jsonIn");
    var jsonOut = document.getElementById("jsonOut");
    //var item = JSON.parse(jsonIn.value);// not valid json
    //Generate(Math,jsonIn.value,OnGenerateSuccess,OnGenerateErrors);
    Generate(pseudoRandomGenerator,jsonIn.value,OnGenerateSuccess,OnGenerateErrors);
}

function OnGenerateSuccess(result){
    result = JSON.stringify(result, null, " ");
    //result = JSON.stringify(result); // use for test generation + escape
    jsonOut.value = result;
}

function OnGenerateErrors(error){
    jsonOut.value = "Error: "+error;
}

function Generate(randomGenerator,jsonString, successCallback, errorCallback){
    try{
        var jsonData = JSON.parse(jsonString);
        var keys = Object.keys(jsonData);
    
        var item = {};
        GenerateRecursively(randomGenerator,null,item,jsonData);
    
        successCallback(item);
    }catch (e) {
        errorCallback(e);
    }
}

function GenerateRecursively(randomGenerator,jsonName, jsonObject, jsonData, inclusionArr){
    if(!jsonData) return;
    
    if(jsonData["type"])
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
                        GenerateRecursively(randomGenerator,key,tempObject,jsonData["properties"],jsonData["required"]);
                    }
                });
                break;

            case "integer":
                jsonObject[jsonName] = GenerateRandomInteger(randomGenerator);
                break;

            case "number":
                var min = jsonData["exclusiveMinimum"]?jsonData["exclusiveMinimum"] + 1 : 0;
                var max = jsonData["exclusiveMaximum"]?jsonData["exclusiveMaximum"] - 1 : maxRandomNumberValue;
                jsonObject[jsonName] = GenerateRandomNumber(randomGenerator,min, max);
                break;

            case "string":
                jsonObject[jsonName] = GetRandomItem(randomGenerator,randomNames);
                break;

            case "array":
                var minItems = jsonData["minItems"] ?? 0;
                minItems.clamp(0, maxRandomNumberValue);
                var itemsCount = Math.max(minItems, randomGenerator.random() * maxRandomNumberValue);

                var isUniq = jsonData["uniqueItems"] ?? false;

                jsonObject[jsonName] = GenerateRandomArr(randomGenerator,randomNames, isUniq, itemsCount);
                break;
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
            if(!inclusionArr || inclusionArr.includes(key) || key == "tags" || key == "dimensions")
                GenerateRecursively(randomGenerator,key,jsonObject,jsonData[key]);
        });
    }
}

function GenerateRandomInteger(randomGenerator)
{
    return Math.round(randomGenerator.random() * maxRandomNumberValue);
}

function GenerateRandomNumber(randomGenerator,min, max)
{
    return Math.max(min, randomGenerator.random()*max).toFixed(2);
}

function GenerateRandomArr(randomGenerator,randomItems, isUniq, count)
{
    var arr = [];
    for(var i=0;i<count;i++){
        var item="";
        do
        {
            item=GetRandomItem(randomGenerator,randomItems);
        }
        while(arr.includes(item));
        
        arr.push(item);
    }
    return arr;
}

function GetRandomItem(randomGenerator, arr) {
    return arr[Math.round(randomGenerator.random() * randomNames.length)];
}

InitDomItems();