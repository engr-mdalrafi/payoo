document.getElementById('cashout-btn').addEventListener('click', function(){
    // 1- get the agent number
    const agentMobileNumber = document.getElementById('agent-mobile-number');
    const agentNumber = agentMobileNumber.value;
    if(agentNumber.length !=11){
        alert("Invalid Agent Number")
        return;
    }
    // console.log(agentNumber);
    
    // 2- get the amount
    const agentCashoutAmount = document.getElementById('agent-cashout-amount');
    const cashoutAmount = agentCashoutAmount.value;
    // console.log(cashoutAmount);
    
    // 3- get the current Balance
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    // console.log(balance);    

    // 4- calculate new Balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }
    // console.log('new Balance', newBalance);
    
    // 5- get the pin and verify
    const cashoutInputPin = document.getElementById('input-cashout-pin');
    const cashoutPin = cashoutInputPin.value;
    if(cashoutPin === '1234'){
        alert('Cash Out Successfully')
        balanceElement.innerText = newBalance
    }
    else{
        alert('Invalid Pin')
    }
    console.log(cashoutPin);
    
    // 5-1 true:: show an alert > set Balance
    // 5-2 false:: show an error alert > retrrn
})