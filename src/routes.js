import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./conatiner/index";
import YetiLogin from "./conatiner/YetiLogin/yetilogin";
import LightTuggable from "./conatiner/LightTuggable/lighttuggable";
import Electromonster from "./conatiner/Electromonster/electromonster";
import GSAP from "./conatiner/GSAP/gsap";
import DragImage from "./conatiner/DragImage/dragimage";
import PhotoFlip from "./conatiner/PhotoFlip/photoflip";
import Rasengan from "./conatiner/Rasengan/rasengan";
import Test from "./conatiner/test/test";

export default function AppRoute () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Index />} path="/" />
                <Route element={<YetiLogin />} path="/yetilogin" />
                <Route element={<LightTuggable />} path="/lighttuggable" />
                <Route element={<Electromonster />} path="/electromonster" />
                <Route element={<GSAP />} path="/gsap" />
                <Route element={<DragImage />} path="/dragimage" />
                <Route element={<PhotoFlip />} path="/photoflip" />
                <Route element={<Rasengan />} path="/rasengan" />
                <Route element={<Test />} path="/test" />
            </Routes>
        </BrowserRouter>
    )
}