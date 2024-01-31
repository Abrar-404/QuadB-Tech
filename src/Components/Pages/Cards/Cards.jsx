const Cards = ({ dataAll }) => {
  const { show } = dataAll || {};

  return (
    <div>
      <div className="">
        <div className="">
          <div className="card" style={{ width: '18rem' }}>
            <img
              style={{ width: '18rem' }}
              src={show?.image?.original}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{show?.name}</h5>
              <p className="card-text">{show?.type}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
