// Ensure the Telegram WebApp is ready
window.Telegram.WebApp.ready();

// QR code scanning function
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    console.log(`Decoded text: ${decodedText}`);
    // Send the decoded text to Telegram WebApp
    window.Telegram.WebApp.sendData(decodedText);
};

const html5QrCode = new Html5Qrcode("reader");
const qrCodeConfig = { fps: 10, qrbox: 250 };

html5QrCode.start(
    { facingMode: "environment" }, 
    qrCodeConfig, 
    qrCodeSuccessCallback
).catch(err => {
    console.error(`Error starting the QR code scanner: ${err}`);
});
