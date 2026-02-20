document.getElementById('login-btn')
    .addEventListener('click', function () {
        // console.log('btn click');

        // 1- get the mobile number input
        const inputMobileNumber = document
            .getElementById('input-mobile-number');
        const mobileNumber = inputMobileNumber.value;
        // console.log(mobileNumber);

        // 2- get the pin number input
        const inputLoginPin = document.getElementById('input-login-pin');
        const loginPin = inputLoginPin.value;
        // console.log(loginPin);
        
        // 3- match the pin & mobile number
        if((mobileNumber =='01835432498' || mobileNumber == '01607382047') && loginPin == '1234'){
            // 3-1 true::>> alert > homepage
            alert('Login Success');
            window.location.assign('/home.html')
        }else{
            // 3-2 false::>> alert > return
            alert('Login fail');
            return;
        }

    })