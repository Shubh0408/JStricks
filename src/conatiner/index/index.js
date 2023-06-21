import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { AiOutlineLink } from 'react-icons/ai';

export default function Index() {
    return (
        <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Button</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Yeti Login</td>
                <td>Otto</td>
                <td><Link to="/yetilogin"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>tuggable light bulb draggable </td>
                <td>Thornton</td>
                <td><Link to="/lighttuggable"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Electro Monster </td>
                <td>the Bird</td>
                <td><Link to="/electromonster"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>GSAP</td>
                <td>the Bird</td>
                <td><Link to="/gsap"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>Dragging image</td>
                <td>the Bird</td>
                <td><Link to="/dragimage"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
                <tr>
                <th scope="row">6</th>
                <td>Photo flip</td>
                <td>the Bird</td>
                <td><Link to="/photoflip"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <td>Rasengan</td>
                <td>the Bird</td>
                <td><Link to="/rasengan"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
                <tr>
                <th scope="row">8</th>
                <td>Error Page</td>
                <td>the Bird</td>
                <td><Link to="/error"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
                <tr>
                <th scope="row">9</th>
                <td>portfolio</td>
                <td>the Bird</td>
                <td><Link to="/portfolio"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
                <tr>
                <th scope="row">10</th>
                <td>Weather Forecast</td>
                <td>the Bird</td>
                <td><Link to="/weather"><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                </tr>
            </tbody>
            </table>
        </>
        
        )
    }

