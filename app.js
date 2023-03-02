const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

const form = document.querySelector('form');


form.addEventListener('submit', onFormSubmit)
// BMI = indice , BOTH = description
const displayBMI = document.querySelector('.bmi-value');
const displayBoth = document.querySelector('.description')

// 
function onFormSubmit(e){
  e.preventDefault();
  
  const inputs = document.querySelectorAll('input');
  const height = inputs[0];
  const weight = inputs[1];
// Condition Si , Erreur
  if (!height.value || !weight.value || height.value <= 0 || weight.value <= 0) {
    handleError();
    return;
  }
// Calcul BMI
    const bmi = (weight.value / Math.pow((height.value / 100),2)).toFixed(1)
    showResult(bmi)
}

function handleError() {
  displayBMI.textContent = "Echec"
  displayBoth.textContent = "Veuillez entrez deux nombres valide."
}

// Fonction pour montrer résultat + couleur et description en fonction du poids
function showResult(bmi) {

  displayBMI.textContent = bmi;

  let rank;
  for (let i = 0; i < BMIData.length; i++) {
    let data = BMIData[i]
    if (bmi > BMIData[i].range[0] && bmi <= BMIData[i].range[1]){
      rank = data;
      break
    } else if (typeof data.range === "number") {
      rank = data;
    }
    }
    displayBoth.textContent = rank.name;
    displayBMI.style.color = rank.color;
    
  }

