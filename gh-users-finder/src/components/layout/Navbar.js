import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({ icon, title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h2><i style={{ marginRight: '10px' }} className={icon}></i>{title}</h2>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
