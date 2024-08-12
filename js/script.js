function calculateBMI() {
  weight = weightDesc.value;
  old = oldDesc.value;
  height = heightDesc.value;
  BMI = weight / height ** 2;
  result.innerText = BMI;

  if (BMI < 18.5) {
    statement.innerText = "BMI Anda berada dalam kisaran berat badan kurang";
  } else if (BMI > 18.5 && BMI < 24.9) {
    statement.innerText =
      "BMI Anda berada dalam kisaran berat badan normal atau sehat";
  } else if (BMI > 25 && BMI < 29.9) {
    statement.innerText = "BMI Anda berada dalam kisaran kelebihan berat badan";
  } else {
    statement.innerText = "KESALAHAN: Masukkan data yang benar";
    showAlert();
  }
}
