import React from "react";

function Product ({discription, image, title, euro}){
    return(
        <article className="product">
            <span className="sold-selling">
                {discription}
            </span>
            <img src={image} alt={title}/>
            <p className="product-name">
                {title}
            </p>
            <h4 className="price">
                {euro}
            </h4>

        </article>

    );
}

export default Product