import { useState } from "react";
import Button from "../Button/Button";
import styles from './Pagination.module.css'

interface IPagination {
  setCountPage: (value: number) => void;
  prevCountPage: number;
  totalPages: number;
}
function Pagination({ setCountPage, prevCountPage, totalPages }: IPagination) {
  const visiblePages = 3;
  const [isActive, setIsActive] = useState<boolean>(false);

  const getPageRange = () => {
    const startPage = Math.max(1, prevCountPage - 1);
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);
    return { startPage, endPage };
  };

  const { startPage, endPage } = getPageRange();

  const goToPreviousPage = () => {
    setIsActive(!isActive);
    setCountPage(Math.max(1, prevCountPage - 1));
  };

  const goToNextPage = () => {
    setCountPage(Math.min(totalPages, prevCountPage + 1));
  };

  const goToPreviousPage1 = () => {
    setIsActive(!isActive);
    setCountPage(Math.max(1, prevCountPage - 3));
  };

  const goToNextPage1 = () => {
    setIsActive(!isActive);
    setCountPage(Math.min(totalPages, prevCountPage + 3));
  };

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <Button
        onClick={() => setCountPage(i)}
        appearance="pagination"
        key={i}
        isActive={prevCountPage === i}
      >
        {i}
      </Button>
    );
  }
  return (
    <div className={styles.pagination_wrapper}>
      <Button appearance="pagination" onClick={goToPreviousPage1}>
        <img src="doubleArrowLeft.svg" alt="arrow" />
      </Button>
      <Button
        appearance="pagination"
        onClick={goToPreviousPage}
        disabled={prevCountPage === 1}
      >
        <img src="arrowLeft.svg" alt="arrow" />
      </Button>
      {pageNumbers}
      <Button
        appearance="pagination"
        onClick={goToNextPage}
        disabled={prevCountPage === totalPages}
      >
        <img src="arrowRight.svg" alt="arrow" />
      </Button>
      <Button appearance="pagination" onClick={goToNextPage1}>
        <img src="doubleArrowRight.svg" alt="arrow" />
      </Button>
    </div>
  );
}

export default Pagination;
