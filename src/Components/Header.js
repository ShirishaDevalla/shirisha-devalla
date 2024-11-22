import React, { useEffect, useState } from 'react'
import Shirisha from '../image/shirisha.avif'
import { motion } from 'framer-motion'

const Header = () => {
  const [imageVisible, setImageVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setImageVisible(true)

    }, 5000)
  }, [])


  return (
    <div>
      <div className="row ">
        <div className="col-md-12">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="">
              <motion.div className='' style={{fontFamily:"Space Grotesk', sans-serif", mt:'100', mb:'4px', fontSize:'55px',fontWeight:'500', color:"#b0a6a6"}}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}>
                Hi, i am Shirisha

              </motion.div>
              <motion.div className='' style={{fontFamily:"Space Grotesk', sans-serif", mt:'100', mb:'4px', fontSize:'55px',fontWeight:'500', color:"#5b669f"}}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}>
                Forntend Developer

              </motion.div>
              <motion.div className='' style={{fontFamily:"Space Grotesk', sans-serif", color:"#5A6473"}}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}>
                Passionate about crafting seamless User Interfaces and constantly expanding Skills

              </motion.div>
            </div>

            <div className=''>
              <motion.img
              src={Shirisha}
              alt="shiri"
              className={`shiri-image ${imageVisible ? 'fade-in' : ''}`}
              style={{ maxWidth: "100%", marginTop: "2rem", width: 400, height: '400px', border: '5px solid #000', borderRadius: '80%' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}/>
            </div>



          </div>
        </div>
      </div>



    </div>
  )
}

export default Header