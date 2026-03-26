function loginAdmin() {
    let p = document.getElementById("pass").value.trim();
    if (p === "clarabeor@0001") {
        window.location.href = "admin.html";
    } else {
        alert("Contraseña incorrecta ❌");
    }
}
