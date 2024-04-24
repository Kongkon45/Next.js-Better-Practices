import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <h1>Navbar</h1>
            {children}
            <h2>Footer</h2>
        </div>
    );
};

export default Layout;