import React from "react";

const Card = (props) =>{
    const{image, title, description} = props.cards;
    return(
        <Div className="card h-100" style={{ width: '18rem' }}>
           <img className="card-img-top" src={image} />
            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p className="card-text">
                    {description}
                </p>
               <Button className="btn btn-primary">Go somewhere</Button>
            </div>
        </Div>
    );
};

export default Card;

