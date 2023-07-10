import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CardCategories({ categoryName, id }) {
  const [hasClicked, setHasClicked] = useState(false);
  const { categoryActive } = useSelector(state => state.home);

  useEffect(() => {
    if (categoryActive.includes(id)) {
      setHasClicked(true);
    } else {
      setHasClicked(false);
    }
  }, [categoryActive]);

  return (
    <div className="form-control p-3 hover:bg-sky-700">
      <label className="label cursor-pointer">
        <span className="label-text">{ categoryName }</span> 
        <input type="checkbox" checked={ hasClicked } className="checkbox checkbox-success"/>
      </label>
    </div>
  );
}
