async function copySignature() {
    console.log('läuft');
    const signature = document.getElementById("signature").innerHTML;

    console.log(window.isSecureContext);


    try {
        const blob = new Blob([signature], { type: "text/html" });
        const data = [new ClipboardItem({ "text/html": blob })];
        await navigator.clipboard.write(data); // <-- WICHTIG: await
        alert("Signatur kopiert!");
    } catch (err) {
        console.error("Kopieren fehlgeschlagen:", err);
        alert("Kopieren fehlgeschlagen. Versuche es manuell.");
    }
}

document.getElementById('copy-signature').addEventListener('click', copySignature);
