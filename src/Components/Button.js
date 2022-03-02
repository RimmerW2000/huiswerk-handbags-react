import React from "react";

function Button( {kindofbutton, click, discription, working}) {
    return( <button className="click-here"
            type={kindofbutton}
            onClick={click}
            disabled={working}
        >
            {discription}
        </button>

    )
}

export default Button;