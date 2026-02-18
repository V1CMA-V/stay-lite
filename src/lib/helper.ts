export const formatPrice = (amount: number) => {
  return amount.toLocaleString('en-Us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
