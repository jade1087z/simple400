import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import firebase from "./firebase.js"; // 파이어베이스에 연동해 사용

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

import { PostList } from "./components/post/PostList.jsx";
import PostDetail from "./components/post/PostDetail.jsx";
import PostWrite from "./components/post/PostWrite.jsx";
import PostModify from "./components/post/PostModify.jsx";
import Login from "./components/user/Login.jsx";

const App = () => {
    useEffect(() => {
        firebase.auth().onAuthStateChanged((userInfo) => {
            console.log("userinfo", userInfo);
        });
    }, []);

    useEffect(() => {
        // firebase.auth().signOut();
    });

    return (
        <div>
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<PostList />} />
                    <Route path="/write" element={<PostWrite />} />
                    <Route path="/detail/:postNum" element={<PostDetail />} />
                    <Route path="/modify/:postNum" element={<PostModify />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Main>
            <Footer />
        </div>
    );
};

export default App;
