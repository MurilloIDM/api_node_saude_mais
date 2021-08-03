export default (imc: number): string => {
  let rating = "";

  if (imc < 18.5) {
    rating = "Magreza";
  } else if (imc >= 18.5 && imc < 25) {
    rating = "Normal";
  } else if (imc >= 25.0 && imc < 30) {
    rating = "Sobrepeso";
  } else if (imc >= 30.0 && imc < 40) {
    rating = "Obesidade";
  } else {
    rating = "Obesidade Grave";
  }

  return rating;
};
