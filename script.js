// Відкриття модального вікна при натисканні на кнопку
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const authModal = document.getElementById("authModal");

openModalBtn.onclick = function() {
    authModal.style.display = "flex"; // Показуємо модальне вікно
};

closeModalBtn.onclick = function() {
    authModal.style.display = "none"; // Закриваємо модальне вікно
};

// Закрити модальне вікно при натисканні поза ним
window.onclick = function(event) {
    if (event.target === authModal) {
        authModal.style.display = "none";
    }
};

// Перемикання вкладок (реєстрація / вхід)
function showTab(tab) {
    if (tab === "signup") {
        document.getElementById("signup-form").classList.remove("hidden");
        document.getElementById("login-form").classList.add("hidden");
        document.getElementById("signup-tab").classList.add("active");
        document.getElementById("login-tab").classList.remove("active");
    } else {
        document.getElementById("signup-form").classList.add("hidden");
        document.getElementById("login-form").classList.remove("hidden");
        document.getElementById("signup-tab").classList.remove("active");
        document.getElementById("login-tab").classList.add("active");
    }
}

// Функція реєстрації
async function register() {
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();
    document.getElementById("signup-message").textContent = result.message;
}

// Функція входу
async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    document.getElementById("login-message").textContent = result.message;
}
