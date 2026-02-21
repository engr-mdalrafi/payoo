document.getElementById('add-money-btn').addEventListener('click', function(){
    // console.log('add money click');

    // 1-bank account get
    const bank = getValueFormInput('add-money-bank');
    // console.log(bank);
    if(bank == 'Select Bank'){
        alert('Please select a Bank')
        return;
    }
    
    // 2- get bank account numeber
    const accono = getValueFormInput('bank-account-number');
    // console.log(accono);
    if(accono.length != 11){{
        alert('Invalid Account Number');
        return;
    }}
    // 3- get amount 
    const addAmount = getValueFormInput('amount-to-add')

    const newBalance = getBalance() + Number(addAmount);
    
    // 5- pin 
    const addPin = getValueFormInput('input-add-money-pin');
    if(addPin === '1234'){
        alert('Add Money Successfull');
        setBalance(newBalance)
    }
    else{
        alert('Invalid Pin');
        return;
    }   
    
})