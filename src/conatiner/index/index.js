import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <table class="table">
                <thead>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="S.No">1</td>
                        <td data-label="Name">Yeti login</td>
                        <td data-label="Staus"><Link to="/yetilogin"><button type="button" class="btn btn-primary">Button</button></Link></td>
                        
                    </tr>

                    <tr>
                        <td data-label="S.No">2</td>
                        <td data-label="Name">tuggable light bulb draggable</td>
                        <td data-label="Staus"><Link to="/lighttuggable"><button type="button" class="btn btn-primary">Button</button></Link></td>
                    </tr>
                    
                    <tr>
                        <td data-label="S.No">3</td>
                        <td data-label="Name">Electro Monster</td>
                        <td data-label="Staus"><Link to="/electromonster"><button type="button" class="btn btn-primary">Button</button></Link></td>
                    </tr>

                    <tr>
                        <td data-label="S.No">4</td>
                        <td data-label="Name">GSAP </td>
                        <td data-label="Staus"><Link to="/gsap"><button type="button" class="btn btn-primary">Button</button></Link></td>
                    </tr>

                    <tr>
                        <td data-label="S.No">5</td>
                        <td data-label="Name">Dragging image </td>
                        <td data-label="Staus"><Link to="/dragimage"><button type="button" class="btn btn-primary">Button</button></Link></td>
                    </tr>

                    <tr>
                        <td data-label="S.No">5</td>
                        <td data-label="Name">Photo flip </td>
                        <td data-label="Staus"><Link to="/photoflip"><button type="button" class="btn btn-primary">Button</button></Link></td>
                    </tr>

                    <tr>
                        <td data-label="S.No">6</td>
                        <td data-label="Name">Rasengan</td>
                        <td data-label="Staus"><Link to="/rasengan"><button type="button" class="btn btn-primary">Button</button></Link></td>
                    </tr>

                    <tr>
                        <td data-label="S.No">7</td>
                        <td data-label="Name">Error page</td>
                        <td data-label="Staus"><Link to="/error "><button type="button" class="btn btn-primary">Button</button></Link></td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}