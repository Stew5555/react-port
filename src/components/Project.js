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
                
            </div>
                 <p className="space-below">{props.description}
                 </p>
        </div>
    )
}