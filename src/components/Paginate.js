const Paginate = ({ page, setPage, numberOfPages }) => {
  return (
    <div className="paginate">
      <button
        disabled={page <= 1 ? true : false}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <div>
        {page} <span className="pages">/ {numberOfPages}</span>
      </div>
      <button
        disabled={page >= numberOfPages ? true : false}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;
