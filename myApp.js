const link = document.getElementById("logIn");

const openLogInModal = new bootstrap.Modal("#openLogInModal");

link.addEventListener("click", () => {
   openLogInModal.show();
});
