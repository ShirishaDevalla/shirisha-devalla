import { Button } from 'bootstrap'
import React from 'react'

const Meet = () => {
  return (
    <div>
        <div className='row'>
            <div className='d-flex flext-wrap justify-content-center align-items-center'>
                <div className='col-md-4 '>
                    <div className='m-3' style={{fontSize:"55PX", fontWeight:"500",fontFamily:"'Space Grotesk', sans-serif", color:"white"}}>
                        Let's Connect
                        
                    </div>
                    <div className='m-2' style={{ fontFamily:"'Space Grotesk', sans-serif", color:"white"}}>
                    You can feel free to reach out via email.I'm open to discuss opportunites,collaboration, or any tech-stack related enquires
                    </div>
                    <div className='d-flex flext-wrap justify-content-center align-items-center m-3'>
                        <a href="mailto:sirishadevalla225@225.com" class="email-button">E-Mail</a>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Meet