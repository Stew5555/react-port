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
                        <Project
                            key="2"
                            img={img2}
                            imgAlt="JATE"
                            gitHubRepo="https://github.com/Stew5555/PWA-JATE"
                            gitHubAlt="See JATE repository on GitHub"
                            description="JUST ANOTHER TEXT EDITOR."
                        />
                        <Project
                            key="3"
                            img={img3}
                            imgAlt=" SuperWiki"
                            project="https://stew5555.github.io/super-hero-wiki"
                            projectAlt="Search super hero!"
                            gitHubRepo="https://github.com/Stew5555/super-hero-wiki"
                            gitHubAlt="See SuperWiki repository on GitHub"
                            description="Lets you search superHeros on two different apis."
                        />
                        <Project
                            key="4"
                            img={img4}
                            project="https://peaceful-sea-97652.herokuapp.com/"
                            projectAlt="DnD meetups!"
                            gitHubRepo="https://github.com/nbwong1/airDND"
                            gitHubAlt="See airDnD repository on GitHub"
                            description="Lets you create DnD character, and post meet ups."
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}