import React from "react";
import "./home.css";
import Header from "../../header";
import Sidebar from "../../../sidebar/Sidebar";
import Posts from "../../../posts/Posts";

export default function Homepage() {
    return (

        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>






    )
}