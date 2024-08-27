const inputText = document.getElementById("inputText");
const buttonCriptografar = document.getElementById("buttonCriptografar");
const buttonDescriptografar = document.getElementById("buttonDesriptografar");
const buttonCopiar = document.getElementById("buttonCopiar");
const infoText = document.getElementById("infoText");
const boneco = document.getElementById("boneco");
const infoDigite = document.getElementById("infoDigite");


let codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

buttonCriptografar.addEventListener("click", () => {
    const text = inputText.value.toLowerCase();
    function criptografar(newText) {
        for (let i = 0; i < codigo.length; i++) {
            if (newText.includes(codigo[i][0])) {
                newText = newText.replaceAll(codigo[i][0], codigo[i][1]);
            };
        };
        return newText;
    }
    const textCriptografado = criptografar(text);
    infoText.innerHTML = textCriptografado;
    boneco.style.display = "none";
    infoDigite.style.display = "none";
    buttonCopiar.style.display = "block";
})

buttonDescriptografar.addEventListener("click", () => {
    const text = inputText.value.toLowerCase();
    function descriptografar(newText) {
        for (let i = 0; i < codigo.length; i++) {
            if (newText.includes(codigo[i][1])) {
                newText = newText.replaceAll(codigo[i][1], codigo[i][0]);
            };
        };
        return newText;
    }
    const textDescriptografado = descriptografar(text);
    infoText.innerHTML = textDescriptografado;
    boneco.style.display = "none";
    infoDigite.style.display = "none";
    buttonCopiar.style.display = "block";
})

buttonCopiar.addEventListener("click", () => {
    let text = infoText;
    text.select();
    document.execCommand('copy');
    alert("Texto copiado!");
})