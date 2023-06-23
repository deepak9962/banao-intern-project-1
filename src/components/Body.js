import React from "react";
import Card from "./Card";
import { IoMdPersonAdd } from 'react-icons/io'
import { MdOutlineLocationOn, MdEdit, MdInfoOutline } from 'react-icons/md'

const Body = () => {
    const card = [0, 1, 2];

    return (
        <>
            <div className="card text-bg-dark border-0">
                <img className="homeBannerImg" src={require('../assets/Rectangle 2.png')} alt='' />
                <div style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    backgroundColor: '#000',
                    opacity: '.5'
                }} ></div>
                <div className="container card-img-overlay d-flex flex-column justify-content-end">
                    <h5 className="card-title homeBannerTitle">Computer Engineering</h5>
                    <span className="card-text homeBannerText">142,765 Computer Engineers follow this</span>
                </div>
            </div>

            <div className="container d-mb-none d-lg-none d-xl-none">
                <div className="row pt-4 ps-3 pe-3 align-items-center">
                    <div className="col">
                        <span style={{ fontFamily: 'IBM Plex Sans', fontWeight: '700' }}>Posts(32)</span>
                    </div>
                    <div className="col-auto">
                        <select className="btn btn-white mb-2" style={{ paddingLeft: '12px', paddingRight: '12px', paddingTop: '6px', paddingBottom: '6px', fontFamily: 'IBM Plex Sans', fontSize: '14px', fontWeight: '500', backgroundColor: '#EDEEF0' }}><option defaultChecked>Filter: All</option></select>
                    </div>
                </div>
            </div>

            <div className="container mt-4 pe-0 navbar-expand-lg">
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <div className='row d-flex align-items-center '>
                    <ul className="nav nav-tabs col" id="myTab" role="tablist" style={{ fontSize: '16px' }}>
                        <li class1Name="nav-item ps-2 pe-2" role="presentation">
                            <button className="nav-link active ps-0 pe-0 d-none d-mb-inline d-lg-inline d-xl-inline" id="all-posts-tab" data-bs-toggle="tab" data-bs-target="#all-posts-tab-pane" type="button" role="tab" aria-controls="all-posts-tab-pane" aria-selected="true" style={{ fontFamily: 'IBM Plex Sans', color: '#000' }}>All Post(32)</button>
                        </li>
                        <li className="nav-item ps-2 pe-2" role="presentation">
                            <button className="nav-link ps-0 pe-0 d-none d-mb-inline d-lg-inline d-xl-inline" id="article-tab" data-bs-toggle="tab" data-bs-target="#article-tab-pane" type="button" role="tab" aria-controls="article-tab-pane" aria-selected="false" style={{ fontFamily: 'IBM Plex Sans', color: '#000' }}>Article</button>
                        </li>
                        <li className="nav-item ps-2 pe-2" role="presentation">
                            <button className="nav-link ps-0 pe-0 d-none d-mb-inline d-lg-inline d-xl-inline" id="event-tab" data-bs-toggle="tab" data-bs-target="#event-tab-pane" type="button" role="tab" aria-controls="event-tab-pane" aria-selected="false" style={{ fontFamily: 'IBM Plex Sans', color: '#000' }}>Event</button>
                        </li>
                        <li className="nav-item ps-2 pe-2" role="presentation">
                            <button className="nav-link ps-0 pe-0 d-none d-mb-inline d-lg-inline d-xl-inline" id="education-tab" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="false" style={{ fontFamily: 'IBM Plex Sans', color: '#000' }}>Education</button>
                        </li>
                        <li className="nav-item ps-2 pe-2" role="presentation">
                            <button className="nav-link ps-0 pe-0 d-none d-mb-inline d-lg-inline d-xl-inline" id="job-tab" data-bs-toggle="tab" data-bs-target="#job-tab-pane" type="button" role="tab" aria-controls="job-tab-pane" aria-selected="false" style={{ fontFamily: 'IBM Plex Sans', color: '#000' }}>Education</button>
                        </li>
                    </ul>

                    <div className='col-auto d-none d-mb-inline d-lg-inline d-xl-inline'>
                        <select className="btn btn-white mb-2" style={{ paddingLeft: '12px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px', fontFamily: 'IBM Plex Sans', fontSize: '15px', fontWeight: '500', backgroundColor: '#EDEEF0' }}><option defaultChecked>Write a Post</option></select>
                        <button className="btn btn-primary ms-3 mb-2" style={{ fontFamily: 'IBM Plex Sans', fontSize: '15', fontWeight: '500' }} > <IoMdPersonAdd className="mb-1"></IoMdPersonAdd> Join Group</button>
                    </div>
                    {/* </div> */}
                </div>
                <div className="row d-flex">
                    <div className="tab-content col p-0 m-0" id="myTabContent">
                        <div className="tab-pane fade show active p-0 m-0" id="all-posts-tab-pane" role="tabpanel" aria-labelledby="all-posts-tab" tabindex="0"> <Card />
                            <Card />
                            <Card />
                            <Card /></div>
                        <div class="tab-pane fade" id="article-tab-pane" role="tabpanel" aria-labelledby="article-tab" tabindex="0"> <Card />
                            <Card />
                            <Card />
                            <Card /></div>
                        <div class="tab-pane fade" id="event-tab-pane" role="tabpanel" aria-labelledby="event-tab" tabindex="0"> <Card />
                            <Card />
                            <Card />
                            <Card /></div>
                        <div class="tab-pane fade" id="education-tab-pane" role="tabpanel" aria-labelledby="education-tab" tabindex="0"> <Card />
                            <Card />
                            <Card />
                            <Card /></div>
                        <div class="tab-pane fade" id="job-tab-pane" role="tabpanel" aria-labelledby="job-tab" tabindex="0"> <Card />
                            <Card />
                            <Card />
                            <Card /></div>
                    </div>

                    <div className="col-auto pt-1 d-none d-mb-inline d-lg-inline d-xl-inline">
                        <div className="row">
                            <div className="d-flex align-items-center justify-content-start" style={{ borderBottom: '1px solid #000' }}>
                                <MdOutlineLocationOn></MdOutlineLocationOn>
                                <form className="form-inline">
                                    <input className="form-control border-0" type="search" placeholder='Noida, India' aria-label="Search" style={{ background: 'none', width: '150px', height: '26px', fontWeight: '500' }} />
                                </form>
                                <MdEdit></MdEdit>
                            </div>
                        </div>
                        <div className='row pt-5'>
                            <span className="small col-1" style={{ fontFamily: 'IBM Plex Sans', color: '#777' }}><MdInfoOutline></MdInfoOutline></span>
                            <span className="small col-auto" style={{ fontFamily: 'IBM Plex Sans', color: '#777' }}>Your location will help us <br /> serve better and extend a <br /> personalised experience.</span>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className="slider"><div className="indicator"></div></div> 
            {/* <div className="container">
                <div class="tabs">

                    <input type="radio" id="tab1" name="tab-control" checked />
                    <input type="radio" id="tab2" name="tab-control" />
                    <input type="radio" id="tab3" name="tab-control" />
                    <input type="radio" id="tab4" name="tab-control" />
                    <input type="radio" id="tab5" name="tab-control" />
                    <ul>
                        <li title="All Posts"><label for="tab1" role="button"><span>All Posts(32)</span></label></li>
                        <li title="Article"><label for="tab2" role="button"><span>Article</span></label></li>
                        <li title="Event"><label for="tab3" role="button"><span>Event</span></label></li>
                        <li title="Education"><label for="tab4" role="button"><span>Education</span></label></li>
                        <li title="Job"><label for="tab5" role="button"><span>Job</span></label></li>
                    </ul>

                    <div class="slider"><div class="indicator"></div></div>
                    <div class="content">
                        <section>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </section>
                        <section>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </section>
                        <section>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </section>
                        <section>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </section>
                        <section>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </section>
                    </div>
                </div>

            </div> */}
        </>
    )
}

export default Body;