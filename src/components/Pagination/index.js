import React, { useState } from "react";

import {
  Pagination,
  PaginationItem,
  Item,
  GoToPrevious,
  GoToNext,
} from "./styles/pagination";

function PaginationTable({ data, RenderComponent, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <div>
      <div className="dataContainer">
        <RenderComponent data={getPaginatedData()} />
      </div>

      <Pagination>
        <GoToPrevious onClick={goToPreviousPage} currentPage={currentPage}>
          Voltar
        </GoToPrevious>

        {getPaginationGroup().map((item, index) => (
          <PaginationItem
            key={index}
            onClick={changePage}
            currentPage={currentPage}
            item={item}
          >
            <Item>{item}</Item>
          </PaginationItem>
        ))}

        <GoToNext
          onClick={goToNextPage}
          currentPage={currentPage}
          pages={pages}
        >
          Avançar
        </GoToNext>
      </Pagination>
    </div>
  );
}

export default PaginationTable;
