function toggleButton() {
    let checkbox = document.getElementById("agreeCheck");
    let button = document.getElementById("continueBtn");
    button.disabled = !checkbox.checked;
}

function proceed() {
    window.location.href = "create_an_agent_account.html";
}