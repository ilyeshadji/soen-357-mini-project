import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react'
import AccessRoute from "./components/AccessRoute";
import styled from "styled-components";
import Home from "./screens/Home";
import GlobalStyles from "./GlobalStyle";

function App() {


    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Header/>

            <AccessRoute>
                <RoutesWrapper>
                    <Route exact path="/" element={<Home/>}/>
                </RoutesWrapper>
            </AccessRoute>
        </BrowserRouter>
    );
}

const RoutesWrapper = styled(Routes)`
  display: flex;
  flex: 1;
`;

export default App;
