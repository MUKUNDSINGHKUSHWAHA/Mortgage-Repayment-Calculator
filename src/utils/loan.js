export function calculateLoanPayement(amount, term, rate) {
    const P = amount;
  
    const i = rate / 100 / 12;
  
    const n = term * 12;
  
    // The formula
    const monthlyPayment = ((P * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    const totalRepayement = (monthlyPayment * n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    return {
      monthlyPayment,
      totalRepayement,
    };
}