

function CurrentAssetsClick() {
   const addCAButton = document.getElementById("currentassetsbutton");
   addCAButton.remove();
   
   const section = document.getElementById("currentassetsform");
   
   let firstDiv = document.createElement("div");
   let firstLabel = document.createElement("label");
   firstLabel.appendChild(document.createTextNode("Cash: "));
   firstLabel.setAttribute('for', 'cash-input');

   let firstInput = document.createElement("input");
   firstInput.setAttribute('id', 'cash-input');

   firstDiv.appendChild(firstLabel);
   firstDiv.appendChild(firstInput);

   section.appendChild(firstDiv);

   let secondDiv = document.createElement("div");
   let secondLabel = document.createElement("label");
   secondLabel.appendChild(document.createTextNode("Inventory: "));
   secondLabel.setAttribute('for', 'inventory-input');

   let secondInput = document.createElement("input");
   secondInput.setAttribute('id', 'inventory-input');

   secondDiv.appendChild(secondLabel);
   secondDiv.appendChild(secondInput);

   section.appendChild(secondDiv);

   let thirdDiv = document.createElement("div");

   let thirdLabel = document.createElement("label");
   thirdLabel.appendChild(document.createTextNode("Supplies: "));
   thirdLabel.setAttribute('for', 'supplies-input');

   let thirdInput = document.createElement("input");
   thirdInput.setAttribute('id', 'supplies-input');

   thirdDiv.appendChild(thirdLabel);
   thirdDiv.appendChild(thirdInput);

   section.appendChild(thirdDiv);

   let fourthDiv = document.createElement("div");

   let fourthLabel = document.createElement("label");
   fourthLabel.appendChild(document.createTextNode("Temporary Investments: "));
   fourthLabel.setAttribute('for', 'temporaryinvestments-input');
   fourthLabel.style.textAlign = "right";

   let fourthInput = document.createElement("input");
   fourthInput.setAttribute('id', 'temporaryinvestments-input');

   fourthDiv.appendChild(fourthLabel);
   fourthDiv.appendChild(fourthInput);

   section.appendChild(fourthDiv);
   
   let first = parseInt(document.getElementById("cash-input").value);
   let second = parseInt(document.getElementById("inventory-input").value);
   let third = parseInt(document.getElementById("supplies-input").value);
   let fourth = parseInt(document.getElementById("temporaryinvestments-input").value);
   let total = first + second + third + fourth;

   let fifthDiv = document.createElement("div");
   
   let fifthLabel = document.createElement("label");
   fifthLabel.appendChild(document.createTextNode("Total Current Assets: "+ total.toString()));
   fifthLabel.setAttribute('for', 'totalcurrentassets');


   fifthDiv.appendChild(fifthLabel);


   section.appendChild(fifthDiv);
   document.getElementById(section).style.textAlign = "right";


   
}

