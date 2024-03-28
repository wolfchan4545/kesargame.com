const letters = "abcdefghijklmnopqrstuvwxyz";

function encrypt(plaintext, key) {
    let ciphertext = "";
    for (let letter of plaintext) {
        letter = letter.toLowerCase();
        if (letter !== " ") {
            const index = letters.indexOf(letter);
            if (index === -1) {
                ciphertext += letter;
            } else {
                const newIndex = (index + key) % 26;
                ciphertext += letters[newIndex];
            }
        } else {
            ciphertext += " ";
        }
    }
    return ciphertext;
}

function decrypt(ciphertext, key) {
    let plaintext = "";
    for (let letter of ciphertext) {
        letter = letter.toLowerCase();
        if (letter !== " ") {
            const index = letters.indexOf(letter);
            if (index === -1) {
                plaintext += letter;
            } else {
                const newIndex = (index - key + 26) % 26;
                plaintext += letters[newIndex];
            }
        } else {
            plaintext += " ";
        }
    }
    return plaintext;
}

function encryptText() {
    const key = parseInt(document.getElementById("key").value);
    const text = document.getElementById("text").value;
    const encryptedText = encrypt(text, key);
    document.getElementById("output").innerText = `Encrypted: ${encryptedText}`;
}

function decryptText() {
    const key = parseInt(document.getElementById("key").value);
    const text = document.getElementById("text").value;
    const decryptedText = decrypt(text, key);
    document.getElementById("output").innerText = `Decrypted: ${decryptedText}`;
}
