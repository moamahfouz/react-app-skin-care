import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar pt-4">
            <div className="container">
                <div className="brand">
                    <a className="navbar-brand m-auto active" href="/">
                        <img
                            src="/images/logo.png"
                            alt="App Logo"
                            width="200"
                            height="50"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </a>
                </div>
                <div className="btn__header">
                    <a className="white__text bg-prime rounded" href="#">إكشتف روتينك المناسب</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
