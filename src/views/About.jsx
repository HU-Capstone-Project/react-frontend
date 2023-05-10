import React from "react";
import { useSpring, animated } from "react-spring";
import screens from '../../src/img/screens.png'
import bg from '../../src/img/bg.png'
import poster from '../../src/img/poster.png'
import hardware from '../../src/img/hardware.jpeg'
import software from '../../src/img/software.jpeg'
// #061a40

const About = () => {
    const slideIn = useSpring({
        from: {opacity: 0, transform: 'translate3d(0, -100%, 0)'},
        to: {opacity: 1, transform: 'translate3d(0, 0, 0)'},
        delay: 500,
      })
  return (
    <div style={{ position: "relative" }}>
    <animated.div style={slideIn}>
    <div style={{ 
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            minHeight: "70vh"
        }}>
      <div className='about' style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div className="desc" style={{color:'white', padding:'10rem 5rem', fontSize: "1.2rem"}}>
          <h3 style={{fontWeight:'600'}}>About Us</h3>
          <p>This project presents the development of a low-cost inertial profilometer to assess road quality in Karachi, Pakistan, using accelerometer sensors and Internet of Things (IoT) technology. The system provides accurate road surface measurements, calculates the International Roughness Index (IRI), and generates detailed road assessment maps using GPS data. In addition to addressing societal, health, and economic concerns, the project emphasizes environmental sustainability and adherence to engineering standards. </p>
        </div>
        <img src={screens} style={{marginTop:'3rem'}} className="fade-in"/>
      </div>
    </div>
    </animated.div>
      <div style={{textAlign: 'center', marginTop: "15rem"}}>
        <h3 style={{textAlign:'center', color: '#061a40', fontWeight:'600'}}>Project Overview</h3>
        <img src={poster} style={{width:'80%', boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)'}}/>
      </div>

      <div style={{textAlign: 'center', margin:'4rem'}}>
        <h3 style={{textAlign:'center', color: '#061a40', fontWeight:'600'}}>System Overview</h3>
        <img src={software} style={{width:'30%', boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)', marginRight:'4rem'}}/>
        <img src={hardware} style={{width:'30%', boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)'}}/>
      </div>

      {/* <div style={{marginTop:'4rem'}}>
        <h3 style={{textAlign:'center', color: '#061a40', fontWeight:'600'}}>Team Members</h3>
        <div className="row container" style={{margin:'3rem 1rem 3rem 1rem'}}>
          <div className="col-md-4" style={{boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)', textAlign:'center', color:'black'}}>
            <h4>Mohammad Hasan Tariq</h4>
            <p>CE 2023</p>
          </div>

          <div className="col-md-4" style={{boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)', textAlign:'center', color:'black'}}>
            <h4>Muhammad Aqib Khan</h4>
            <p>EE 2023</p>
          </div>

          <div className="col-md-4" style={{boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)', textAlign:'center', color:'black'}}>
            <h4>Yabudullah Ahmed Bakhtiar</h4>
            <p>EE 2023</p>
          </div>
          </div>
      </div> */}
    </div>
  );
};
export default About;
