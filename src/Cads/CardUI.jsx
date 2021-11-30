import react from 'react';

import'./Card-style.css';

const Card=props=> {
return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt='first-img' className="card-img-top"/>
            </div>
            <div className="Card-body text-dark">
            <h4 className="Card-title">{props.title}</h4>
            <p className="Card-text text-secondary"> 23 Friends</p>
            </div>
        </div>
);
}

export default Card;