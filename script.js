document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("digiteSeuTexto");
    const outputMessage = document.getElementById("outputMessage");
    const encryptButton = document.getElementById("encryptButton");
    const decryptButton = document.getElementById("decryptButton");
    const copyButton = document.getElementById("copyButton");

    function encrypt(text) {
        return text.replace(/[aeiou]/g, match => ({
            'a': 'ai', 
            'e': 'enter', 
            'i': 'imes', 
            'o': 'ober', 
            'u': 'ufat'
        }[match]));
    }

    function decrypt(text) {
        return text.replace(/(ai|enter|imes|ober|ufat)/g, match => ({
            'ai': 'a', 
            'enter': 'e', 
            'imes': 'i', 
            'ober': 'o', 
            'ufat': 'u'
        }[match]));
    }

    encryptButton.addEventListener("click", function() {
        outputMessage.textContent = encrypt(inputText.value);
    });

    decryptButton.addEventListener("click", function() {
        outputMessage.textContent = decrypt(inputText.value);
    });

    copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(outputMessage.textContent).then(() => {
            alert("Texto copiado com sucesso!");
        }, () => {
            alert("Falha ao copiar texto.");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.getElementById("resetButton");
    const inputText = document.getElementById("digiteSeuTexto");
    const outputMessage = document.getElementById("outputMessage");

    resetButton.addEventListener("click", function() {
        inputText.value = '';
        outputMessage.textContent = 'Nenhuma mensagem encontrada';
    });
});

