import React, { Component } from "react";
import "./portfolio.css";

export default class extends Component {
    render() {
        return (
            <html lang="en">

                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Portfolio Code</title>
                    <link rel="stylesheet" href="style.css" />
                    <script src="https://kit.fontawesome.com/66aa7c98b3.js" crossorigin="anonymous"></script>
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
                        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
                </head>

                <body className="portfoliobody">
                    <header class="header">
                        <nav class="navbar">
                            <div class="navbar-container container">
                                <div>
                                    <h1 class="navbar-brand">Shubham verma</h1>
                                </div>
                                <ul class="menu-items">
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#my-works">Portfolio</a></li>
                                    <li><a href="#contact-me">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div class="home-content" id="home-page">
                            <div class="name">
                                <h1>Hi, I'm Shubham</h1>
                                <p>A Web Developer</p>
                            </div>
                            <div class="angle-down-icon">
                                <a href="#about"><i class="fas fa-angle-down"></i></a>
                            </div>
                        </div>
                    </header>
                    <section class="about-me" id="about">
                        <div class="container">
                            <div class="about-content">
                                <div class="left-content">
                                    <div>
                                        <h1 class="about-heading">About Me</h1>
                                    </div>
                                    <img src="https://i.postimg.cc/Hx4nChpH/fbavatar-1630400663387-6838396024049256103.png" alt="image" />
                                    <p>
                                        I am 16 year old, BBA-CA student studied at Pratibha College of Commerce and Computer studies.
                                        I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new
                                        things; the more, the better.
                                    </p>
                                    <div class="work-arrow">
                                        <p>
                                            <a href="#my-works">Check out my work <i class="fas fa-arrow-down"></i></a>
                                        </p>
                                    </div>
                                </div>
                                <div class="skills">
                                    <div class="right-content">
                                        <div>
                                            <h1 class="skills-heading">My Skills</h1>
                                        </div>
                                        <div class="skills-bar">
                                            <div class="bar">
                                                <div class="info">
                                                    <span>HTML</span>
                                                </div>
                                                <div class="progress-line"><span class="html"></span></div>
                                                <div class="bar">
                                                    <div class="info">
                                                        <span>CSS</span>
                                                    </div>
                                                    <div class="progress-line"><span class="css"></span></div>
                                                    <div class="bar">
                                                        <div class="info">
                                                            <span>BOOTSTRAP</span>
                                                        </div>
                                                        <div class="progress-line"><span class="bootstrap"></span></div>
                                                        <div class="bar">
                                                            <div class="info">
                                                                <span>JAVASCRIPT</span>
                                                            </div>
                                                            <div class="progress-line"><span class="javascript"></span></div>
                                                            <div class="bar">
                                                                <div class="info">
                                                                    <span>C Programming</span>
                                                                </div>
                                                                <div class="progress-line"><span class="c"></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="work-arrow-2">
                                            <p>
                                                <a href="#my-works">Check out my work <i class="fas fa-arrow-down"></i></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="my-works">
                        <div class="portfolio">
                            <div class="proj-heading">
                                <h1>Portfolio</h1>
                            </div>
                            <div class="portfolio-content container">
                                <div class="proj-1">
                                    <img src="https://i.postimg.cc/qM9TjGTG/Screenshot-80.png" />
                                        <div class="proj1-details">
                                            <i class="fab fa-html5"></i>
                                            <i class="fab fa-css3-alt"></i>
                                            <i class="fab fa-js"></i>
                                            <h2>Restaurant Website UI</h2>
                                            <p>Build Using HTML,CSS,JS</p>
                                            <button><a href="https://github.com/sanketbodke/Restaurant-Website" target="blank">View source <i
                                                class="fas fa-external-link-alt"></i></a>
                                            </button>
                                            <button><a href="https://fervent-lamarr-2bc6cf.netlify.app/" target="blank">Try it Live <i
                                                class="fas fa-external-link-alt"></i></a>
                                            </button>
                                        </div>
                                </div>

                                <div class="proj-2">
                                    <img src="https://i.postimg.cc/FR848bSm/Screenshot-76.png" />
                                        <div class="proj2-details">
                                            <i class="fab fa-html5"></i>
                                            <i class="fab fa-css3-alt"></i>
                                            <h2>Profile Card</h2>
                                            <p>Build Using HTML,CSS</p>
                                            <button><a href="https://github.com/sanketbodke/CodePen" target="blank">View source <i
                                                class="fas fa-external-link-alt"></i></a>
                                            </button>
                                            <button><a href="https://codepen.io/sanketbodke/pen/NWgKyZW" target="blank">Try it Live <i
                                                class="fas fa-external-link-alt"></i></a>
                                            </button>
                                        </div>

                                </div>
                                <div class="more-work">
                                    <p>
                                        More
                                    </p>
                                    <a href="https://codepen.io/sanketbodke" target="blank">CodePen</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="contact" id="contact-me">
                        <div class="container">
                            <div class="contact-content">
                                <h2>Contact Me</h2>
                                <p class="mail">
                                    Get in touch with me <i class="fas fa-arrow-right"></i> wertyui26@gmail.com
                                </p>
                                <p class="links">Or find me on:</p>
                                <a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><i class="fab fa-linkedin">
                                    Linkedin</i></a>
                                <a href="https://codepen.io/sanketbodke" target="blank"><i class="fab fa-codepen"> CodePen</i></a>
                                <a href="https://github.com/sanketbodke" target="blank"><i class="fab fa-github"></i> Github</a>
                                <a href="https://dev.to/sanketbodake" target="blank"><i class="fab fa-dev"></i> Dev Community</a>
                                <a href="https://twitter.com/Sanket46171296" target="blank"><i class="fab fa-twitter"> Twitter</i></a>
                                <a href="https://www.instagram.com/imsanketbodke/" target="blank"><i class="fab fa-instagram"></i> Instagram</a>
                            </div>
                        </div>
                    </div>
                </body>

            </html>
        )
    }
}