import React from 'react';


const ContactUs = () => {
    return ( 
            <>
       

        <section class="contact">
  <div class="" id="contact">
   

      <div class="row">
        
        <div class="col-md-7 mb-4 wow animated fadeInLeft">

          <div class="card h-100">
          <h5 class="card-header text-center py-4">
            <strong>CONTACT US</strong>
        </h5>
        <div class="text-center mt-3 px-4">
          <div class="">
          <box-icon name='map' class="box-icon" size='2rem' color=" #fff"></box-icon>
            <h6 class="text-uppercase">No 1, I.K Dairo Street, Behind OlaSheu Petrol Station, Gate, Ibadan.</h6>
          </div>
  
          <div class=""> <hr/>
          <box-icon name='phone' class="box-icon" size='2rem' color=" #fff"></box-icon>
            <h6>0807 0679 494</h6>
          </div>
  
          <div class=""> <hr/>
          <box-icon name='envelope' class="box-icon" size='2rem' color=" #fff"></box-icon>
            <h6>successenable4all@gmail.com</h6>
    
          </div>

          <div> <hr/>

          </div>
        </div>
      </div>
        </div>

        
        <div class="col-md-5 mb-4 wow animated fadeInRight">
          
<div class="card h-100">

  <h5 class="card-header  text-center py-4">
      <strong>GET IN TOUCH</strong>
  </h5>

 
  <div class="card-body px-lg-5 pt-0">

      <form class="text-center" style={{color: 757575 }}  action="#!">

         
          <div class="md-form mt-3">
              <input type="text" id="materialContactFormName" class="form-control"/>
              <label for="materialContactFormName">Name</label>
          </div>

          
          <div class="md-form">
              <input type="email" id="materialContactFormEmail" class="form-control"/>
              <label for="materialContactFormEmail">E-mail</label>
          </div>

   
          <div class="md-form">
              <textarea id="materialContactFormMessage" class="form-control md-textarea" rows="4"></textarea>
              <label for="materialContactFormMessage">Message</label>
          </div>

          
          <button class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Send</button>

      </form>
  
  </div>
</div>

        </div>
      </div>
   
  </div>

  </section>

        </>

     );
}
 
export default ContactUs;