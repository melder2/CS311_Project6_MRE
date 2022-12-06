document.getElementById("currentassetsform").style.display = "flex";

    const data = document.getElementById("currentassetsform");
   
    let box = document.createElement("div");
    box.classList.add("form");
    box.setAttribute('id', 'currentassets');
    let ca = document.createElement("p");
    text = document.createTextNode(data.value);
    ca.appendChild(box);
    box.appendChild(text);

function CurrentAssetsClick() {
   const addCurrentAssets = document.getElementById("currentassetsbutton");
   addCurrentAssets.remove();
   

    //div.innerHTML = GetDynamicTextBox("");
    let s = document.getElementById("currentassetsform");
    var cash = document.createElement("input");
    cash.type = "text";
    s.appendChild(div);
    data.appendChild(div);
   




   
}

function CurrentLiabilitiesClick() {
   const addCurrentLiabilities = document.getElementById("currentliabilitiesbutton");
   addCurrentLiabilities.remove();

   

   
}

function InvestmentPropertyClick() {
   const addInvestmentProperty = document.getElementById("investmentpropertyandequipbutton");
   addInvestmentProperty.remove();

   

   
}

function LongTermLiabilityClick() {
   const addLongTermLiabilities = document.getElementById("AddLong-TermLiabilities");
   addLongTermLiabilities.remove();

   

   
}

function IntangiblesClick() {
   const addIntangibles = document.getElementById("AddIntangibles");
   addIntangibles.remove();

   

   
}

function CalculatePositionClick() {
   const addCalculatePosition = document.getElementById("calculateposition");
   addCalculatePosition.remove();

   

   
}