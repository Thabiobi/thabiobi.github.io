import React, { Component } from 'react';
import ParticlesBg from "particles-bg";

/**
 * 
 * If you want to remove the animation from header, you just need to remove de ParticlesBg component. 
 * If you want to change the type of animation, check this documentation alll types availables: https://github.com/lindelof/particles-bg
 */

export default function Header(props) {
    
    if (props.data) {
        var project = props.data.project;
        var github = props.data.github;
        var name = props.data.name;
        var description = props.data.description;
        var city = props.data.address.city;
        var networks = props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }

    return (
        <header id="home">
            <ParticlesBg type="thick" bg={true} />
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                </ul>
            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">{name}</h1>
                    <h3>{description}.</h3>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
        </header>
    );
}
