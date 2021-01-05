import React from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';

const MainPage = () => {
    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course> </Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                            <div className="col-md-3">
                                <Course></Course>
                            </div>
                        </div>
                   </div>
                   <div className="col-md-2">
                       <Cart></Cart>
                   </div>
               </div>
           </div>

        </div>
    );
};

export default MainPage;