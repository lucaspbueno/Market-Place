import { useDispatch, useSelector } from "react-redux";
import CardProducts from "./CardProducts";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import BtnPage from "./BtnPage";
import { enableLoading, loadProducts } from "../redux/actions/actionsHome/productsActions";
import { getSpecificCategory } from "../services/Api";
export default function Article() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const { products, isLoading, categoryActive } = useSelector(state => state.home);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [quantityOfPage, setQuantityOfPages] = useState();
  const dispatch = useDispatch();

  const initialLoading = async () => {
    dispatch(enableLoading(true));
    const data = await getSpecificCategory(categoryActive);
    console.log(data);
    dispatch(loadProducts(data.results));
    dispatch(enableLoading(false));
  };

  useEffect(() => {
    initialLoading();
  }, []);


  /* useEffect(() => {
    if (products) {
      dispatch(enableLoading(false));
    }
  }, [products]); */

  const calculateQuantityOfPages = () => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    const pagesArray = Array.from({ length: totalPages }, (_, index) => index );
    setQuantityOfPages(pagesArray);
  };

  useEffect(() => {
    if (products) {
      const indexOfLastItem = currentPage * productsPerPage;
      const indexOfFirstItem = indexOfLastItem - productsPerPage;
      const result = products.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentProducts(result);
      calculateQuantityOfPages();
    }
  }, [currentPage, products]);

  return (
    <article className="w-full h-[850px] flex flex-col items-center justify-center">
      {
        isLoading ? <Loading /> : (
          <>
            <div className="flex items-baseline justify-center flex-wrap">
              {
                currentProducts && (
                  currentProducts.map((product, index) => (
                    <CardProducts key={ index }  product={ product } />
                  ))
                )
              }
            </div>
            <div className="join mt-5 mb-10">
              { quantityOfPage && (
                  quantityOfPage.map((el, index) => (
                    <BtnPage
                      key={ index }
                      num={ index + 1 }
                      setCurrentPage={ setCurrentPage }
                      currentPage={ currentPage }
                    />
                  ))
                )
              }
            </div>
          </>
        )
      }
    </article>
  )
}
