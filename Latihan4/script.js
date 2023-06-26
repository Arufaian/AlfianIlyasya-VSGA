let form = document.getElementById("myForm");
let username = document.getElementById("username");
let password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Lengkapi data dengan benar!!!!");
  } else if (confirm("apakah anda yakin?") == true) {
    document.getElementById("myForm").submit();
    alert("data anda berhasil disubmit");
  }
});

let nama = prompt("Siapa namamu?");
if (nama != null) {
  document.getElementById("title").innerHTML = "Heloo " + nama;
}
