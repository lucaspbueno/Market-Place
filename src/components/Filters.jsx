import { useEffect, useState } from "react";
import { getProductsFromCategoryAndQuery } from "../services/Api";
import { useDispatch, useSelector } from "react-redux";
import { enableLoading, loadProducts, setActiveCategory } from "../redux/actions/actionsHome/productsActions";

export default function Filters() {
  const [stateInput, setStateInput] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const { products } = useSelector(state => state.home);
  const dispatch = useDispatch();

  const handleChange = async ({ target: { value } }) => {
    dispatch(setActiveCategory(''));
    setStateInput(true);
    setTextSearch(value);
    console.log(value, textSearch);
  };

  const searchProducts = async () => {
    dispatch(enableLoading(true));
    const data = await getProductsFromCategoryAndQuery('', textSearch);
    if (data.results.length > 0) {
      dispatch(loadProducts(data.results));
    } else if (data.results.length === 0 && stateInput) {
      dispatch();
    }
    dispatch(enableLoading(false));
  };

  useEffect(() => {
    if (stateInput === true) {
      searchProducts();
    }
  }, [textSearch]);

  const orderProducts = ({ target: { value } }) => {
    if (value === 'maior') {
      const sortProductsByHighestPrice = products.sort((a, b) => b.price - a.price);
      dispatch(loadProducts([...sortProductsByHighestPrice]));
    } else {
      const orderProductsByLowestPrice = products.sort((a, b) => a.price - b.price);
      dispatch(loadProducts([...orderProductsByLowestPrice]));
    }
  };

  return (
    <div className="flex justify-end bg-base-100 h-16 p-2">
      <p className="self-center mr-2">Ordernar por</p>
      <select
        className="select select-bordered w-full max-w-xs mr-5"
        onChange={ orderProducts }
      >
        <option disabled selected>Selecione o filtro</option>
        <option value="menor">Menor preço</option>
        <option value="maior">Maior preço</option>
      </select>
      <div className="flex bg-base-100 w-1/5">
        <input
          type="text"
          className="input input-group"
          name="textSearch"
          placeholder="Buscar produtos, marcas e muito mais!"
          value={ textSearch }
          onChange={ handleChange }
          onBlur={ () => setStateInput(false) }
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
    </div>
  );
}
