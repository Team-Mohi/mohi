import React, { useState } from "react";
import { AiFillDislike, AiFillLike } from 'react-icons/ai';

function ButtonLikePage(props) {
    const [isJoined, setIsJoined] = useState(false);
    function joinFunc() {
        setIsJoined(!isJoined);
    }

    return(
        <React.Fragment>
        {isJoined ?
            <button onClick={() => joinFunc()}><AiFillDislike /> Bỏ thích</button>
            :
            <button onClick={() => joinFunc()}><AiFillLike /> Thích trang</button>
        }
        </React.Fragment>

    );
}

export default ButtonLikePage;