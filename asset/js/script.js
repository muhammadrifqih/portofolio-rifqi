// ------ content ------- //

const data =
  "https://script.google.com/macros/s/AKfycbxRNVmgl2NQQv4zC0k8uS3L1pqireUqHcx_Iwvx4D-NMEfzBQC09oOArJ9fXnDeB2--/exec";
const content = document.querySelector("#conten");

const getContent = () => {
  fetch(data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      content.innerHTML = "";
      let ctn = responseJson.user;
      ctn.forEach((item) => {
        content.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="">
                <h3>${item.name}</h3>
                <p>${item.desct}</p>
                <a href="${item.link_demo}">Link Demo </a>
                <a href="${item.link_github}">Link Github </a>
            </div>
          `;
      });
    });
};
document.addEventListener("DOMContentLoaded", getContent);

// kirim pesan
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyTjpXUL3xcFN8WddswtD-qdgj-Z4-aoDS2aRlyMTlAhbWuayaI36Pb44BSXs1p2tMY/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Success! Pesan anda di kirm");
      form.reset();
    })
    .catch((error) => console.log("Error!", response));
});
