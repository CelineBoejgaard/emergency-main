console.log("Loaded instructions...");
document.querySelector(".knap1").addEventListener("click", knap1);

function knap1() {
  document.querySelector("#brilleglas").classList.add("my_scale");
  document.querySelector("#brilleglas").style.fill = "red";

  document.querySelector(".info-text h2").textContent = "Solbriller!!";

  document.querySelector(".placeholder").textContent =
    "Gode nyheder: Solbriller er ikke længere vigtige, fordi solen er væk, og dermed er risikoen for solens skadelige virkning på øjnene også væk. Solen kan ellers have mange negative virkninger på øjnene, som du kan se nedenfor.";

  document.querySelector("#efficiency").textContent =
    "Når du kniber øjnene sammen i skarpt lys, bliver øjenmusklerne hurtigt trætte. Solbriller reducerer blænding, så dine øjne kan slappe af.";

  document.querySelector("#requirement").textContent =
    "Huden omkring øjnene er tynd og sårbar over for solskader og rynker. Solbriller skærmer også denne del af ansigtet.";
}

document.querySelector(".knap2").addEventListener("click, knap2");

function knap2() {
  document.querySelector("#_solhat_").classList.add("my_scale");
  document.querySelector("#_solhat_").style.fill = "red";
}
