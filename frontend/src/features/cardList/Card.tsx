import React, { useState } from 'react';

function Card(): JSX.Element {
    const [active, setActive] = useState(false);
    return (
        <div className="oneCard" onClick={setActive}>
        </div>
    );
}

export default Card;