import React from "react";
import screens from '../../src/img/screens.png'
import bg from '../../src/img/bg.png'
import poster from '../../src/img/poster.png'
// #061a40

const About = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={bg} style={{ width: "100%", position: "absolute", zIndex: "-1"}} />
      <div className='about' style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div className="desc" style={{color:'white', marginLeft:'1.5rem'}}>
          <h3 >About Us</h3>
          <p>This project presents the development of a low-cost inertial profilometer to assess road quality in Karachi, Pakistan, using accelerometer sensors and Internet of Things (IoT) technology. The system provides accurate road surface measurements, calculates the International Roughness Index (IRI), and generates detailed road assessment maps using GPS data. In addition to addressing societal, health, and economic concerns, the project emphasizes environmental sustainability and adherence to engineering standards. </p>
        </div>
        <img src={screens} style={{marginTop:'3rem'}}/>
      </div>
      <div style={{textAlign: 'center'}}>
        <h3 style={{textAlign:'center', color: '#061a40'}}>Project Overview</h3>
        <img src={poster} style={{width:'50%', boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)'}}/>
      </div>

      <div style={{textAlign: 'center', marginTop:'4rem'}}>
        <h3 style={{textAlign:'center', color: '#061a40'}}>System Overview</h3>
        <img src={poster} style={{width:'30%', boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)', marginRight:'4rem'}}/>
        <img src={poster} style={{width:'30%', boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)'}}/>
      </div>

      <div style={{marginTop:'4rem'}}>
        <h3 style={{textAlign:'center', color: '#061a40'}}>Team Members</h3>
        <div className="row container" style={{margin:'3rem 1rem 3rem 1rem'}}>
          <div className="col-md-4" style={{boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)', textAlign:'center', color:'black'}}>
            <h4>Mohammad Hasan Tariq</h4>
            <p>CE 2023</p>
          </div>

          <div className="col-md-4" style={{boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)', textAlign:'center', color:'black'}}>
            <h4>Mohammad Hasan Tariq</h4>
            <p>CE 2023</p>
          </div>

          <div className="col-md-4" style={{boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)', textAlign:'center', color:'black'}}>
            <h4>Mohammad Hasan Tariq</h4>
            <p>CE 2023</p>
          </div>
          </div>
      </div>
    </div>
  );
};
export default About;
