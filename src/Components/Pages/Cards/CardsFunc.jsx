import { useEffect, useState } from 'react';
import Cards from './Cards';

const CardsFunc = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => setAllData(data));
  }, []);

  console.log(allData);

  return (
    <div>
      <div className="">
        <div className="container">
          <div
         
            className="row .ms-1 {
  margin-left: ($spacer * .25) !important;
}"
          >
            {allData?.map(dataAll => (
              <div key={dataAll?.id} className="col-lg-4 col-md-6 col-sm-12 ">
                <Cards key={dataAll?.id} dataAll={dataAll}></Cards>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsFunc;
