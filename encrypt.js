function encrypt(event) {
    event.preventDefault();
    let resultText = '';
    const Text = document.getElementById("Text").value; 
    const shift = parseInt(document.getElementById("shift").value); 

    for (let i = 0; i < Text.length; i++) {
        let charCode = Text.charCodeAt(i) + shift;
        resultText += String.fromCharCode(charCode);
    }

    document.getElementById("resultText").textContent = resultText;
}
