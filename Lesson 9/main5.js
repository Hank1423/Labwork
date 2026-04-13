document.getElementById("convertForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    
    let result = (amount * to) / from;
    document.getElementById("result").textContent = "Result: " + result.toFixed(2);
});