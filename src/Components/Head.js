import React from 'react'
import { Helmet } from "react-helmet";

const Head = () => {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Andry Developer</title>
                <meta name="description" content="Full stack developer Andry Martinez with more learning in the enviroment development" />
                <meta name="keywords" content="developer,work,jobs,HTML,CSS,JavaScript,React,React Native,Nodejs" />
                <meta name="author" content="Andry Martínez" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
        </div>)
};

export default Head;