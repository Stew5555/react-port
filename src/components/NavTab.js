import React from 'react';

//destructuring object aka props. pass in props to every functional component
//props are currentpage and handlePageChange - those get passed in

function NavTabs({ currentPage, handlePageChange }) {
    return (

        <ul className="nav nav-tabs" style={{ display: 'flex', justifyContent: 'flex-end', borderBottom: 'none' }}>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    //ternary operator. if current page is home, add "active" class with nav-link
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
        </ul>

    );
}

export default NavTabs;