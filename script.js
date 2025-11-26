// ================== DARK MODE ==================
const toggleMode = document.getElementById("toggleMode");

// Cek apakah user pernah pilih mode sebelumnya
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    toggleMode.textContent = "☀️";
}

toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleMode.textContent = "☀️";
        localStorage.setItem("mode", "dark");
    } else {
        toggleMode.textContent = "🌙";
        localStorage.setItem("mode", "light");
    }
});
