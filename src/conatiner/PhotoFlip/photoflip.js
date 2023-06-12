import React from "react";
import "./photoflip.css";

export default function PhotoFlip() {
    return (
        <body id="photoflipbody">
            <div
                className="flip"
                style={{
                    perspective: '1000px',
                }}
            >
                <div
                    className="front"
                    style={{
                        backgroundImage: 'url(https://iili.io/H0f8Rj4.jpg)',
                    }}
                >
                    <h1 className="text-shadow">Hi ❤️</h1>
                </div>
                <div className="back">
                    <p>I try to pretend I’m just a friend when in all I dream about is you.</p>
                </div>
            </div>
            <div
                className="flip"
                style={{
                    perspective: '1000px',
                }}
            >
                <div
                    className="front"
                    style={{
                        backgroundImage: 'url(https://iili.io/H0fr6en.jpg)',
                    }}
                >
                    <h1 className="text-shadow">Hello 😊</h1>
                </div>
                <div className="back">
                    <p>Why am I so afraid to lose you when you are not even mine.</p>
                </div>
            </div>
            <div
                className="flip"
                style={{
                    perspective: '1000px',
                }}
            >
                <div
                    className="front"
                    style={{
                        backgroundImage: 'url(https://iili.io/H0qIrV1.jpg)',
                    }}
                >
                    <h1 className="text-shadow">Umm 😳</h1>
                </div>
                <div className="back">
                    <p>
                        I’m not sure of anything but I’m certain that I loved you with a depth that stars cannot understand.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div
                className="flip flip-vertical"
                style={{
                    perspective: '1000px',
                }}
            >
                <div
                    className="front"
                    style={{
                        backgroundImage: 'url(https://iili.io/H0qHDtR.jpg)',
                    }}
                >
                    <h1 className="text-shadow">I </h1>
                </div>
                <div className="back">
                    <p>I just need you and some sunsets.</p>
                </div>
            </div>
            <div
                className="flip flip-vertical"
                style={{
                    perspective: '1000px',
                }}
            >
                <div
                    className="front"
                    style={{
                        backgroundImage: 'url(https://iili.io/H0fZWNI.jpg)',
                    }}
                >
                    <h1 className="text-shadow">Love ❤️</h1>
                </div>
                <div className="back">
                    <p>I always hope you’re looking at me while I’m looking away.</p>
                </div>
            </div>
            <div
                className="flip flip-vertical"
                style={{
                    perspective: '1000px',
                }}
            >
                <div
                    className="front"
                    style={{
                        backgroundImage: 'url(https://iili.io/H0qAOSs.jpg)',
                    }}
                >
                    <h1 className="text-shadow">You</h1>
                </div>
                <div className="back">
                    <p>I dream about you in colors that don’t exist.</p>
                </div>
            </div>
        </body>
    )
}