function CurrentLiabilitiesClick() {
   const CLButton = document.getElementById("currentliabilitiesbutton");
   CLButton.remove();

   const section = document.getElementById("currentliabilitiesform");

   let firstDiv = document.createElement("div");
   let firstLabel = document.createElement("label");
   firstLabel.appendChild(document.createTextNode("Accounts Payable: "));
   firstLabel.setAttribute('for', 'accountspayable-input');

   let firstInput = document.createElement("input");
   firstInput.setAttribute('id', 'accountspayable-input');

   firstDiv.appendChild(firstLabel);
   firstDiv.appendChild(firstInput);

   section.appendChild(firstDiv);

   let secondDiv = document.createElement("div");

   let secondLabel = document.createElement("label");
   secondLabel.appendChild(document.createTextNode("Notes Payable: "));
   secondLabel.setAttribute('for', 'notespayable-input');

   let secondInput = document.createElement("input");
   secondInput.setAttribute('id', 'notespayable-input');

   secondDiv.appendChild(secondLabel);
   secondDiv.appendChild(secondInput);

   section.appendChild(secondDiv);

   let thirdDiv = document.createElement("div");

   let thirdLabel = document.createElement("label");
   thirdLabel.appendChild(document.createTextNode("Interest Payable: "));
   thirdLabel.setAttribute('for', 'interestpayable-input');

   let thirdInput = document.createElement("input");
   thirdInput.setAttribute('id', 'interestpayable-input');

   thirdDiv.appendChild(thirdLabel);
   thirdDiv.appendChild(thirdInput);

   section.appendChild(thirdDiv);

   let fourthDiv = document.createElement("div");

   let fourthLabel = document.createElement("label");
   fourthLabel.appendChild(document.createTextNode("Wages Payable: "));
   fourthLabel.setAttribute('for', 'wagespayable-input');

   let fourthInput = document.createElement("input");
   fourthInput.setAttribute('id', 'wagespayable-input');

   fourthDiv.appendChild(fourthLabel);
   fourthDiv.appendChild(fourthInput);

   section.appendChild(fourthDiv);

   let fifthDiv = document.createElement("div");

   let fifthLabel = document.createElement("label");
   fifthLabel.appendChild(document.createTextNode("Accrued Expenses: "));
   fifthLabel.setAttribute('for', 'accruedexpenses-input');

   let fifthInput = document.createElement("input");
   fifthInput.setAttribute('id', 'accruedexpenses-input');

   fifthDiv.appendChild(fifthLabel);
   fifthDiv.appendChild(fifthInput);

   section.appendChild(fifthDiv);

   let first = parseInt(document.getElementById("accountspayable-input").value);
   let second = parseInt(document.getElementById("notespayable-input").value);
   let third = parseInt(document.getElementById("interestpayable-input").value);
   let fourth = parseInt(document.getElementById("wagespayable-input").value);
   let fifth = parseInt(document.getElementById("accruedexpenses-input").value);
   let total = first + second + third + fourth + fifth;

   let sixthDiv = document.createElement("div");
   
   let sixthLabel = document.createElement("label");
   sixthLabel.appendChild(document.createTextNode("Total Current Liabilities: "+ total.toString()));
   sixthLabel.setAttribute('for', 'totalliabilities');


   sixthDiv.appendChild(sixthLabel);


   section.appendChild(sixthDiv);
   document.getElementById(section).style.textAlign = "right";

   
}

function InvestmentPropertyClick() {
   const IPButton = document.getElementById("investmentpropertybutton");
   IPButton.remove();

   const section = document.getElementById("investmentpropertyform");

   let firstDiv = document.createElement("div");
   let firstLabel = document.createElement("label");
   firstLabel.appendChild(document.createTextNode("Land: "));
   firstLabel.setAttribute('for', 'land-input');

   let firstInput = document.createElement("input");
   firstInput.setAttribute('id', 'land-input');

   firstDiv.appendChild(firstLabel);
   firstDiv.appendChild(firstInput);

   section.appendChild(firstDiv);
   
   let secondDiv = document.createElement("div");

   let secondLabel = document.createElement("label");
   secondLabel.appendChild(document.createTextNode("Building and Improvements: "));
   secondLabel.setAttribute('for', 'buildingandimprovements-input');

   let secondInput = document.createElement("input");
   secondInput.setAttribute('id', 'buildingandimprovements-input');

   secondDiv.appendChild(secondLabel);
   secondDiv.appendChild(secondInput);

   section.appendChild(secondDiv);

   let thirdDiv = document.createElement("div");

   let thirdLabel = document.createElement("label");
   thirdLabel.appendChild(document.createTextNode("Equipment: "));
   thirdLabel.setAttribute('for', 'equipment-input');

   let thirdInput = document.createElement("input");
   thirdInput.setAttribute('id', 'equipment-input');

   thirdDiv.appendChild(thirdLabel);
   thirdDiv.appendChild(thirdInput);

   section.appendChild(thirdDiv);

   let fourthDiv = document.createElement("div");

   let fourthLabel = document.createElement("label");
   fourthLabel.appendChild(document.createTextNode("Temporary Investments: "));
   fourthLabel.setAttribute('for', 'temporaryinvestments-input');

   let fourthInput = document.createElement("input");
   fourthInput.setAttribute('id', 'temporaryinvestments-input');

   fourthDiv.appendChild(fourthLabel);
   fourthDiv.appendChild(fourthInput);

   section.appendChild(fourthDiv);

   let first = parseInt(document.getElementById("land-input").value);
   let second = parseInt(document.getElementById("buildingandimprovements-input").value);
   let third = parseInt(document.getElementById("equipment-input").value);
   let fourth = parseInt(document.getElementById("temporaryinvestments-input").value);
   let total = first + second + third + fourth;

   let fifthDiv = document.createElement("div");
   
   let fifthLabel = document.createElement("label");
   fifthLabel.appendChild(document.createTextNode("Total Investment Property and Equipment: "+ total.toString()));
   fifthLabel.setAttribute('for', 'totalinvestmentpropertyandequipment');


   fifthDiv.appendChild(fifthLabel);


   section.appendChild(fifthDiv);
   document.getElementById(section).style.textAlign = "right";
   
}

