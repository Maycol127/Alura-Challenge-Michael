/* Encriptar */
function encriptar(){
    let texto = document.getElementById("texto").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    Resultado(textoEncriptado);
}

/* Desencriptar */
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let DesencriptarTexto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    Resultado(DesencriptarTexto);
}

/* Copiar */
document.getElementById("copiar").addEventListener("click", function() {
    let textoCopia = document.getElementById("resultado").textContent;
    /* Try and catch (en caso de errores) */
    navigator.clipboard.writeText(textoCopia).then(() => {
        alert("Tu texto ha sido copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar: ", err);
    });
});


/* Resultado (si está o no en blanco)*/
function Resultado(resultado) {
    if (resultado.trim() === "") {
        document.getElementById("resultado").style.display = "none";
        document.getElementById("imagen03").style.display = "block";
        document.getElementById("titulo").style.display = "block";
        document.getElementById("subtitulo").style.display = "block";
        document.getElementById("copiar").style.display = "none";
    } else {
        document.getElementById("resultado").textContent = resultado;
        document.getElementById("resultado").style.display = "block";
        document.getElementById("imagen03").style.display = "none";
        document.getElementById("titulo").style.display = "none";
        document.getElementById("subtitulo").style.display = "none";
        document.getElementById("copiar").style.display = "block";
    }
}