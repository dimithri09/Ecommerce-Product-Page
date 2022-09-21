import React from "react";

function Header(){
    return(
        <header className="primary-header">
            <div className="container">
                <a href="#"><img src="images/logo.svg" alt="sneakers"/></a>
                <nav className="primary-navigation">
                    <ul role="list" className="nav-list">
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <img src="images/icon-cart.svg"  alt="shopping-cart"/>
                <img src="images/image-avatar.png" alt="user-profile-picture" />
            </div>
        </header>
    );
}

export default Header;