import React from "react";

const Properties = () => {
  return (
    <>
      <section class="Properties" id="properties">
        <div class="container pt-4 text-center">
          {/* Properties */}

          <h4 class="pt-4 ">PROPERTIES AVAILABLE</h4>

          <p class="card-text mb-5">
            We have numerous properties at our disposal, property for purchase,
            rent and we can also help you to manage your own properties.{" "}
          </p>

          {/* Other Tabs*/}

          <ul
            class="nav nav-tabs md-tabs text-center justify-content-center"
            id="myTabEx"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link active show"
                id="home-tab-ex"
                data-toggle="tab"
                href="#all-properties"
                role="tab"
                aria-controls="home-ex"
                aria-selected="true"
              >
                ALL
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab-ex"
                data-toggle="tab"
                href="#land"
                role="tab"
                aria-controls="profile-ex"
                aria-selected="false"
              >
                LAND
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-tab-ex"
                data-toggle="tab"
                href="#house"
                role="tab"
                aria-controls="contact-ex"
                aria-selected="false"
              >
                HOUSE
              </a>
            </li>
          </ul>
          <div class="tab-content pt-5" id="myTabContentEx">
            
            {/* Tab 1*/}

            <div
              class="tab-pane fade active show"
              id="all-properties"
              role="tabpanel"
              aria-labelledby="home-tab-ex"
            >
              <div class="row ">
                <div class="card-deck justify-content-center">
                  <div class="col-md-5">
                    <div class="card">
                      <div class="view overlay">
                        <img
                          class="card-img-top"
                          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                          alt="Card image cap"
                        />
                        <a href="#!">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>

                      <div class="card-body">
                        <h4 class="card-title">PROPERTY NAME</h4>

                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>

                        <a href="#" class="btn btn-unique">
                          Button
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="card">
                      <div class="view overlay">
                        <img
                          class="card-img-top"
                          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                          alt="Card image cap"
                        />
                        <a href="#!">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>

                      <div class="card-body">
                        <h4 class="card-title">PROPERTY NAME</h4>

                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>

                        <a href="#" class="btn btn-unique">
                          Button
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 1*/}

            {/* Tab 2*/}

            <div
              class="tab-pane fade"
              id="land"
              role="tabpanel"
              aria-labelledby="profile-tab-ex"
            >
              <p>
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                single-origin coffee squid. Exercitation +1 labore velit, blog
                sartorial PBR leggings next level wes anderson artisan four loko
                farm-to-table craft beer twee. Qui photo booth letterpress,
                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                vero magna velit sapiente labore stumptown. Vegan fanny pack
                odio cillum wes anderson 8-bit, sustainable jean shorts beard ut
                DIY ethical culpa terry richardson biodiesel. Art party
                scenester stumptown, tumblr butcher vero sint qui sapiente
                accusamus tattooed echo park.
              </p>
            </div>

            {/* Tab 2*/}

            {/* Tab 3*/}

            <div
              class="tab-pane fade"
              id="house"
              role="tabpanel"
              aria-labelledby="contact-tab-ex"
            >
              <p>
                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                farm-to-table readymade. Messenger bag gentrify pitchfork
                tattooed craft beer, iphone skateboard locavore carles etsy
                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
                retro mlkshk vice blog. Scenester cred you probably haven't
                heard of them, vinyl craft beer blog stumptown. Pitchfork
                sustainable tofu synth chambray yr.
              </p>
            </div>

            {/* Tab 3*/}
          </div>

          {/* Other Cards*/}

          {/* Services */}
        </div>
      </section>
    </>
  );
};

export default Properties;
