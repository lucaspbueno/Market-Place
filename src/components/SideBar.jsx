import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";
import CardCategories from "./CardCategories";
import Loading from "./Loading";
import { getCategories, getSpecificCategory } from "../services/Api";
import { enableLoading, loadProducts, setActiveCategory } from "../redux/actions/actionsHome/productsActions";

export default function SideBar() {
  const { data, loading, error } = useFetch(getCategories);
  const dispatch = useDispatch();

  if (loading) {
    return <div className="w-1/5 flex justify-center items-center"><Loading /></div>;
  }

  if (error) {
    return <p>Erro: {error.message}</p>;
  }

  const handleClick = async (id) => {
    dispatch(setActiveCategory(id));
    dispatch(enableLoading(true));
    const data = await getSpecificCategory(id);
    dispatch(loadProducts(data.results));
    dispatch(enableLoading(false));
  };

  return (
    <aside className="bg-[#0e142f] w-1/5 h-[850px] overflow-y-scroll">
      <ul>
        { data &&
          data.map(({ name, id }) => (
            <li key={ name } onClick={ () => handleClick(id) } >
              <CardCategories categoryName={ name } id={ id } />
            </li>
          ))
        }
      </ul>
    </aside>
  );
}
