import React, { useState } from "react";

function ButtonJoin(props) {
    const [isJoined, setIsJoined] = useState(false);
    
    function joinFunc() {
        setIsJoined(!isJoined);
    }
    return(
        <React.Fragment>
        {isJoined ?
            <button onClick={() => joinFunc()} >Rời khỏi nhóm</button>
            :
            <button onClick={() => joinFunc()}> Tham gia ngay</button>
        }
        </React.Fragment>

    );
}

export default ButtonJoin;