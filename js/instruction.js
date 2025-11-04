console.log("Loaded instructions...");
document.querySelector(".knap1").addEventListener("click", knap1);

function knap1() {
  document.querySelector("#brilleglas").classList.add("my_scale");
  document.querySelector("#brilleglas").style.fill = "red";

  document.querySelector(".info-text h2").textContent =
    "Solbriller er ikke længere vigtig";

  document.querySelector(".placeholder").textContent =
    "Der er ingen sol, så du behøver ikke solbriller";
}
