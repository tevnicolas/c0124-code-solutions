type Product = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number
): number {
  const totalNoTax = products.reduce((acc, curr, index, arr) => {
    return acc + arr[index].price * arr[index].quantity;
  }, 0);

  return totalNoTax + totalNoTax * taxRate * 0.01;
}
