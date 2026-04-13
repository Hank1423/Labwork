document.getElementById("convertForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = 0;
    if (isNaN(amount)) {
        alert("Please enter a valid number for the amount.");
        return;
    }
    if (from === "VND" && to === "USD") {
        result = amount / 23000;
    } else if (from === "USD" && to === "VND") {
        result = amount * 23000;
    } else if (from === "VND" && to === "EUR") {
        result = amount / 27500;
    } else if (from === "EUR" && to === "VND") {
        result = amount * 27500;
    } else if (from === "VND" && to === "JPY") {
        result = amount / 165;
    } else if (from === "JPY" && to === "VND") {
        result = amount * 165;
    }
    document.getElementById("result").textContent = "Result: " + result.toFixed(2) + " " + to;
});