import React from 'react'
import { Link } from 'react-router-dom'

const HomeGallery = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 px-lg-1">
                    <img className='img-fluid overflow-hidden'src='https://parablar.sirv.com/Images/ITKL/resized/PlaceholderGallery-big.jpg' alt=""/>
                </div>
                <div className="col-lg-4 col-md-12 d-flex flex-lg-column flex-md-row flex-sm-column">
                    <div className="mb-lg-auto pr-md-1 pt-md-2 pt-lg-0 pr-lg-0 d-none d-md-block">
                        <Link to='#'>
                            <img className='img-fluid overflow-hidden'src="https://parablar.sirv.com/Images/ITKL/resized/PlaceholderGallery-small.jpg" alt=""/>
                        </Link>                        
                    </div>
                    <div className="mt-lg-auto pl-md-1 pt-md-2 pt-lg-0 pl-lg-0 d-none d-md-block">
                        <Link to='#'>
                            <img className='img-fluid overflow-hidden'src="https://parablar.sirv.com/Images/ITKL/resized/PlaceholderGallery-small.jpg" alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeGallery