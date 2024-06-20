import React from 'react'

const Header = () => {
    return (
        <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light p-3 py-4 py-lg-0 px-lg-5 px-4">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <img src="./WA_logo.jpg" alt="website logo" width="50" height="50" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav m-auto py-0">
                    <a href="#" class="nav-item nav-link active">Home</a>
                    <a href="#about" class="nav-item nav-link">About Me</a>
                    <a href="#projects" class="nav-item nav-link">Projects</a>
                    <a href="#skills" class="nav-item nav-link">Skill</a>
                    <a href="#experiences" class="nav-item nav-link">Experiences</a>
                    <a href="#certificates" class="nav-item nav-link">Certificates</a>

                    <a href="#contact" class="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Header