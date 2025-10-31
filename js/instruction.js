console.log("Loaded instructions...");
document.querySelector(".knap1").addEventListener("click", knap1);

function knap1() {
  document.querySelector("#brilleglas").classList.add("my_scale");
  document.querySelector("#brilleglas").style.fill = "red";
}

document.querySelector(".knap2").addEventListener("click", knap2);

function knap2() {
  document.querySelector("solhat").classList.add("my_scale");
}
