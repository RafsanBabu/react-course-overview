import React from 'react';
import course_images from '../../images/course/course (1).jpg';

const Course = () => {

    return (
        <div>
            <div>
                <div className="card">
                <img src={course_images} className="card-img-top"></img>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-primary">Enroll now</a>
                <p>$20</p>
                </div>
                
                </div>
                </div>
            </div>
        </div>
    );
};

export default Course;