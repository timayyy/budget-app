export function calculatePercentage(amount: number, totalAmount: number) {
  return Number(((amount / totalAmount) * 100).toFixed(1));
}
export function calculatePercentageRemaining(totalPercentage: number) {
  const remainingPercentage = (100 - totalPercentage).toFixed(1);
  return Number(remainingPercentage);
}
