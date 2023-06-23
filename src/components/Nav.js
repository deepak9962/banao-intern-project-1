import React from "react";

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <a className="navbar-brand" href="#">
                    <img src={require('../assets/whole.png')} alt="" />
                </a>

                <button className="btn btn-outline-light d-mb-none d-lg-none d-xl-none btnJoin">Join Group</button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline mx-auto">
                        <input className="form-control rounded-pill border-0" type="search" placeholder='   &#xF002;    Search for your favorite groups in ATG' aria-label="Search" />
                    </form>

                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <span style={{ fontFamily: 'IBM Plex Sans' }}>
                                Create account. <select className="bg-light border-0 text-primary fw-medium">
                                    <option defaultValue>It's free!</option>
                                </select>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;