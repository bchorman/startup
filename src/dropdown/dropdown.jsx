import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './dropdown.css';

function Dropdown({ username, onLogout }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="dropdown body bg-dark text-light" ref={dropdownRef}>
            <button
                className="btn btn-secondary dropdown-toggle"
                onClick={toggleDropdown}
                data-bs-toggle="dropdown"
                aria-expanded={isOpen}
            >
                {username}
            </button>
            <ul className={`dropdown-menu dropdown-menu-end bg-dark text-light ${isOpen ? "show" : ""}`}>
                <li>
                    <NavLink className="dropdown-item nav-link bg-dark text-light" to="profile" >Profile</NavLink>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <button className="dropdown-item bg-dark text-light" onClick={onLogout}>Logout</button>
                </li>
            </ul>
        </div>
    );
}

export { Dropdown };
