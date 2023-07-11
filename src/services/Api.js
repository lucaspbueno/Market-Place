
export const getCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
/* export async function getCategories() {
  const URL_API = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
} */

export async function getSpecificCategory(CATEGORY_ID) {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`;
  try {
    const response = await fetch(URL_API);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Sem sucesso na requisição');
  } catch (error) {
    return error.message;
  }
}

/* const URL_API = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`;
  const response = await fetch(URL_API);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log
  } */

export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`;
  try {
    const response = await fetch(URL_API);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Sem sucesso na requisição');
  } catch (error) {
    return error.message;
  }
}

export async function getProductById(PRODUCT_ID) {
  const URL_API = `https://api.mercadolibre.com/items/${PRODUCT_ID}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}