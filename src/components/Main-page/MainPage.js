import React from 'react';
import { useState } from 'react';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import fakeData from '../../fakeData/fakeData'

const MainPage = () => {
    var first10 = fakeData.slice(0,10);
    const [courses, setCourses] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleCourseButton = (course)=>{
        const newCourse = [...cart,course];
        setCart(newCourse);
    }
    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="col-md-9">
                        <div className="row">
                            {
                             courses.map(course => <div className="col-md-4"><Course handleCourseButton={handleCourseButton}
                             course={course}></Course></div>)
                           }
                           
                        </div>
                   </div>
                   <div className="col-md-3">
                       <Cart cart={cart}></Cart>
                   </div>
               </div>
           </div>

        </div>
    );
};

export default MainPage;