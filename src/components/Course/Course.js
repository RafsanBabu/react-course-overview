import React from 'react';
import course_images from '../../images/course/course (1).jpg';

const Course = (props) => {

    return (
        <div>
            <div>
                <div className="card">
                <img src={props.course.url} className="card-img-top"></img>
                <div className="card-body">
                <h5 className="card-title">{props.course.title}</h5>
                <p className="card-text">{props.course.about}</p>
                <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-primary" onClick={()=>props.handleCourseButton(props.course)}>Enroll now</a>
                <p>$ {props.course.price}</p>
                </div>
                
                </div>
                </div>
            </div>
        </div>
    );
};

export default Course;