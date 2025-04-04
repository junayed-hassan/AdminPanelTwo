document.addEventListener('DOMContentLoaded', function () {
    const paymentOptions = document.querySelectorAll('.payment-option');

    paymentOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedPayment = this.getAttribute('data-payment');
            window.location.href = `payment_method_${selectedPayment}.html`;
        });
    });
});