import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";


const cards = [
    {
        image: "https://picsum.photos/id/11/200/300",
        title: "Lago",
        description: "Un lago con bonita vista",
    },
    {
        image: "https://picsum.photos/id/12/200/300",
        title: "Playa",
        description: "Una bonita tarde en la playa",
    },
    {
        image: "https://picsum.photos/id/15/200/300",
        title: "Cascada",
        description: "Majestuosa cascada en el bosque",
    },
    {
        image: "https://picsum.photos/id/20/200/300",
        title: "Zona de estudio",
        description: "Una ordenada zona de estudio",
    },
];

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Jumbotron/>
            <div className="container">
                <div className="row">
                    {cards.map((card, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <Card cards={card}/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
      
    );
};

export default Home;

