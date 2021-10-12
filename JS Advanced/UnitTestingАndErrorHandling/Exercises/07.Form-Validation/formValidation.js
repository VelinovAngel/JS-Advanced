    function validate() {
        const userNameReg = /(^[a-zA-z0-9]{3,20}$)/;
        const passReg = /(^[\w]{5,15}$)/;
        const emailReg = /^[\w]+@[\w]+\.[\w]+$/;

        let isValideInput = true;
        let isChecked = false;

        const submitBtn = document.getElementById('submit');
        submitBtn.addEventListener('click', onClick);

        function onClick(ev) {
            ev.preventDefault();
            const userName = document.getElementById('username');
            if (!userNameReg.test(userName.value)) {
                isValideInput = false;
                userName.style.borderColor = 'red';
            } else {
                userName.style.borderColor = 'none';
            }

            const password = document.getElementById('password');
            const confirmPass = document.getElementById('confirm-password');
            if (!passReg.test(password.value)) {
                isValideInput = false;
                password.style.borderColor = 'red';
                confirmPass.style.borderColor = 'red';
            }
            else {
                password.style.borderColor = 'none';
                confirmPass.style.borderColor = 'none';
            }

            if (password.value != confirmPass.value) {
                isValideInput = false;
                confirmPass.style.borderColor = 'red';
            }
            else {
                confirmPass.style.borderColor = 'none';
            }

            const email = document.getElementById('email');

            if (!emailReg.test(email.value)) {
                isValideInput = false;
                email.style.borderColor = 'red';
            }
            else {
                email.style.borderColor = 'none';
            }

            const validDiv = document.getElementById('valid');
            if (isValideInput) {
                validDiv.style.display = 'block';
            } else {
                validDiv.style.display = 'none';
            }

            if (isChecked) {
                const companyNumber = document.getElementById('companyNumber');
                if (Number(companyNumber.value) < 1000 
                || Number(companyNumber.value) > 9999) {
                    companyNumber.style.borderColor = 'red';
                }
                else {
                    companyNumber.style.borderColor = 'none';
                }
            }
        }

        document.getElementById('company').addEventListener('change', onChange);
        function onChange(ev) {
            const company = document.getElementById('companyInfo');
            if (ev.target.checked) {
                isChecked = true;
                company.style.display = 'block';
            } else {
                isChecked = false;
                company.style.display = 'none';
            }
        }
    }
