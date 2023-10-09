import React from 'react';
import CV from '../../assets/MyCv_Eslam_Shoir.pdf';


function CTA() {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Dawnload</a>
            <a href='#contact' className='btn btn-primary'>let's Talk</a>
        </div>
    )
}

export default CTA;