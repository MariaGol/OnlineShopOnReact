export const baseUrl = "https://6554bcf763cafc694fe6df07.mockapi.io/Products";

export const calcPriceAndCount = (state) => {
  let sum = 0;
  let count = 0;
  let sumPrice = 0;
  state.items.forEach((elem) => {
    sum = sum + elem.price * elem.count;
    count = count + elem.count;
    let sumSale = elem.price - (elem.price / 100) * elem.sale;
    sumPrice = sumPrice + Math.round(sumSale) * elem.count;
  });
  state.totalPrice = sum;
  state.totalCount = count;
  state.totalPriceSale = sumPrice;
};
