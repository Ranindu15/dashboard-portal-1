import React from 'react';
import './ad.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'

function adHome1(){
    return (
        <div>
      <Navbar />
      <SideBar />
        <div className="admin-content">
           <div className="adverts" >
               <center>PDC is not requesting</center> 
               <center>advertisements from the </center>
               <center>companies yet.</center>
               <br></br>
               <button type="button" class="btn btn-info" style={{ background: '#01506e' }}>START REQUESTING ADVERTISEMENTS</button>
               
           </div>
           
        </div>
        </div>
    )
}


export default adHome1