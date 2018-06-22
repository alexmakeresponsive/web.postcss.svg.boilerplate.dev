import React from 'react';
import './index.styl';

// import './sprite.symbol.svg';
// import './sprite.gradients.svg';

const  Icon = (props) => (
    <svg className={`icon ${props.iconGroup} ${props.iconStyles} icon-${props.name}`}>
        <use className="svgWr" xlinkHref={`#${props.name}`} />
    </svg>
);

export default Icon;
