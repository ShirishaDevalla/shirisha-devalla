import React from 'react'

const Skills = () => {
  return (
    <div className='row '>
        <div className='col-md-12'>
        <span className='d-flex flex-wrap justify-content-start align-items-center  p-5' style={{fontSize:"30px", color:"white"}}>Skills:</span>
            
            <div className='d-flex flex-wrap justify-content-center align-items-center'>
            
                <div className='col-lg-3 col-md-5 col-sm-7 col-10 cardx' >
                <div className=' p-2'>
                        <div className='d-flex flex-wrap  justify-content-start align-items-center'>
                           <div >
                            <span className='' style={{fontSize:"15px", color:"white"}}>Forntend</span>
                            <div style={{ margin: '20px 0px' }}>
                                <span className='html'>HTML5</span>
                            </div>
                            <div style={{ margin: '20px 0px' }}>
                                <span className='html'>CSS</span>
                            </div>
                            <div style={{ margin: '20px 0px' }}>
                                <span className='html'>Bootstrap</span>
                            </div>
                            <div style={{ margin: '20px 0px' }}>
                                <span className='html'>Javascrpt</span>
                            </div>
                            <div style={{ margin: '20px 0px' }}>
                                <span className='html'>React</span>
                            </div>
                           </div>

                        </div>

                    </div>
                   
                </div>
                <div className='col-lg-3 col-md-5 col-sm-7 col-10 cardx'>
                <div className=' p-2'>
                        <div className='d-flex flex-wrap  justify-content-start align-items-center'>
                            <div>
                                <span style={{fontSize:"15px", color:"white"}}>Backend</span>
                              <div style={{ margin: '20px 0px' }}>
                                <span className='html'>SQL</span>
                              </div>
                            </div>

                        </div>

                    </div>
                    
                </div>
                <div className='col-lg-3 col-md-5 col-sm-7 col-10 cardx'>
                    <div className=' p-2'>
                        <div className='d-flex flex-wrap  justify-content-start align-items-center'>
                            <div>
                                <span style={{fontSize:"15px", color:"white"}}>Others</span>
                              <div style={{ margin: '20px 0px' }}>
                                <span className='html'>git</span>
                              </div>
                            </div>

                        </div>

                    </div>
                    
                </div>
                



            </div>

        </div>

    </div>
  )
}

export default Skills