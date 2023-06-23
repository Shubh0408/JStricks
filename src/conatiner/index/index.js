import React from "react";
import "./index.css";
import Tablecomponent, { Tablebody } from "./tablecomponent";

export default function Index() {
   
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        {/* <th scope="col">Description</th> */}
                        <th scope="col">Button</th>
                    </tr>
                </thead>
                <tbody>
                    <Tablebody sr="1" title="Yeti Login" url="/yetilogin" />
                    <Tablebody sr="2" title="Tuggable light bulb" url="/lighttuggable" />
                    <Tablebody sr="3" title="Electro Monster" url="/electromonster" />
                    <Tablebody sr="4" title="GSAP" url="/gsap" />
                    <Tablebody sr="5" title="Dragging image" url="/dragimage" />
                    <Tablebody sr="6" title="Photo flip" url="/photoflip" />
                    <Tablebody sr="7" title="Rasengan" url="/rasengan" />
                    <Tablebody sr="8" title="Error Page" url="/error" />
                    <Tablebody sr="9" title="portfolio" url="/portfolio" />
                    <Tablebody sr="10" title="Weather Forecast" url="/weather" />
                </tbody>
            </table>
        </>
    )
}

