function calcularCuotas() {
    const montoTotal = parseFloat(prompt("Ingrese el monto total del préstamo:"));
    const numeroCuotas = parseInt(prompt("Ingrese el número de cuotas deseadas:"));
  
    if (isNaN(montoTotal) || isNaN(numeroCuotas) || montoTotal <= 0 || numeroCuotas <= 0) {
      alert("Por favor, ingrese valores válidos para el monto total y el número de cuotas.");
      return;
    }
  
    // Calculo de la tasa de interés mensual
    const tasaInteresAnual = 1.33; // 133% anual
    const tasaInteresMensual = tasaInteresAnual / 12;
  
    // Cuota fija con interes
    const cuotaFijaConInteres = (montoTotal * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -numeroCuotas));
  
    let resultado = "Cuotas calculadas con un interés del 133% anual: \n";
    for (let i = 1; i <= numeroCuotas; i++) {
      const cuota = cuotaFijaConInteres;
      resultado += "Cuota " + i + ": $" + cuota.toFixed(2) + "\n";
    }
  
    alert(resultado);
  }

  calcularCuotas();
  