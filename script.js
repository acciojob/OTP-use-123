//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = ''; // Clear the previous input
        }
      });
    });

    function submitOtp() {
      let otp = '';
      inputs.forEach(input => otp += input.value);

      if (otp.length === 6) {
        alert(`OTP Submitted: ${otp}`);
      } else {
        alert('Please enter all 6 digits of the OTP');
      }
    }