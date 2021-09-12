function Incentive(){

    const name = document.getElementById("NameField").value ;
    const age = document.getElementById("AgeField").value ;
    const monthly = document.getElementById("MonthlyField").value ;
    const yearly = document.getElementById("YearlyField").value ;
    let text;
    if (age >50 && yearly >20000){
        text = `20% incentive amount is applicable on yearly internet bill related expenditure.`;
        }
    else if (age >30 && monthly>=250){
        text = `15% incentive amount is applicable on yearly internet bill related expenditure.`; 
        }
    else {
            text = `No incentive.`; 
        }

        document.getElementById("incentive-info").innerHTML = text;

    document.getElementById("NameField").value = '' ;
    document.getElementById("AgeField").value = ''  ;
    document.getElementById("MonthlyField").value = '' ;document.getElementById("YearlyField").value = '' ;
}
