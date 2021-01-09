import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className='home__image' src = "https://previews.123rf.com/images/rclassenlayouts/rclassenlayouts1709/rclassenlayouts170900036/86347723-cologne-germany-september-2017-amazon-logo-on-black-background-amazon-is-an-american-electronic-e-co.jpg" alt = "" />
            

            <div className="home__row">
            <Product 
                    id = "1"
                    title = "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price = {29.99}
                    image = "https://slooowdown.files.wordpress.com/2014/04/lean_startup.jpg"
                    rating ={5}
                />
            <Product 
                    id = "2"
                    title = "Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black"
                    price = {289.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
                    rating ={5}/>
            </div>
            
            <div className="home__row">
            <Product 
                    id = "3"
                    title = "Microsoft Surface Laptop Go - 12.4Touchscreen - Intel Core i5 - 8GB Memory - 128GB SSD - Platinum"
                    price = {697.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61OvV27-44L._AC_SL1500_.jpg"
                    rating ={5}/>
            <Product 
                    id = "4"
                    title = "Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020, 11.6 HD Touch, 4GB LPDDR4, 32GB eMMC, Gigabit Wi-Fi 5, Bluetooth 5.0, Google Chrome,..."
                    price = {269.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SL1500_.jpg"
                    rating ={5}/>
            <Product 
                    id = "5"
                    title = "Samsung UN65KS9000 65-Inch 4K Ultra HD Smart LED TV (2016 Model)"
                    price = {899.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/91FOClQ63EL._AC_SL1500_.jpg"
                    rating ={5}/>
            </div>
            
            <div className="home__row">
            <Product 
                    id = "6"
                    title = "Sony A8H 65 Inch TV: BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility - 2020 Model (XBR65A8H) with Home Theater Surround Sound Speaker System"
                    price = {1299.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61pWl8sfJ1L._AC_SL1001_.jpg"
                    rating ={5} />
            </div>
            </div>
        </div>
    )
}

export default Home
