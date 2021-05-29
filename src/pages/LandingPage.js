import React, { Component } from "react";
import Header from "parts/Header";
import Nav from "parts/Nav";
import Content from "parts/Content"
import Footer from "parts/Footer"

class LandingPage extends Component {
    render() {
        return(
            <>
                <Nav />
                <Header></Header>
                <Content></Content>
                <Footer />
            </>
        )
    }

}

export default LandingPage;