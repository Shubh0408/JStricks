import React from "react";
import "./index.css";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <>
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

                </tbody>
            </table>
        </>

    )
}