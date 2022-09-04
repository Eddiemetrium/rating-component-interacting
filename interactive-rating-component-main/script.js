const submitButton = document.getElementById("submit");
const fiveButttons = document.querySelectorAll("buttons");
submitButton.addEventListener("click", (e) => {
  submitButton.classList.add("hide");
});
for (let i = 0; (i = fiveButttons.length); i++) {
  console.log(i);
  console.log(i.target);
}
