import { useEffect, useState } from "react";

export default function BtnPage({ num, setCurrentPage, currentPage }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (currentPage === num) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [currentPage]);

  return (
    <input
      className={ isChecked ? "join-item btn btn-primary btn-square btn-lg" : "join-item btn btn-square btn-lg"}
      type="radio"
      name="options"
      aria-label={ num }
      onClick={ () => setCurrentPage(num) }
    />
  );
}
