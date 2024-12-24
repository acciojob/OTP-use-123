//your JS code here. If required.
// Get all input fields
const inputs = document.querySelectorAll('.code');

// Add event listeners to each input field
inputs.forEach((input, index) => {
    // Handle input events
    input.addEventListener('input', function(e) {
        // Only allow numbers
        this.value = this.value.replace(/[^0-9]/g, '');

        // If a number is entered
        if (this.value) {
            // Move to next input if available
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    // Handle backspace
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace') {
            // Clear current input
            if (this.value) {
                this.value = '';
                return;
            }
            
            // Move to previous input if available and clear it
            if (index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = '';
            }
        }

        // Handle left arrow key
        if (e.key === 'ArrowLeft' && index > 0) {
            inputs[index - 1].focus();
        }

        // Handle right arrow key
        if (e.key === 'ArrowRight' && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Handle paste event
    input.addEventListener('paste', function(e) {
        e.preventDefault();
        
        // Get pasted data
        const pastedData = (e.clipboardData || window.clipboardData)
            .getData('text')
            .trim()
            .slice(0, inputs.length)
            .split('');

        // Fill inputs with pasted data
        pastedData.forEach((value, i) => {
            if (i >= inputs.length) return;
            if (/[0-9]/.test(value)) {
                inputs[i].value = value;
                if (i < inputs.length - 1) {
                    inputs[i + 1].focus();
                }
            }
        });
    });
});

// Automatically focus first input on page load
window.addEventListener('load', () => {
    inputs[0].focus();
});