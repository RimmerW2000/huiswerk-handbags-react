import React from "react";

function Tile({image, title, children}) {
    return(
        <section className="footer">
            <img src={image} alt={title}/>
            <h2 className="about">
                {title}
            </h2>
            {children}
        </section>
    );
}

export default Tile;