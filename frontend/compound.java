vicky
2:13 PM (2 minutes ago)
to VENKAT, me, uday, vicky


function calculateCompoundInterest(P, r, n, t) {
  const A = P * Math.pow((1 + r / n), n * t);
  return A;
}


const principal = 1000;      
const annualRate = 0.05;     
const timesCompounded = 4;   
const years = 5;

const amount = calculateCompoundInterest(principal, annualRate, timesCompounded, years);
console.log(`Amount after ${years} years: $${amount.toFixed(2)}`);

