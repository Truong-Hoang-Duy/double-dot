const dropdownEmail = document.querySelector(".dropdown-email");
const logOut = document.querySelector(".header-dropdown-item:last-child");

const user = JSON.parse(
  sessionStorage.getItem("firebase:authUser:AIzaSyDamaWGBSMJm_NBapBxEdqWHdnxaKF0TTM:[DEFAULT]")
);
if (!user) {
  window.location.href = "../html/signIn.html";
}

dropdownEmail.textContent = user.email;

logOut.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.location.href = "../html/signIn.html";
    })
    .catch((error) => {
      // An error happened.
    });
});
