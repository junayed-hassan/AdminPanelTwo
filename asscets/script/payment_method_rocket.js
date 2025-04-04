document.addEventListener('DOMContentLoaded', function () {
    const transactionInput = document.getElementById('transactionId');
    const confirmBtn = document.getElementById('confirmBtn');
    const copyBtn = document.getElementById('copyBtn');

    // Enable/disable confirm button based on input
    transactionInput.addEventListener('input', function () {
        confirmBtn.disabled = !this.value.trim();
    });

    // Copy phone number to clipboard
    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText('01303260848')
            .then(() => {
                alert('নম্বর কপি করা হয়েছে: 01303260848');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    });

    // Handle payment confirmation
    confirmBtn.addEventListener('click', function () {
        if (!transactionInput.value.trim()) return;

        // Here you would typically send the transaction ID to your server
        // For this example, we'll just redirect to success page
        window.location.href = 'payment_success.html';
    });
});