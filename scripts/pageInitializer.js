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
    //jsonOut.textContent=defaultJsonOutValue;
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
    var resultStr="";
    for(var i=0;i<unitTests.length;i++){
        pseudoRandomGenerator.reset();
        var test=unitTests[i];
        resultStr += "\"Test "+i+"\": ";
        function CheckResultSuccess(resultData){
            resultData = JSON.stringify(resultData);
            resultStr += resultData == test.Result?"Success":"Fail";
        }

        function CheckResultError(resultData){
            resultStr += resultData == test.Result?"Success":"Fail";;
        }
        Generate(pseudoRandomGenerator,test.Input,CheckResultSuccess,CheckResultError);
        resultStr+="\n";
    }
    jsonOut.value = resultStr;
}

function OnGenerateBtnClick() {
    const pseudoRandomGenerator = new PseudoRandomGenerator(pseudoRandomValuesForUnitTests);
    var jsonIn = document.getElementById("jsonIn");
    Generate(Math,jsonIn.value,OnGenerateSuccess,OnGenerateErrors);
}

function OnGenerateSuccess(result){
    result = JSON.stringify(result, null, " ");
    //result = JSON.stringify(result); // use for test generation + escape
    jsonOut.value = result;
}

function OnGenerateErrors(error){
    jsonOut.value = "Error: "+error;
}

InitDomItems();