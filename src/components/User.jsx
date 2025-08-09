import React from "react";

const User = (props)=> {

    return (
        <div className='text-white bg-black'>
            {props.elem.fullName}
        </div>        
    )
}

export default User