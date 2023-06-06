import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./conatiner/index";
import YetiLogin from "./conatiner/YetiLogin/yetilogin";
import LightTuggable from "./conatiner/LightTuggable/lighttuggable";
import Electromonster from "./conatiner/Electromonster/electromonster";
import GSAP from "./conatiner/GSAP/gsap";

export default function AppRoute () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Index />} path="/" />
                <Route element={<YetiLogin />} path="/yetilogin" />
                <Route element={<LightTuggable />} path="/lighttuggable" />
                <Route element={<Electromonster />} path="/electromonster" />
                <Route element={<GSAP />} path="/gsap" />
            </Routes>
        </BrowserRouter>
    )
}