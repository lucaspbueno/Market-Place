import { useEffect, useState } from "react";
import { getProductsFromCategoryAndQuery } from "../services/Api";
import { useDispatch } from "react-redux";
import { enableLoading, loadProducts, setActiveCategory } from "../redux/actions/actionsHome/productsActions";

export default function Filters() {
  const [stateInput, setStateInput] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = async ({ target: { value } }) => {
    dispatch(setActiveCategory(''));
    setStateInput(true);
    setTextSearch(value);
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
    searchProducts();
  }, [textSearch])

  return (
    <div className="flex flex-col items-end bg-black h-16 p-2">
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
