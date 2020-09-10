import React from 'react'
import 'css/Home.css'
import Product from "components/Product"
function Home() {
    return (
        <div className="home_root">
            <div className="home_container">
                <img 
                    alt="amazon landing"
                    className="home_coverImage"
                    src={ process.env.PUBLIC_URL   +'/images/cover.jpg'}
                />
                {/* products */}
                <div className="home_row">
                    <Product 
                        id="1"
                        description="Echo Dot (3rd Gen) Plum with Echo Auto" 
                        price="69.99" 
                        image={ process.env.PUBLIC_URL   +'/images/products/alexa.jpg'}  
                        rating={0}   
                    />
                    <Product 
                        id="2"
                        description="Twelve South BookArc for MacBook | Space-Saving Vertical Desktop Stand for Apple notebooks (Space Grey) Newest Version" 
                        price="44.21" 
                        image={ process.env.PUBLIC_URL   +'/images/products/stand.jpg'}  
                        rating={3}   
                    />
                 </div>
                <div className="home_row">
                    <Product 
                        id="3"
                        description="AmazonBasics Lightning to USB Cable - MFi Certified Apple iPhone Charger, White, 6-Foot" 
                        price="6.26" 
                        image={ process.env.PUBLIC_URL   +'/images/products/cable.jpg'}  
                        rating={5}   
                    />
                    <Product 
                        id="4"
                        description="Easy-Going Stretch Oversized Sofa Slipcover 1-Piece Couch Sofa Cover Furniture Protector Soft " 
                        price="41.99" 
                        image={ process.env.PUBLIC_URL   +'/images/products/sofa.jpg'}  
                        rating={2}   
                    />
                    <Product 
                        id="5"
                        description="Tobfit 4 Pack Compatible with Apple Watch Band 38mm 42mm 40mm 44mm (Black/Gray/Wine Red/Pink, 38mm/40mm M/L)" 
                        price="8.09" 
                        image={ process.env.PUBLIC_URL   +'/images/products/watch.jpg'}  
                        rating={1}   
                    />
                </div>
                <div className="home_row">
                    <Product 
                        id="6"
                        description="Simple Modern 17oz Bolt Sports Water Bottle - Stainless Steel - Double Wall Vacuum Insulated - Leak Proof Bottle Ombre: Havana" 
                        price="11.26" 
                        image={ process.env.PUBLIC_URL   +'/images/products/bottle.jpg'}  
                        rating={0}   
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
