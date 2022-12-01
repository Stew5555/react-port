import React from 'react';
import '../../styles/style.css';
import Footer from '../Footer';
import Header from '../Header';
import Project from '../Project';

import img1 from '../../assets/quiz.png'
import img2 from '../../assets/JATE.png'
import img3 from '../../assets/superWiki.png'
import img4 from '../../assets/airDnD.png'

export default function portfolio() {
    return (
        <div>
            < Header />
            <div className='content'>
                <h2 id='h2'>Portfolio</h2>
                <div className='container' style={{ paddingTop: '10px' }}>
                    <div className='row'>
                        <Project
                            key="1"
                            img={img1}
                            imgAlt=" Quiz Game"
                            gitHubRepo="https://github.com/Stew5555/code-quiz"
                            gitHubAlt="See quiz repository on GitHub"
                            description="Quiz game made from html and javascript! Test your CS knowledge."
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}