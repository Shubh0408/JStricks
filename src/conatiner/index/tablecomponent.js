import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLink } from 'react-icons/ai';


export const Tablebody = ({sr,title,url}) => {
    return(
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                     <tr>
                        <th scope="row">{sr}</th>
                        <td>{title}</td>
                        <td><Link to={url}><button type="button" class="btn btn-primary"><AiOutlineLink /></button></Link></td>
                    </tr>
        </>
    )
}