import React from "react";


const WhyChooseUs = () => {
  return (
    <>
      <section class="WhyChooseUs">
        <div class="container">

            {/* why choose successenable */}
          <div class="row mt-5">
            <div class="col-md-4 mb-4">
              <div class="card mb-4 h-100 title">
                <div class="card-body">
                  <h4 class="card-title">Why Choose Successenable?</h4>

                  <p class="card-text text-justify">
                    We have over two years of relevant experience in the fields,
                    and we have been in the business for quite an age, with no
                    traces of incredibility to our record.
                  </p>

                  <button type="button" class="btn">GET STARTED</button>
                </div>
              </div>
            </div>


            {/* Other Cards*/}

            <div class="col-md-8">
              <div class="card-deck">
                  <div class="row">
                      <div class="col-md-12 mb-4 col-lg-4">
                <div class="card h-100  ">
                  <div class="card-body">
                  <box-icon name='gas-pump' class="box-icon" size='3rem' color=" #880e4f"></box-icon>
                      
                    <h4 class="card-title">Our Core Value</h4>

                    <p class="card-text text-justify">
                      What do you do when no one else is looking? Our teams act
                      with integrity and honesty, and focus on putting ourselves
                      in the shoes of others.
                    </p>
                  </div>
                </div>
                </div>

                <div class="col-md-12 mb-4 col-lg-4 ">
                <div class="card h-100 ">
                  <div class="card-body">
                  <box-icon name='gas-pump' class="box-icon" size='3rem' color=" #880e4f"></box-icon>
                      
                    <h4 class="card-title">Vission Statement</h4>

                    <p class="card-text text-justify">
                      To be among the best Estate management company in
                      sub-sahara Africa.
                    </p>
                  </div>
                </div>
                </div>

                <div class="col-md-12 mb-4 col-lg-4 ">
                <div class="card h-100 ">
                
                  <div class="card-body">
                  <box-icon name='gas-pump' class="box-icon" size='3rem' color=" #880e4f"></box-icon>
                      
                    <h4 class="card-title">Mission Statement</h4>

                    <p class="card-text text-justify">
                      To serve our clients and investor with integrity and
                      trust, and to provide financial break through to the
                      people.
                    </p>
                  </div>
                </div>
                </div>
                </div>
              </div>
            </div>

            {/* Other Cards*/}

          </div>

            {/* why choose successenable */}

        </div>
      </section>


      <section class="investment mt-4">
            <div class="container text-center">
                <div class="pt-3">
                    <h1> Investment</h1>
                    <p>We offer assured monthly return of 15% of your investment for preferred duration range of 6-12 months after which your capital invested will be return back to you after the preferred fixed duration.</p>

                  
                </div>
            </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
