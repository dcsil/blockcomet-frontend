import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './assets/404_not_found.png';
import './css/NotFoundPage.css';

class NotFoundPage extends React.Component{
    render(){
        return (<div className='page-not-found-container'>
            <img className="page-not-found-img" src={PageNotFound}  />
            <h2 style={{textAlign:"center"}}>
              <Link to="/">Return to Home </Link>
            </h2>
          </div>
          )
    }
}
export default NotFoundPage;
