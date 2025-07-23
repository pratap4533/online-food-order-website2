document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const foodsLink = document.getElementById("foods-link");
    const logoutLink = document.getElementById("logout-link");
    const loginLink = document.getElementById("login-link");
    const signupLink = document.getElementById("signup-link");

    if (isLoggedIn) {
        foodsLink.style.display = "inline";
        logoutLink.style.display = "inline";
        loginLink.style.display = "none";
        signupLink.style.display = "none";
    }

    logoutLink.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        window.location.reload(); // logout नंतर page refresh होईल
    });
});
