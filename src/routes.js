import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./conatiner/index";
import YetiLogin from "./conatiner/YetiLogin/yetilogin";
import LightTuggable from "./conatiner/LightTuggable/lighttuggable";

export default function AppRoute () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Index />} path="/" />
                <Route element={<YetiLogin />} path="/yetilogin" />
                <Route element={<LightTuggable />} path="/lighttuggable" />
            </Routes>
        </BrowserRouter>
    )
}