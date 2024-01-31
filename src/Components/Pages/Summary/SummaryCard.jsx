const SummaryCard = () => {
  return (
    <div>
      <div className="card " style={{ width: '18rem' }}>
        <img
          style={{ width: '18rem' }}
          src=''
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">name</h5>
          <p className="card-text">type</p>
            <a href="#" className="btn btn-primary">
              Go To Summary
            </a>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
