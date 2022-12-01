import React from 'react';
import '../styles/style.css';
import gitlogo from '../assets/GitHub-Mark-32px.png';

export default function Project(props) {
    return (
        <div className='col-md-6'>
                        <a href={props.project} alt={props.projectAlt}><img className="one-project image" src={props.img} alt={props.imgAlt}></img></a>
             <div className="one-project">
                <p className="space-above"><a className="project-link" href={props.project} alt={props.projectAlt}><b>{props.projectTitle}</b></a></p>
            </div>
            <div>
            <p className="space-above"><a href={props.gitHubRepo} title={props.gitHubAlt}><img className="git" src={gitlogo} alt="Link to GitHub account" width="30"></img></a></p>
            </div>
                 <p className="space-below">{props.description}
                 </p>
        </div>
    )
}