import React, { useState, useEffect } from 'react';
import "./style.css";
function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);}
  
  

    return (
        <div className="body">
        <div className="header">
            <h5 id="titre2">AirMax Sound</h5>
           <ul>
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#favourit">Favourit</a>
                <a href="#contact">SUPPORT</a>
           </ul>
           <button id="theme-toggle" onClick={toggleTheme}> {isDarkMode ? 'Light' : 'Dark'}</button>
        </div>
        <div class="container1" id="home">
            <div className="content1">
                <h1>WELCOME TO MY STORE ECOMERCE</h1>
                <h3>Découvrez une expérience sonore incomparable.🎧✨</h3>
                <button class="b1">Shop Now</button>
            </div>
            <img id="img1" src="./image/cask1-removebg-preview.png" alt=""/>
        </div>
        <div className="container3" id="about">
            <div className="c1">
                <h5>MORE ABOUT US</h5>
                <p>
                    Experience premium Apple sound with the AirPods Max, featuring wireless freedom, advanced noise cancellation, and a sleek, sophisticated design. Enjoy high-fidelity audio with comfortable memory foam earcups, delivering an immersive listening experience for all-day comfort.
                </p>
            </div>
            <img src="./image/apple-removebg-preview.png" alt=""/>
        </div>
        <div class="container2" id="favourit">
            <div class="content2">
                <div class="content4">
                    <div class="cart">
                        <img src="./image/cask1-removebg-preview.png" alt=""/>
                        <h5>APPLE AirPods Max Wireless Bluetooth Noise-Sky black</h5>
                        <h4>450$</h4>
                        <button>Shop Now</button>
                    </div>
                    <div class="cart">
                        <img src="./image/cask2-removebg-preview.png" alt=""/>
                        <h5>APPLE AirPods Max Wireless Bluetooth Noise-Sky Gray</h5>
                        <h4>450$</h4>
                        <button>Shop Now</button>
                    </div>
                    <div class="cart">
                        <img src="./image/cask3-removebg-preview.png" alt=""/>
                        <h5>Apple AirPods Max Wireless Bluetooth Noise-Sky Blue</h5>
                        <h4>450$</h4>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div class="content3">
                    <div class="cart">
                        <img src="./image/cask4-removebg-preview.png" alt=""/>
                        <h5>Apple AirPods Max Wireless Bluetooth Noise-Sky Blue</h5>
                        <h4>450$</h4>
                        <button>Shop Now</button>
                 </div> 
                 <div class="cart">
                    <img src="./image/cask5-removebg-preview.png" alt=""/>
                    <h5>Apple AirPods Max Wireless Bluetooth Noise-Sky Red</h5>
                    <h4>450$</h4>
                    <button>Shop Now</button>
                </div>    
                <div class="cart">
                    <img src="./image/cask6-removebg-preview.png" alt=""/>
                    <h5>Apple AirPods Max Wireless Bluetooth Noise-Sky Purple</h5>
                    <h4>450$</h4>
                    <button>Shop Now</button>
                
                </div>
                </div>
            </div>
        </div>
        
        <div className="content11">
            <div className="C4">
                <h2>100K 🎧</h2>
                <h4>Casques vendus dans le monde entier</h4>
            </div>
            <div className="C4">
                <h2>200K+ 😊</h2>
                <h4>Clients satisfaits de leur expérience sonore</h4>
            </div>
            <div className="C4">
                <h2>265+ 🌍</h2>
                <h4>Pays où nos produits sont distribués</h4>
            </div>
            <div className="C4">
                <h2>120K 📦</h2>
                <h4>Commandes expédiées cette année</h4>
            </div>
        </div>        
        <h3 id="titre">AirMax Sound</h3>
        <div className="container5" id="contact">
            <ul>
                <li className="titre">Products</li>
                <li><a href="">Headphones</a></li>
                <li><a href="">Earphones</a></li>
                <li><a href="">Earbuds</a></li>
                <li><a href="">Accesories</a></li>
            </ul>
            <ul>
                <li className="titre">Support</li>
                <li><a href="">Product Help</a></li>
                <li><a href="">Register</a></li>
                <li><a href="">Updates</a></li>
                <li><a href="">Provides</a></li>
            </ul>
            <div>
                <input type="text" placeholder="Gmail"/>
                <button className="b1">Subscribe</button>
            </div>
        </div>
        
    </div>
    );
}
export default App;
