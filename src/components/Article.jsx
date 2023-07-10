import { useSelector } from "react-redux";
import CardProducts from "./CardProducts";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import BtnPage from "./BtnPage";
export default function Article() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const { products, isLoading } = useSelector(state => state.home);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [quantityOfPage, setQuantityOfPages] = useState(null);

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
            <div className="flex items-baseline justify-center flex-wrap mt-14">
              {
                currentProducts && (
                  currentProducts.map((product, index) => (
                    <CardProducts key={ index }  product={ product } />
                  ))
                )
              }
            </div>
            <div className="join">
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
