let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let urlText = document.getElementById("urlText");
const downloadBtn = document.getElementById("downloadBtn");

function generateQrCode() {
  if (urlText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + urlText.value;
    imgBox.classList.add("show-img");
  } else {
    alert("Enter the text or URL to generate your Qr Code");
  }
}

urlText.addEventListener('change', generateQrCode);

downloadBtn.addEventListener('click', () => {
  downloadBtn.setAttribute("href", qrImage.src);
});
