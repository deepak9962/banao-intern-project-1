import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { BsShareFill } from 'react-icons/bs';
import SVG from '../assets/icon/action/visibility_24px_outlined.svg'

const Card = () => {
    return (
        <div className='container ps-0'>
            <div className='col mt-3'>
                <div className='card text-black mb-3 shadow-sm'>
                    <img className='card-img-top' src={require('../assets/Rectangle_5-2.png')} alt='' />
                    <div className='card-body'>
                        <h6 className='card-text mt-2' style={{ fontFamily: 'IBM Plex Sans', fontWeight: '500' }}>✍️ Article</h6>
                        <div className='row mt-3'>
                            <div className='col col-sm col-mb'>
                                <h5 className='card-title'>What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            </div>
                            <div className='col-auto'>
                                <div className='float-end'><FaEllipsisH></FaEllipsisH></div>
                            </div>
                        </div>
                        <p className='card-text'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className='row'>
                            <div className='col-auto'>
                                <img className='' src={require('../assets/Rectangle 3-4.png')} alt='' />
                            </div>
                            <div className='col d-flex align-items-center' style={{  }}>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-sm-auto ps-0'>
                                        <span className='fs-6' style={{ fontFamily: 'IBM Plex Sans', fontWeight: '600' }}>Sarthak Kamra</span>
                                    </div>
                                    <div className='col-auto col-sm-auto p-0'>
                                        <div className='col me-4'>
                                            <img className='d-none d-sm-inline m-1 profile-picture' src={SVG} alt='' />
                                            <span className='card-text p-0 profile-view'>1.4k views</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto d-flex align-items-center justify-content-center '>
                                <button className='btn text-center' style={{ backgroundColor: 'rgba(237, 238, 240, 1)' }}>
                                    <BsShareFill className='mb-1'></BsShareFill>
                                    <span className='card-text ms-2 d-sm-none btn-text-share'>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;