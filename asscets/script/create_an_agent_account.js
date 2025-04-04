document.getElementById("agentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let category = document.getElementById("category").value;
    let site = document.getElementById("site").value;
    let name = document.getElementById("name").value;
    let whatsapp = document.getElementById("whatsapp").value;

    if (category === "" || site === "" || name === "" || whatsapp === "") {
        alert("সব তথ্য পূরণ করুন!");
        return;
    }

    window.location.href = "payment_method.html"; // Redirect to payment_method page
});