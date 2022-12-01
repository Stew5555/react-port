import React from 'react';
import '../../styles/style.css';
import Header from '../Header';
import Footer from '../Footer';
import portrait from '../../assets/me.jpeg';

export default function About() {
    return (
        <div>
                  <Header />
      <div className="content">
        <h2 id="h2">About me</h2>
        <img className="image" ></img>
        <div className="bio">
          <p>I am passionate about strengthening my skills.</p>
          <p>Currently Learing how to code and make websites at UCSD bottcamp!</p>
          <p>I plan to use my coding skills to make amazing digital products that are user-friendly to all.</p>
          <p>I live in the beautiful san Diego, where its always sunny with nice weather, and pretty beaches .</p>
          <p>If you have any questions Email me!</p>
        </div>
      </div>
      <Footer />
        </div>
    )
}