function LongTermLiabilityClick() {
   const LTLButton = document.getElementById("longtermliabilitiesbutton");
   LTLButton.remove();

   const section = document.getElementById("longtermliabilitiesform");

   let firstDiv = document.createElement("div");
   let firstLabel = document.createElement("label");
   firstLabel.appendChild(document.createTextNode("Notes Payable: "));
   firstLabel.setAttribute('for', 'notespayable-input');

   let firstInput = document.createElement("input");
   firstInput.setAttribute('id', 'notespayable-input');

   firstDiv.appendChild(firstLabel);
   firstDiv.appendChild(firstInput);

   section.appendChild(firstDiv);

   
   let secondDiv = document.createElement("div");
   
   let secondLabel = document.createElement("label");
   secondLabel.appendChild(document.createTextNode("Bonds Payable: "));
   secondLabel.setAttribute('for', 'bondspayable-input');

   let secondInput = document.createElement("input");
   secondInput.setAttribute('id', 'bondspayable-input');

   secondDiv.appendChild(secondLabel);
   secondDiv.appendChild(secondInput);

   section.appendChild(secondDiv);
   
   let first = parseInt(document.getElementById("notespayable-input").value);
   let second = parseInt(document.getElementById("bondspayable-input").value);

   var total = first + second;

   let fifthDiv = document.createElement("div");
   
   let fifthLabel = document.createElement("label");
   fifthLabel.appendChild(document.createTextNode("Total Long-Term Liabilities: "+ total.toString()));
   fifthLabel.setAttribute('for', 'totallongtermliabilities');


   fifthDiv.appendChild(fifthLabel);


   section.appendChild(fifthDiv);
   document.getElementById(section).style.textAlign = "right";
   

   
}

function IntangiblesClick() {
   const IButton = document.getElementById("intangiblesbutton");
   IButton.remove();

   const section = document.getElementById("intangiblesform");

   let firstDiv = document.createElement("div");
   
   let firstLabel = document.createElement("label");
   firstLabel.appendChild(document.createTextNode("Trade Names: "));
   firstLabel.setAttribute('for', 'tradenames-input');

   let firstInput = document.createElement("input");
   firstInput.setAttribute('id', 'tradenames-input');

   firstDiv.appendChild(firstLabel);
   firstDiv.appendChild(firstInput);

   section.appendChild(firstDiv);

   let secondDiv = document.createElement("div");
   
   let secondLabel = document.createElement("label");
   secondLabel.appendChild(document.createTextNode("Notes Payable: "));
   secondLabel.setAttribute('for', 'notespayable-input');

   let secondInput = document.createElement("input");
   secondInput.setAttribute('id', 'notespayable-input');

   secondDiv.appendChild(secondLabel);
   secondDiv.appendChild(secondInput);

   section.appendChild(secondDiv);
   
   let first = parseInt(document.getElementById("tradenames-input").value);
   let second = parseInt(document.getElementById("goodwill-input").value);

   let total = first + second;

   let fifthDiv = document.createElement("div");
   
   let fifthLabel = document.createElement("label");
   fifthLabel.appendChild(document.createTextNode("Total Intangibles: "+ total.toString()));
   fifthLabel.setAttribute('for', 'totalintangibles');


   fifthDiv.appendChild(fifthLabel);


   section.appendChild(fifthDiv);
   document.getElementById(section).style.textAlign = "right";
   
}

function CalculatePositionClick() {


   

   
}