import React from 'react';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function PageNotFound() {
  return (
    <div>
      <div className='pageNotFound'>
        <div className='pageError'>
          <h1>
            4<SentimentVeryDissatisfiedIcon style={{fontSize: 160}} />4
          </h1>
          <p>Oops! page not found</p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
