// Utility function to get the latest products
export const getLatestProducts = (products, count = 4) => {
  return [...products]
    .sort((a, b) => a.id - b.id)
    .slice(0, count);
};

// Utility function to get the cheapest products
export const getCheapestProducts = (products, count = 4) => {
  return [...products]
    .sort((a, b) => a.price - b.price)
    .slice(0, count);
};

// Utility function to filter and sort products
export const filterAndSortProducts = (products, filter) => {
  let sortedProducts = [...products];

  switch (filter) {
    case 'cheapest':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'expensive':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      sortedProducts.sort((a, b) => b.id - a.id);
      break;
    case 'oldest':
      sortedProducts.sort((a, b) => a.id - b.id);
      break;
    default:
      break;
  }

  return sortedProducts;
};