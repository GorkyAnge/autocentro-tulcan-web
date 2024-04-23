import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Team from './Team';
import { Helmet } from 'react-helmet';

const Home = () => {
    return ( 
        <>  
            <Helmet>
                <title>AutoCentro Tulcán</title>
            </Helmet>
            <Header/>
            <Hero/> 
            <Team/>
            
            <Footer/>
        </>
     );
}
 
export default Home;