import React from 'react';

const Header = () => {
    const style = {
        "width": "100%",
        "height": "55px",
        "background": "#222029",
        "position":"absolute",
        "top":"0",
        "borderBottom": "1px solid black"
    }
    return (
        <div style={style}>
            <h2>Header </h2>
        </div>
    );
};

export default Header;