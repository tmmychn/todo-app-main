import React from 'react';
import '../App.css';
import { useEffect } from 'react';
import $ from 'jquery'

const Header = () => {

    useEffect(()=> {
        const toggleDarkMode = () => {
            $(".dark-mode-toggle").on("click", function(){
                $(".bg-img").toggleClass("light-img dark-img");
                $(".dark-mode-toggle").find('img').toggle();
                $(".app").toggleClass("bg-light bg-dark-1");
            })
        }

        toggleDarkMode()
    }, [])

    return (
        <header>
            <div className="logo">
                <h1 className="text-white">TODO</h1>
            </div>
            <button className="dark-mode-toggle">
                <img src="./images/icon-moon.svg" alt="moon icon" />
                <img src="./images/icon-sun.svg" alt="sun icon" style={{display: "none"}} />
            </button>
        </header>
    )
}

export default Header
