<template>
  <div class="main">
    <div class="side-menu" id="side-menu">
      <div class="social">
        <ul class="social__list">
          <li class="social__item">
            <a target="_blank" href="https://t.me/Amphorium">
              <img class="default" src="@/assets/img/social-1.svg" alt="">
              <img class="hover" src="@/assets/img/social-1-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-1-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
             <a target="_blank" href="https://twitter.com/Amphorium_io">
              <img class="default" src="@/assets/img/social-2.svg" alt="">
              <img class="hover" src="@/assets/img/social-2-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-2-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a target="_blank" href="https://amphorium.medium.com/"><img class="default" src="@/assets/img/social-3.svg" alt="">
              <img class="hover" src="@/assets/img/social-3-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-3-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
          <a target="_blank" href="https://www.reddit.com/r/Amphorium/">
              <img class="default" src="@/assets/img/social-4.svg" alt="">
              <img class="hover" src="@/assets/img/social-4-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-4-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a target="_blank" href="https://discord.gg/CS2KCXTS6W">
              <img class="default" src="@/assets/img/social-5.svg" alt="">
              <img class="hover" src="@/assets/img/social-5-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-5-dark.svg" alt="">
            </a>
          </li>
        </ul>
      </div>
        <a href="#header" class="up-btn" v-smooth-scroll>
          <span>UP</span>
          <img class="default" src="@/assets/img/up-btn.svg" alt="">
          <img class="hover" src="@/assets/img/up-btn-hover.svg" alt="">
        </a>
    </div>
    <section class="main-banner">
      <div class="main-banner-img">
        <div class="main-banner-img__item main-banner-img__item--one flying-el-reverse">
          <img src="@/assets/img/coin-1.svg" alt="">
        </div>
        <div class="main-banner-img__item main-banner-img__item--two flying-el">
          <img src="@/assets/img/coin-2.svg" alt="">
        </div>
        <div class="main-banner-img__item main-banner-img__item--three flying-el">
          <img src="@/assets/img/coin-3.svg" alt="">
        </div>
        <div class="main-banner-img__item main-banner-img__item--four flying-el-reverse">
          <img src="@/assets/img/coin-4.svg" alt="">
        </div>
      </div>
      <div class="container">
        <div class="main-banner__wrap">
           <div class="main-banner__title">
              <div class="h1">
                <span @mousemove="textLighting" @mouseleave="resetTextLighting">Monitor.</span>
                <span @mousemove="textLighting" @mouseleave="resetTextLighting">Protect.</span>
                <span @mousemove="textLighting" @mouseleave="resetTextLighting">Control.</span>
              </div>
            </div>
          <div class="main-banner__info">
           
            <ul class="my-list">
              <li class="my-list__item">
                <p><span>The supply chain remains transparent and optimized through real-time cargo monitoring.</span></p>
                <!-- <p>In voluptate esse cillum dolore eu fugiat nulla pariatur</p> -->
              </li>
              <li class="my-list__item">
                <p><span>Your global cargo operations and your parcel are protected.</span></p>
                <!-- <p>Cillum dolore eu fugiat nulla pariatur</p> -->
              </li>
              <li class="my-list__item">
                <p><span>All the necessary data and tools are provided to optimize your supply chain.</span></p>
                <!-- <p>In voluptate esse cillum dolore eu fugiat nulla pariatur</p> -->
              </li>
            </ul>
            <div class="main-banner__btn">
              <!-- <button class="my-btn"><span class="my-btn__arrow"></span> <span class="my-btn__content">Get updates</span></button> -->
               <a href="https://amphorium.io/docs/whitepaper" target="_blank" class="my-btn">
               <span class="my-btn__arrow"></span>
                <span class="my-btn__content">whitepaper</span>
              </a>
            </div>
          </div>
          <div id="main-img">

              <div :class="`main-banner__img main-banner__img--${img}`"
               v-for="img in 19"
               :key="img"
               :style="{visibility: img===1?'visible':'hidden'}"
               >
                 <img 
                 :src="require(`@/assets/img/amphor/${img}-min.png`)" 
                 alt="">
              </div>

          </div>           
          <!-- </div> -->
        </div>
      </div>
    </section>
    <section class="about" id="about">
      <div class="container">
        <div class="about__wrap">
          <div class="about__img" >
            <div 
            :class="`about__img__img about__img__img--${img}`" 
            v-for="img in 20" 
            :key="img"
            :style="{visibility: img===1?'visible':'hidden'}">
              <img :src="require(`@/assets/img/earth/${img}-min.png`)" alt="">
            </div>
          </div>
          <div class="about__content">
            <div class="my-title my-title--left" data-aos="fade-up"
                 data-aos-duration="1500"
                 >
              <h2
               @mousemove="textLighting" @mouseleave="resetTextLighting">
               About Us
               </h2>
            </div>
            <div class="about__text" data-aos="fade-up"
                 data-aos-duration="1500">
              <p>Amphorium’s blockchain technology will help you to transform the logistics processes. The transportation of goods is although one of the most profitable niches constantly requires improvements. These improvements include the methods and means of transportation, quick and trustworthy documentation, sales improvements, and optimization of financial processes between the customer and the company. Our main goal is to ensure that our blockchain technology will help customers and businesses quickly process the documentation, customs declaration, and certification of goods. With our system, all the information flow between the shipping port and the stakeholders involved is thoroughly and quickly analyzed and delivered without any errors.</p>
              <p><span>Amphorium can help you with the following services:</span></p>
              <div class="row">
                <ul class="about__ul col">
                  <li class="my-list__item">Multimodal transportation</li>
                  <li class="my-list__item">International shipping</li>
                  <li class="my-list__item">Air transportation</li>
                  <li class="my-list__item">Shipping</li>
                </ul>
                <ul class="about__ul  col">
                  <li class="my-list__item">Trucking</li>
                  <li class="my-list__item">Intraport forwarding</li>
                  <li class="my-list__item">Railroad transportation</li>
                  <li class="my-list__item">Cargo insurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="calendar" id="roadmap" data-aos="fade"
             data-aos-duration="1500">
      <div id="cont" data-pct="100" ref="cont" @wheel="wheel" >
        <svg @load="slider()" id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
          <circle ref="barBg" r="275" cx="282.5" cy="282.5" fill="transparent" stroke-dasharray="0" stroke-dashoffset="0"></circle>
          <!-- <circle id="bar" ref="bar" r="48%" cx="50%" cy="50%" fill="transparent" stroke-dasharray="1728" stroke-dashoffset="0"></circle> -->
          <circle id="bar" ref="bar" r="275" cx="282.5" cy="282.5" fill="transparent" stroke-dasharray="1728" stroke-dashoffset="0"></circle>
          <!-- <div class="year"  >
            {{point.date.year}}
          </div> -->
        
        </svg>
        <svg ref="point" v-for="(point,index) of roadMap" :key="index+'road'" class="point-circle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="white"/>
          <circle cx="20.0003" cy="20" r="9.14286" fill="#FAA091"/>
        </svg>
          <p class="roadmap-title" style="pointer-events:none">Roadmap</p>
          <div class="year" style="pointer-events:none" v-for="(point,index) of roadMap" :key="index+'year'">
            <p v-if="point.focus">{{point.date.year}}</p>
          </div>
          <div class="calendar-slide__btn">
              <span class="scroll-btn">
                <span class="scroll-btn__circle"></span>
                <span class="scroll-btn__circle"></span>
                <span class="scroll-btn__circle"></span>
                <span class="scroll-btn__arrow"></span>
              </span>
           </div>
           <div class="slider-content"
           v-for="(road,index) of roadMap" :key="index+'roadM'">

            <div class="calendar-info__drop"
            :class="{active: road.focus}">
                <div class="calendar-item">
                  <div class="calendar-item__wrap">
                    <div class="date">
                      <p>{{ quarters[index].date }}</p>
                    </div>
                    <div class="calendar-item__title">
                      <p>{{ quarters[index].title }}</p>
                    </div>
                    <div class="calendar-item__text">
                      <p>{{ quarters[index].text }} </p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
            

      </div>
      <!-- <label for="percent">Type a percent!</label>
      <input id="percent" name="percent" ref="percent"> -->
    </section>
    <div class="logo-section" ref="logoSection" style="text-align: center; position:relative" >
      <img style="position:absolute" src="@/assets/img/logo-icon1.svg" alt="">
      <!-- <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin none" x="0px" y="0px">
      <path shape-rendering="geometricPrecision" fill-rule="evenodd" clip-rule="evenodd" d="M40.9375 80.5817C63.0289 80.5817 80.9375 62.6731 80.9375 40.5817C80.9375 18.4903 63.0289 0.581665 40.9375 0.581665C18.8461 0.581665 0.9375 18.4903 0.9375 40.5817C0.9375 62.6731 18.8461 80.5817 40.9375 80.5817ZM49.3375 23.5817L47.3699 28.6817H34.5051L32.5375 23.5817H49.3375ZM54.9375 43.0973L47.3699 29.815H34.5051L26.9375 43.0973H54.9375ZM54.9375 44.2993L47.3699 57.5817H34.5051L26.9375 44.2993H54.9375ZM52.5532 35.7911L49.2486 30.0258L54.9321 30.0498L52.5532 35.7911ZM29.3244 35.8058L32.6373 30.0261L26.9395 30.0501L29.3244 35.8058Z" fill="white"/>
      </svg> -->
    </div>
    <div class="white-background" id="white-section" >
      <section class="tokenomics" id="tokenomics" ref="nextSection">
        <div class="container">
          <div class="tokenomics__wrap">
            <div class="tokenomics__content">
              <div class="my-title my-title--left" data-aos="fade-up"
                   data-aos-duration="1500">
                <h2>Tokenomics <br>
                  Amphorium</h2>
              </div>
              <ul class="tokenomics-list" data-aos="fade-up"
                  data-aos-duration="1500">
                <li class="tokenomics-list__head">
                  <p>Group</p>
                  <p>%</p>
                  <p>Token AMH</p>
                </li>
                <li class="tokenomics-list__item"
                    v-for="(item,idx) in tokenInfo"
                    :class="{'active':idx===activeStep}"
                    :key="idx"
                    @mouseover="changeStep(idx)"
                >
                  <p>{{item.group}}</p>
                  <p>{{item.percent}}</p>
                  <p>{{item.amh}}</p>
                </li>
              </ul>
            </div>
            <div class="tokenomics__img">
              <img src="@/assets/img/schedule.svg" alt="">
              <div class="tokenomics-step" :class="`active--${activeStep}`">
                <p>{{tokenInfo[activeStep].group}} {{tokenInfo[activeStep].percent}}</p>
                <div class="tokenomics-step__marker"></div>
              </div>
            </div>
          </div>
          <div class="token-emission">
            <div class="token-emission__info">
              <div class="schedule-details__title" data-aos="fade-up"
                   data-aos-duration="1500">
                <p>Token
                  Emission
                </p>
              </div>
              <ul class="token-filter" data-aos="fade-up"
                  data-aos-duration="1500">
               <li>
                 <span class="small-marker small-marker--1"></span>
                 <p>Ecosystem</p>
               </li>
                <li>
                  <span class="small-marker small-marker--2"></span>
                  <p>Stacking</p>
                </li>
                <li>
                  <span class="small-marker small-marker--3"></span>
                  <p>Reserve</p>
                </li>
                <li>
                  <span class="small-marker small-marker--4"></span>
                  <p>Advisors</p>
                </li>
                <li>
                  <span class="small-marker small-marker--5"></span>
                  <p>Team</p>
                </li>
                <li>
                  <span class="small-marker small-marker--6"></span>
                  <p>Public Sale</p>
                </li>
                <li>
                  <span class="small-marker small-marker--7"></span>
                  <p>Private Sale 2</p>
                </li>
                <li>
                  <span class="small-marker small-marker--8"></span>
                  <p>Private Sale</p>
                </li>
                <li>
                  <span class="small-marker small-marker--9"></span>
                  <p>Seed</p>
                </li>
              </ul>
            </div>
           <div class="token-emission__img">
             <img src="@/assets/img/graph.png" alt="">
           </div>
          </div>
        </div>
      </section>
        <div class="logo-section" ref="logoSectionTwo" style="position:relative">
          <!-- <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#15121D"/>
            <path d="M46.4324 28.1H33.5676L31.6 23H48.4L46.4324 28.1Z" fill="white"/>
            <path d="M46.4324 29.2333H33.5676L26 42.5157H54L46.4324 29.2333Z" fill="white"/>
            <path d="M33.5676 57H46.4324L54 43.7177H26L33.5676 57Z" fill="white"/>
            <path d="M51.6157 35.2094L48.3111 29.4442L53.9946 29.4681L51.6157 35.2094Z" fill="white"/>
            <path d="M31.6998 29.4445L28.3869 35.2241L26.002 29.4684L31.6998 29.4445Z" fill="white"/>
          </svg> -->
          <img style="position:absolute" src="@/assets/img/logo-icon2.svg" alt="">
        </div>
    </div>
    <section class="history" id="history" ref="nextSectionTwo">
      <div class="history-bg">
        <img src="@/assets/img/map-img.png" alt="">
      </div>
      <div class="container">
        <div class="my-title" data-aos="fade-up"
             data-aos-duration="1500">
          <h2>Fundraising History</h2>
        </div>
        <div class="history__wrap" data-aos="fade"
             data-aos-duration="1500">
          <div class="history-card">
            <span class="history-marker"></span>
            <div class="history-card__wrap">
              <div class="date">
                <p>SEPTEMBER 2019</p>
              </div>
              <div class="history-card__title">
                <p>Implementation of the idea</p>
              </div>
              <div class="history-card__text">
                <p>Establishing our own fundraising for the implementation of plans and team building.</p>
              </div>
            </div>
          </div>
          <div class="history-card">
            <span class="history-marker"></span>
            <div class="history-card__wrap">
              <div class="date">
                <p>SEPTEMBER 2021</p>
              </div>
              <div class="history-card__title">
                <p>Seed round</p>
              </div>
              <div class="history-card__text">
                <p>A common vision produces a common goal, which in turn gives a commitment. We need people who are committed to our goal.</p>
              </div>
            </div>
          </div>
          <div class="history-card">
            <span class="history-marker"></span>
            <div class="history-card__wrap">
              <div class="date">
                <p>FEBRUARY 2022</p>
              </div>
              <div class="history-card__title">
                <p>Public round</p>
              </div>
              <div class="history-card__text">
                <p>We want to partner with motivated people because when people feel motivated, they can contribute great ideas and strive to learn new things every day. Join our community!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="news" id="news">
      <div class="container">
        <div class="my-title" data-aos="fade-up"
             data-aos-duration="1500" 
           >
          <h2 @mousemove="textLighting" @mouseleave="resetTextLighting">Our News</h2>
        </div>

        <div class="news__wrap">
          <swiper
            :slides-per-view="1"
            :space-between="150"
            :breakpoints="swiperOptions.breakpoints"
          >
            <swiper-slide v-for="(n,index) in news" :key="index">
            <div class="news-card" >
                  <div class="news-card__info">
                    <div class="date">
                      <p>{{n.date}}</p>
                    </div>
                    <div class="news-card__title">
                      <p
                       @mousemove="textLighting"
                       @mouseleave="resetTextLighting">
                       {{n.title}}
                       </p>
                    </div>
                    <div class="news-card__text">
                      <p>{{n.text}}</p>
                    </div>
                    <!-- <div class="news-card__link">
                      <a href="#" class="more">
                        <span class="more__text">Read more</span>
                      </a>
                    </div> -->
                  </div>
                </div>
            </swiper-slide>
          </swiper>
          <!-- <vue-scroll :ops="ops"> -->
          <div class="news__wrap-content">
           
          </div>
          <!-- </vue-scroll> -->
        </div>
        <!-- <div class="news__link" data-aos="fade-up"
             data-aos-duration="1500">
          <a href="#" class="read-all"><span 
            @mousemove="textLighting"
            @mouseleave="resetTextLighting"
            >Read All News
            </span>
          </a>
        </div> -->
      </div>
    </section>
    <section class="facts" id="facts">
      <div class="container">
        <div class="my-title" data-aos="fade-up"
             data-aos-duration="1500">
          <h2 @mousemove="textLighting" @mouseleave="resetTextLighting">
            Amphorium is a combination of simplicity and innovation in the world of logistics.
          </h2>
        </div>
        <div class="facts__subtitle" data-aos="fade-up"
             data-aos-duration="1500">
          <p>It is designed to ensure a decentralized and credible system in logistics where all partners can work together on the same network. Customers and stakeholders are able to monitor all the processes</p>
        </div>
        <div class="facts__wrap" data-aos="fade"
             data-aos-duration="1500">
          <div class="facts-card">
            <div class="facts-card__wrap">
              <div class="facts-card__img">
                <img src="@/assets/img/facts-img.svg" alt="">
              </div>
              <!-- <div class="facts-card__title">
                <p>Voluptate velit esse</p>
              </div> -->
              <div class="facts-card__text">
                <p>We are crypto enthusiasts who connect the bridge between logistics and blockchain technology. Hence, our blockchain technology ensures efficiency and security in logistics.</p>
              </div>
              <!-- <a href="#" class="more">
                <span class="more__text">Read more</span>
              </a> -->
            </div>

          </div>
          <div class="facts-card">
            <div class="facts-card__wrap">
              <div class="facts-card__img">
                <img src="@/assets/img/facts-img.svg" alt="">
              </div>
              <!-- <div class="facts-card__title">
                <p>Voluptate velit esse</p>
              </div> -->
              <div class="facts-card__text">
                <p>This is a future technology based on its own blockchain, performing the mission of optimization of transportation.</p>
              </div>
              <!-- <a href="#" class="more">
                <span class="more__text">Read more</span>
              </a> -->
            </div>

          </div>
          <div class="facts-card">
            <div class="facts-card__wrap">
              <div class="facts-card__img">
                <img src="@/assets/img/facts-img.svg" alt="">
              </div>
              <!-- <div class="facts-card__title">
                <p>Voluptate velit esse</p>
              </div> -->
              <div class="facts-card__text">
                <p>The world's first blockchain aimed at simplifying documentation and payment for services in the logistics sector.</p>
              </div>
              <!-- <a href="#" class="more">
                <span class="more__text">Read more</span>
              </a> -->
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="partners" id="partners">
      <div class="container">
        <div class="my-title" data-aos="fade-up"
             data-aos-duration="1500">
          <h2 style="width:100%" @mousemove="textLighting" @mouseleave="resetTextLighting">Our Partners</h2>
        </div>
        <div class="partners-grid" data-aos="fade"
             data-aos-duration="1500">
          <a href="#" class="partners-item">
            <!-- <img src="@/assets/img/partner-1.svg" alt=""> -->
            <img src="https://clover.finance/partner/graph.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <!-- <img src="@/assets/img/partner-2.svg" alt=""> -->
            <img src="https://clover.finance/partner/chainlink.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <!-- <img src="@/assets/img/partner-3.svg" alt=""> -->
            <img src="https://clover.finance/partner/prosper.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <!-- <img src="@/assets/img/partner-4.svg" alt=""> -->
            <img src="https://clover.finance/partner/dodo.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <!-- <img src="@/assets/img/partner-5.svg" alt=""> -->
            <img src="https://clover.finance/partner/polygon.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/litentry.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/boringdao.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/injective.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/crust.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/showcase.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/hedget.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/snowswap.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/etha_lend.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/unilend.png" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="https://clover.finance/partner/alice.png" alt="">
          </a>
        </div>
      </div>
    </section>
    <section class="audit" id="audit">
      <div class="container">
        <div class="audit__wrap">
          <div class="audit__info">
            <div class="my-title my-title--left" data-aos="fade-up"
                 data-aos-duration="1500">
              <h2 @mousemove="textLighting" @mouseleave="resetTextLighting">Audit</h2>
            </div>
            <div class="audit__subtitle" data-aos="fade-up"
                 data-aos-duration="1500">
              <p>One of the most prominent leaders in blockchain security has contributed his expertise to AMH auditing. We were able to fix all the high-level issues and recognized that the AMH smart contract doesn't contain centralization of power.
              </p>
              <!-- <p>As of August 1, 2021, we have passed the Ambisafe audit.</p> -->
            </div>
            <div class="audit__links" data-aos="fade-up"
                 data-aos-duration="1500">


            </div>
          </div>
          <div class="audit__content">
            <div class="audit-grid" data-aos="fade"
                 data-aos-duration="1500">
              <!-- <div class="audit-grid__item">
                <div class="audit-card">
                  <div class="audit-card__wrap">
                    <div class="audit-card__img">
                      <img src="@/assets/img/audit-img.svg" alt="">
                    </div>
                    <div class="audit-card__title"><p>Lorem ipsum
                      dolor sit amet</p></div>
                    <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="audit-grid__item">
                <div class="audit-card">
                  <a target="_blank" href="https://amphorium.io/docs/audit" class="audit-card__link"></a>
                  <div class="audit-card__wrap">
                    <div class="audit-card__img">
                      <svg width="188" height="48" viewBox="0 0 188 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="188" height="48">
                          <rect width="188" height="47.2186" fill="url(#pattern0)"/>
                        </mask>
                        <g mask="url(#mask0)">
                          <rect width="188" height="45.4698" fill="url(#paint0_linear)"/>
                        </g>
                        <defs>
                          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0" transform="translate(-0.00232559) scale(0.00251163 0.01)"/>
                          </pattern>
                          <linearGradient id="paint0_linear" x1="0" y1="22.7349" x2="188" y2="22.7349" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFC9B3"/>
                            <stop offset="1" stop-color="#F67D75"/>
                          </linearGradient>
                          <image id="image0" width="400" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABkCAYAAACoy2Z3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAA1bklEQVR42u19B5gkR3X/7C4ChMAkG4w4S7NVr2dWnDlsHxj8R/Zf5CDCn2SDyTnLhD9GxmAEQgiRMcIWAiMBIh1YBgwSWQTbBB9BgAzoAAkEQkgIge5up7t6Ztrfq66qfl1T1WHC7t5dve/rb/f2JnRXeun3fq/TCRIkSJAgQYLMX7JOZynrdJbxCqMRJEiQIEHqFcdxx10HL0uZrNh/CxIkSJAgQYzHcUGnc52a1wSPJEiQIEGClBWD+R1gW8z5swWPzk44fEQAvCdhcGISRcdQjySMWpAgQYIE5WGUhwB4Rszhl1nUy+wr4bA3YfBKrTyCEgkSJEiQQ1t5YKJ8CX9POH+5VBYQobIYJRwEuYb496zXzxKAD+p8SAhnBQkSJMihqkB27jxMKg8WPRgVxJADKo8k4TBO8t/1hf9O8ZJKhMEr8X0n5TmRpTCSQYIECXJoeR95KGrHjiMSDhepMFViKQ77SscQZYLD3pixXieEsoIECRLk0BONuEp49BKlPIYOz8NcceGJDPH1KcDzOgr2G0YzSJAgQQ4V70Md+jFjkQC4WuU90hrvI1cgjEsFkjD4l07IgwQJEiTIAaoIMAexc+dh8sICQFWnoS5Z/Of7/9z74GdlUT9TifI65ZF7IVqBAJyj7iHkQIIECRLkAFIcK9Na/rtUzmLA+V0waZ7mymHURIFQD0Tw6B87IQcSJEiQIAeQx0EO7Gz79humjB0rWPS0hMGpMednCIB3CA5nCoDXJwxeKhg8PQa4f8LYba/q928klcfq6tEJg2+q3IcgOY6sQQ5knIe8+MPxs3YrJFeQIEGCBNnCXof5vbvWTQBOTTj/PnoPrsI/eo3yHMd6wuG7MYfzYs4vV3mPYQvlIfMkSulcpJVRyIEECRIkyOYqhyXMUZzkOYyp8hAAzxQcfoW5C1QCKUFHOS4MTY0Fhwzht0apFMWCWdMrpt4Hi/66E8JXQYIECbLJymOS+XbJqzx49FaiAATmI7SSqLlG6hoqtNWwheLQvyfK+zif3FvwPoIECRJkE7yOUj5DrPZud023exOqROgBHaPy6PUpzUi2YRfjw7GC+gqAO3VC/UeQIEGCbL7XgbUYCYf35xXe/CkdQjFi6jV4dIKy/sdN8xZzvMYJz5FXMYPTOxaHVpAgQYIE2RivYykjqKUY4HkJh2vQs8BcxoCxu3Wspk4JwG0SDtfSYr94I70PDkNNX7JvdXUHVXBBggQJEmRjlIcJWcUAPGHwSYmQ4pDnNAC+qv+fNnZKGJzTBm67CAWilNe1eN/yWbrd64cZDRIkSJCNUR4rxOu4v+65oTyKWIaHOH91x2ofu5+xO+D/y/xDnjDPNuGSSfgMZPX5O/RzhPqPIEGCBNlI5cHgOan2OHLm2xFCbLFOI2bsvp28OPC6+vWC8zdSqpF4cxRIUUCYK71d2bZth3dCKCvIwb93Q65vsWNbol7alTNshPF2KY8BdvOTIauIck+p8FB0+f5+/0h83UVKgVy7tnbzhMOPpOW/0agr9yWhwJiviTl8/rfbtt/sYFIiuhbHeYV6l8WO7xYbY0UVtGIOufz+wsE2n7HV4xlKAJoqj4TzV+f8UWCz3grFK/UZ8z6NvAK4v/JUpAcQb74CMRBi5RX997W93u8eDEokHA5hfF371nX4hdmcYWwd0P/Ltm07POv1fjfrdn9/3+rqLUNUw1po2vPQRIQkJJTpwzjm8NpOkWiX742t8NUWusayqDD3RP7jyu3bb9g5gOtCTM3Nzp2HDVZ7fx4D3Ctl7G4p690df8ac30dE0R+F7T/7+Kac/5+0NL7ywjG+t+j1brdV9m121FE3FSx6PHbeTBiciLnIoERmDldRNo0/Thi8MOHRucjJh5EWweGKhMMPsR6ucyjXmWm3VymBE4znQZLgMU1OR71swPljOlb9R8Kjr5FEe7ZVlUjC4SNNrLetbnEiPYumhhEFS7HOV/0G4dT560MB5TTjm3J+5xyMkXvVaTHGOrf2QwzbbtY60t8pDzfVoVNf0vMGeFHwWGczplE5JAw+mHAYlPj6FM0Srof1bnTHzqEM0tGac8j5fVKVIPfUb4yGSrHoQdsDcD2peFZX+4LDb8dTcFZtsBKRPdJjBq/vHIBJR3qvmNdRCnGY2gec/Ds/rSMh1kGBTHMwI0gED4ohUdBmfBFEwuHKrNe79WZYn6X2zshS3TOev5CGkjrgEoC/7AQWhsZCuf0E508WHPZjVGVcnImJGuNYrgUG+wRjtz9kx1g/9KDb7WJivCYBnipr7LL9Rx9zK3zfJaq+ImHRQ7Zg/sNZI6KtdAHw6ANt4s18rfb+nIQVU8Idlud88rn40WZayAe8BxJF90gJs4FjfH+q98GGKxBdtMv5gwqi0RJsfpBD7eG8EMpqH4kRAM8lHH4JHVtRrjWLdbjwkFMgZd4qOE+5vokPfisKcsL/MqErhcBKAE5q0qd8M694UhH+Ol7t9zsHUFK9CDXCmXmbXmetzYgoySd2Anx5Og8E4F6K0SCz1rQ+PH6ukYib5YHEnD9Lh6xi29jL/777Mg1hD0ZEI6WMnidGYcZF6YLrDNFsF4ND1gPRDyw4f7aJmzrCT2V2W3SVo/fZCznh/L0k/zHeot4HfRah7veAsdD0fGWMHSULO93FmmP6fDGHzwULdEoPBOCeI6VA4tKa5kMVwto8BVLQBv0laXUwJGzWseKC+1SY/xYhwVvuOCLh8G2VB44rzpIUyxswxHVIKhCjbXs9FnO4qiFvlVBx1VfZFk3M+Ze0Aonr8xCaol14rpT2BllojQguFAZP6Fh0LFt6zjj//0o5jCvyTcOhes40iv4ixMEPTg8Ea5sSDj9QOZBE7Ruhe+kgMivMffPxxPEiHt24Igyuw5hCHGohLJqIFQzeThZf7cGvKExOoGGRrN+/UcLge1QJVSiNcWYaRfUz/O7SRVAOpPd5avURmZ8XInM+/JK9AL+3ld18YyF1u9fHsEQV11jZy+ojY/IZrrkPUq9ARltUgdD7HKxGf4HekI0SEgxeF+a9XSgfEZq+UH5M5p6g3VLBeoeWAtGWdgrwZwZZVd+waVRARPlfyQFTCKx93e7vY0LRE1JJNRTSLGwOv8aiPsRUxwzejn3R8Uo4vBNDSogqwRCN/D6zIXrZkCqUFg2mKhSiOWQTgJdtZTefFGs+gFjFdWi3VKOFsKf8VlCQGvU2T/Sb/Zmzfu48PZB535vv8FsH2IZ1CjGHt8UAb8B7n0foapH3PuW8Li3ge7RxhufYZS5DOC7P+6UJg5cmAA/DeiC7J9JWWccL9z4kR1Rz1tyhgTOy3t07hOF20F3rSkhjWYEYtIqKJ16R8OhsjNli2Owiwp81cY/d7vVxQ6Ssd2wM8AzBo7MQ5649ILyUMhEz15ywPJ6N94ffuRW9EMtC2qWKNZOqObN7wqcAz5vns1mcQOayWxwT/qAV13fT/zup4UFH3+M6HHURGKX3mNUDiRsqEPu7XQcevf95cCn5ABJ2A7gWh1jV2C5PO65NvntXzbydVDP3HTdnFb2WfOOHjefwPBi6jbNUIVS/jYjVqnO1xTg3eZa5rpW5WbKY+MEDeNjMkpWJQ4VKiMVq70+pAsm6a12hFUjR21wXW/0i4dFL1jn/g5nu+5Y7jkgZOzbh/OWCR1/LvZN+RqyFNJ4ulGVCc2hVbEVXlAAV/jDhsH9cjHMzxFn+bN/UHuOsXlbdIibdKVfaflcVh5PmJJrOsmv+vqYKxE6iT3uoGs6tGQ4HCkGlv7c53KYZ23nkDWd5/mnWmG/cYhYdT0sRaPTFFOtG0T06Cn2qWcjbfL9+1pOmvOd5rJX5xHcZvKUlakpDX6/Fg4wqkFIIi0OMm05BSM8ZMHaUfQDoSXe5bGXNbEjrylbt9u3XTTm/q+DRGVJxFXjtocJrt82T6Ge7OGPsxlvNC9HPn3A4xaKKGTdUkLp/ywM7M0J6Gx9G5DtwTLFINeH8ZKzqFRw+FzP4AoYrse1xzKOnJr3emu3dVB1uWGUvC70YnJ4w+KjgcIH8TAafFAzenTD4B1kIqAg09Zw22bitQli6DkQpZ/n72trNYxbdD40dRCzGPPoM3lvM4YL8XvGZ+fNxDWcq/DGloluax2vt8c4Y6w0AnoRnRALw71iwKjh8PuHRx2OAf8JEM0YdivdPf6DZCuA3Rx1103g1ugdW0WPEIubwCRw78/0czsRup2gA0++c1rCw1tTDlJcxsmrZ9PlwKZ2vtnNhP2t25JE3WAf4MwHwDOycKkP6am+QtXIGRg9Szu+CYzOrwp+L97H/6KNvFXP4WdauZ4cexF9hS1u6aWQ1LIfvUloNwaMT6GEy68PKRe74HHQnUx69WE5uoUja5khG5JB9ZGcL1U3oBYeLJ2c69gIVdN/5sbP6XhoL0bnTutydElKF3V4dLOfjz4Tzj+Fijzn/NOaxTCiw271JwvmLpWImiUfXlXDYi22StXdbik2X2ilHx+N3Coj2VX0eWQs/ShicmpUNmZXZFAjXCuRn9HPRWMLvShj8uO55dRg25rBHALwB6UjqQlJUdpm56N1Bjj/mDvVcmPmQh9CJVXM+QdsBcI7sJlpz7wLPAc7/WYdzfOGhKqHUH3kX0+g1CYc9owZjpyIOn9f52FIoisHT49ygmBiPlMELO6TiHOdP8Oh9qJwSDl8fuguhx7rqHGHR+FlqvX9GAPxLpghad1WRWtKuroz1pDHFows1ErTxWuH8jfs530nHcMO8kWKAo8cTV23URoGgxW+6/JUGBT6l0FzIwfOoNpthKqvF+lycRLRaYg6/wAFXYR5zoFblCuJS4RX/13kkH+c+Z5w/Vs3ZWC9w8kyjcZFryhzPnIcfAfYlq/2pW/zq92CPmKy/Rha4Qs8pFB0eRJi0l/xM6m96DYkib0UveX9q/aQ6lEi93PVe79Yy/6Oek4Tx0oor5yzq9WWOSwA8qYkSaeCBKGOKX375kUfeQMXPnxlzuEI+bx7eynz3JceA8aHQIJH8uQfoTWWKOQBDQzVegyokjE4ozwW51o7JcnSkCV2ueJUH589KOKzjvZCxFZ5nGOpxlWAXFj2404IWSIdhjPEJ8CqptKy14r/yPIU2EmIGH6UgEcHhy/js3vEg+VcZttII0GJ/OUE3KZkv8xOibD3KaZ1ce4qSMqJBhU34EESk90xaAJj8zzu5VmIES5Cc7fLCz6pSIhbgQw1rNqoVCOmJIOnf5YLiz2qawJsVcUASfstEkdxa8OhNpGp+2DDRrp/vl4N+f3Ur5EJKcGsOn/XMmSb7+7kKD8WOvFaR53HU8ExhgDyNNBiL1UEzUAftr1POny+9jgIeLhqEFYcm/JnzeJ1lnh3gT6T3lX8erXdoxH1GuaHQgqtTIg0UiEYupliTg+GHMu1F47CwuT+iQC9GBmAS8liq9AY5f4oOHavv1uO9X/39yy4FUgLTMHgpuX/8nGFcHxrNO5NCrswF5LVUdQcZPVAVUeE3SS5TNFwren0nBe8b/CSJomPUXvm8UvD7RcV46DkmyM4mpQySa0xwWFd/2+srJKT5FazFksqrN/GsozY8fnStYA4OUZkbYvAajd/r3dqEr+oLB10H7FUx52AnPDFJrjsU1mzOJR/KYhZ0h51gXQe4E8aeycaoW5gjXaMyUBxZm11YqA/sNOe9Glpw6wKGnB+4f59bpHC+B8cuDIOs7onSUkESD+QZxFI0Y5oWyLiYrK/W+Sh9KOBhrzi/LiOVwVMRdaqDRG08/iaK6plCgch/C+3hFJ7fLG0MUjJH66bbZ52SQ2WuWy84qUyir3kUiAqBwROIJZxMMa5xpoEGAPesW1fmvjHPweEaNXazoClHSWEs7hlgCJHDr7JJUlczHnuIAkGqftxXw3bRmBIXlkuBUKMYIzJkbtN5IEd1DZvsDAvwzIUrEcO4266OwJUD+a2hCS+gi8s21K5Jsq5JHLqx8tBuouWRyISbiukShJirQIj2OjlzllzBvLwP/d2YaKaAh4nQFIN9CWO3dYS6RpMKUjYDe9w0XohDgdjfMSa08rYHNCYgh6GDu6kUktPhp2FBT288r7j8uSMyrxOFprFLOeUN0Z7qG4OGCoQ+l4sCaGzd36hBIexYW/Xo0aHyrAiN2ArETvyqA4tPKBDCowXyEFeek3CP2bgBK4Q+wC/KdK8d17hqIlCA4zTZo/YiasZkZI3j2JGnSLUyp8qgajz0HKfuNVuNbmQGlTrBhVXysjh/TKZARfazxlOsF+s9uTciQ6alyM/Swg6jhEevoD07moew/AOmb7wqoVNqlbu6ejTGjBOA9yAiJ0dYwIeRkFGUGuHUW8glJAZp5UnvDVFjgvMvEktLVFK1cPhGtskEdAXrrswl/MLjMSZ2chw7pMlwT9RzobWSnEmAdJNsA0HUCgRyBRJPwlt9iis11rpG6BWW1Kiqp73wF7kOtVdGP5e4+mM/+4AMuVyN9Uie3EBTBUI3ful58d7wfWNyb1Yh7KjSqs/H91If269PgUyu5cilQJaU9/EWi4Vi7GOuJm0aRo5xNbRAMYOnu5QeISqMMEzcgGtKh55HdI7JfAwd8zys8HonxkMp0Xtb81ZPw5Sv20SdJfttKhP9EyG/pD9P4lFIY996sfIjI48SEQXxI3/QQkLv5UI0/rE61t0abqVswNjd2two0cwrWBOCYbAKdAVaqe9tUjldqjdQB76FlV7RYSgcA5mnKVsDPrf0Wg0r3TQFUhxiz/OwHE8yA6jkoJCdIaW1NXTh2WW4ibFjW3t6lgJJ3AqkNJ468aiI567CWDXm0czfq2taxu7P54ZOAjdQzPnlCCNH75j8few57AqiSQanu5RoSwVieziZVey6N2FwteBwjaMQtkrRqeZnJeLS5VkViP4MBb3/uVo/TkZnozgArsbnwH/jPOL/CVeEIr+PT9j3S36uyPxE/rq4KtZPkVgCIhyna9Q47h2VqUTGDfNhXgVCE+JVhoKgzBjkPdSgNvQyOeHpz2vOWu96kZEe8n+O1uJlD1AxThijqK0ScVVf7tL1FpqzirEbx0i8FvWmiddSqGvjJjW6mRF+d4Lx+V6p+M9GeYhUxakx7o0Yad/3WAnm18YcLsZ2niU4pK4nKcMFH4bd+sgYjF01E9jfvbN5nebkhrukmvdKe0s/+K2qddBKdD3vpJdah7PVkjh6a6dlQy2XB1JF5jg2SD9+FraERaNgL+e3wM2VAvxfweHNevE3jgsjc0B+EFyeMjgRE+xYzIeeF1q3il7i01llmNbAcH9hkCxlb7qtAhmbEIp8PRa68hfLOH8UHYOFthkAz/Ny/CnIt2RADf72ByNRrMUHeO+xhQLZpQrf1PvuN3YjMcfakBIcvo25mIG6/5jzF5CDf6ATyjpJPcrPhh9nk9X5usPj82tqz0Z6XHLvJDoX2xEgtBuBO4Oj+6s4nsiSLKlEeHShBd1vrUCQAy8BOBX3QwLwrczdEK/whCV8N/pHwfk/JwDvkACEfv9G9lmBaM465UG88W9g3RIyfKDhKpk9GIuQ4wzHTHD4T2L4plXhd0Qqto4uXNBpVg0pUQ+tqs89ZIoMntMQT28qYxFnbXVNq3JdB2oR/TLpKk/AjXDIXXEenaWhjIlER/D36j7FZHyM9YX5goTDd8hipvHSVDH0Pqezya1KcZN7mnQVqCoevcaVXyKWno3a0ofDlbrIs+kz1ikQmpsZGURPgdN3CfYXL5KetTVJ2sr9hra0fIJFfBVQ9aJfis4H0cJHhwKJq0NYGgJ+iWwz3GA8c3AA/5pLidghStl5svC2l2fyQIwCyRsmOd43UnO3X0TRHznH1Qcb1ha5qlPA79K1EQq8c0UFeGdU5Kfgc+ukHsi7HgGuh8SuEgJcr0Qmx2OyOPVRTqXODH3/T7SyqKpryQsSy2vP1atFQ8ubQOoTFj0CvfcK9Kz09tFDTBUPWq2Bbzd+lzwx3e5NsqOOuikWnuHPbPv2m10N8DtYvKItsxmICHN2V2jWDraA+EZ/S5ofDZuEzrBRi2o9+0mfRtUDP+D8rlopaXx4rkjgFJrLoEitLKfBPo9somHZQs/hnictIinVMKdjc5WRRa0P6MTQymgvczLMNLLqRkxfe4SgtgpFOkJYDgUy1mg2waK/oUWg2iPWlrD+POxmOfQkMu1qYMxdGKMC4HqqCnrZeJsE448WoiffVxz6AO+w13LLJHqqDvkLMpWvMOGMgnVhRYdTaZ5QMSt/mOyNscsLkUgbzT9nJ8JbKhAdEUDyUI8HJBTc+YslL16NKz5jwuEDWERnChhVESNCzQWPzs44v0XxXt05MXqJBwhSUh5YnOgKRZcuNbYGcdmN7og1OTXIUl9Ib8k0xUPl7xpLZjzWPcbbz+fRgHeMoty58zDB4Ct2lMcROfiGLsj2rRf8Ny22RKQrktDSNe0xOD5c64XQBS8TrZiABkkPcTFCNfFh1U+8fqBjmDO2m00Ur9JH627QHNR5UvenBEpbGQ6I3SGzB1YlElWV9g8pDj8vrJMFZLuNRaQULp0USWdfHIZDYuW+fzOQWFmxwbcLgH2jSZeaHFqlZHjp8FsvW3xDG8M/DT9WlQKJJ72Er+t78cGhKWKE0Ginnmp65XHxl5N8jxuwoQ+7fn9VFm0RxgV7I8vNrl9vH871CkQfBv+ZqYLCXKnV10LoVtAIKRXY4dN/KGiD5gyrdmomDwRDbB4FYjoZ0vFsW6tV4ubatu1w6vHHkwaHtsjfSb2LBpxrRrGledh2vYInrgpUsKLqjR7tGUutQH6UeVpEk3H9f3b4dHJv8O8j8y8Z2/raGX3PeUHtpR6PSxuW6xqV6fSGS6gqFj0i54Pql6jP7d/H7oNkCg9EWm3fq+OMIh3THumBlTYhAlQdEMnC8pDEoQVkWXJDiqvXoQp7I6lJP40gtAYqTPfJTVEgetwYvNKzwY0HMeD8yTYlRAn+W/R6sfMnI434wAXftDK9xgMZW+y/JzYKc2ovkpXWiW3k6PahJqxSdb9lLy56H2UvLt2n7mvuidnXKJD8/azsEbWaa/V6VSjpO/zUfUbfJ7H25VlzIAOs/yDjbXs9uBcGZM8YK1kpkyZetKlj4vyucVFrMfQYHN81EOAKpu6qqnaks6d7Jm6pQEgIqwyJZkSBbFceSLmmZpkUvZ7jYcvOQUiMDzE3pp7zhtKTaXhdpeZf3udkjm/cmH3bPLDadCRZk1SUxM/aP4NquIHOMXhw9Ia3v0AENaKM91l4377Sgy8vMO3wZjsUEBOEgtqEr7CLFslBo13soen7Xlj1SxvjfRQeVVx4VJZLXsRjzcGnmEHR0pcUGGqDYNgjsUJDE9QtAB9qmnRrkEQ3hw8myTtteKdWV/sYyx5bHpeVl2rsMZED9m+8lnZR17TdmfQFuKdHgRgljp5/ZwbKHkJJ8la6fmNH1TuGamy0zxQoLF2fsJPmQ+2QkukHjkliwvdVUiboJRxXCiGWSRk75mD/B/se7XBnwvnDpx1HowgwVO8HCbVWIA7QhU+BrDiiLakraiAUeGVWkYl14tE5QmT/5jSAyWBxXQQkckTERvQSNxsHC2QqFAjtX/EBjwXYpnjxZzq+7HUd/THdvO2kyo3QCZxQIrhZCoX8XyS0sSGcWAXvVfS4iiScyKu0o7ObfKa07NwKXDML7DXubk0upC4HQtkKEDHTCmgB8DuyNWvF5rN4ypaaeHIIRBiVu1vaXo2rEKwpG+9v4tV+fyYFoq10pLpwKPtSTokk/GdQIMYoinn0pQqk0Gik9kws4dfRuQgpR/i3jj7QfeToA7PsQCSlzjAihrd27DhiWtAKDZclPDq56rsWqUCwvEH3THKEnUeq4O/TWLEfc34fZKiO21yM3VfWlrDoIWSvDD3MwT/APTVxfpHE9GumhOPOeqk2qXm1tis2Ok0DpJqOekXfBZ8CUXw+XkSLKlpTIZ13+j0RfpohXdOJ6Q1QIOXqef6ZirlV3Ff8kpjB63EdYOtShDKbi8HrkPMKCdfQqtfYfQdQQVsrpzQCRdQrEKEOnIs19XTdgXASQRVJniIrFyDnUkF3kV686SFj+t4A3AlpTBz1JlWVxFUKhOSg8kTzLF5qQwVazv/M4IGUIxjRQ+xaCpukUyeQi7oLuY9+gCy0CC+mtCBOq3zbtsMF5sO8UHRJWfOmtpBy33zjAeupLJ9BgUAjBSI4f7bHKzDGAC2GTKe4RLmwc+yDzws0bhjrle7VLLadOw8j9QETN7vgS8cs/4eElZZ9MeicaK4/awjroqsLbbpShjDnCdpY5TEqcPWmetkm67OJHxEGbP3/wkNYZgPIplkwVIf+0AcwaEIXToqTxlXjK8Nl2yY3xrQKRCbndVK5AaEmiR9/yqE4C/g456e1VSDJ6uoOAiBJ5+CBFAqNw9s6c2gZ6yjyFSUPxHyfqd1ZmUclugr9nin3g+JXqiBOlDVTutePzqtiWBH5tCbAM6R1hISf5uNoz+tYhSafMCtk3nicnIMsVJ6c74V4INT7QcOtwVknWX2HM1w1dUm6WHi0rkk5dWTBTA7t3du8n8e8wlgjoR4C4bMVhX4rJlnnXuBtkujv90J5i2ZL76oqUrLQXSoMB691ucFNaVQWAd1FGGNDhUs5oKquWp4hlZB/7NwUCMBX95DEbQvY8nlVCsTkGxrAjkloc7uuUJ+bApmswVmZZe5LoIfJuaeQ4/fY8P1pFIh9eEqgQVHgm3iS0NRTSfW5U3gm0cexmLNQcOpAlwWIzgN9lBb5snt1ZqTgMHOHhYGTVD6LViBFPVq54Vsdt9fIwX3l+/fQ+j/vuSCUokltckuj1fv9I5P2DaHmdRmLiLieXuI0ydJbcDmJlpXveYKNRY/wwHhJoWKRVPIdmrHN8SNpEvIeES5iyI1Onmec/4Gwiq0aFHfWXY28PMTw1z13YwVCCOtaKpDzF6RArj1AFMjpjgNoTGDXH7SRR9MqkInKaYC/Mz05CiBDWnFgjQt6c668evi6YXpWMOUqBT5SPw1p5DwUCHaD5LCHsPwuXIGUEX9TA4bmdj7L2iH5/fzeZQWiDjdsYiNx1ap6dxNuVEMYf+zDRVsT8zICJ21aAR+bZLa1sScWTaknO2/aK1yoRTGRRN6QBi2OccLq9+mILmfzKFPtWrPesVUbuakCEQBfPVAUiIuOu0UI68x5hLAI7fc7nApE07cwePcsMN6qPSq/v9tbE5KmA66wujpm1OvwGHux2uPvLx2wsvueqsWxxt9w61VEMlorEImEii5RjMZi0TkQa/2+q0FeelzTBG3Wy5yxTs/OxNs4vG2TkuhlKggdv6ygnFaUA18smD+9fcvHZjHmJGr7fM1a6HciXUY2BUV9znoq7+m8plDWRSXPL9q+/bo0r7WhHmVRTV15IB5sHkg2vQeix+uzs3qrVj7iE+7nnwQRzEuBuAymddmUjT9ZtW692uTbqnu8GDbZWB1c2quOrSpxBxnow2cNG5P5vo3H49mAEBaWElSGn8c2K/XCLlwvut6kpEB0aGi196clvPbG5kFo6OM/7Ilwewkyb/NlVCIjXztSE1eVKK9rjQvmrzXR8Nt3T9FhUfMbjVW1+0M7m8B9VfTYKMjtYn/8Wcx4pT6qftONUbMgVyjsijqQRSmQ0RYKYdFanCsyBxnjVCgspNZRvdQtS5+isP5+HiisCk9oopkb5jCkMuHRuRKM4KewITnLAoCiapr+xwslz+/x5M6MvSxIJfiDPMbkwlBYuwxZpKJsKtaZXTuU6d7qCAEXOePuvK9rFNHlj0zjP3veC/oH/mJyIOvWolUJ1dEivJA6dl6zMbdvv2GcM7AOfKghtWE/ayqOPYvKLJhub400xUmnVYTzsCZnCl8w+GAVlccElXTry/Sb9imnUV6N7+fHOhgVyBQhrLIHDvBE7UHOZEBwfp+R++AbT+yzGepAOoSjaoJjivBMucY4t+6j91WQVApTVV4wVSzFbAJdN7Ze/2XtfUwTAWjoBSy8DmQIcH9KfuoxAs6VjbzkuuR/KH9Oczneu1f/bXV1hzZsamsGcFOlymrX+OCR4xoXDW2GU7QZrTx8E84vrINtlmKtq/0daHUkDD6J78UFh0VNSJE8tNriOpVHp7Ok6wcEwBumhQnH5UpfURUuW6T3IRdDATW16WYMlXTM4AsyrMDhvLjFpQjvPoLw2qHF7OvwKHfrBOhEzmnzQlijrRLCclT87jYFp21bBJcavWHBrdOAyNlxGezLSCfQeXsgvnujpJdFFbRJFpfRWpp0kMHV6LkQePbrPTVaRfsEFt1v6kp0HZVxMP5uZB2IpGG3EGfxJELxQ52tIFSJqBaRH5CN5XP3SNOaJKSpfGyQR+0rwqsOYNsNXanqSjgBw92x4wjk+Jn4e1VfZfV/+3J6esUh1B6NNsFOq/ljNkqBmKJQOMXeYA7L6dxZv29vDnHcQxOMLn4s0wvFRr1tkgcSbz0PpOy1AbzIt76rRBMqYoWxcFehFzQuAF+hVvpUCoTUSqA3k7DowXgN1U9Z4QzwUDyIO5PdPpe0kYgU/J5ivaLFslJ2ag4eWk8wCLvNfbbjwlop8sLRmypAKIv0QJZJOP2jtLqffI4Eq4wI/xzW0Ul2ZqWkdzuujPz/ZaRpXtP1X6tE6CTn7Uxl+9ad+znfKegF8Cf579FbR243a2p+LGPV6qx/zQLwucia9rtqE1pV7ud5XOOpYMk6drsRiXTTaCunlb/YA4gwORrS4GqmeyMkjS6PLVEGxgdc432whbCy2RRIae2bdqLFGq5sc6DrZLAnS44aiirYeCUC66V0z8/igWChbNZbm0i8Sgbr/loJnl9SIppqh7Hb47iN/dX9e7HxE0mk3yLWHFEkvxNPhneK4t0aVmM5BuSsQCbdUTWQZmEKhBY06x7olDzWoSx/aBqZNWDj1f2MtPLH/ueCRU/DuRfqMr8DPAN1QONQvN3/u4kI7F0wB7hoPEk58ktz881YO5dJ/HW5jWYlrV5HMypCwrUUfXyj8iBagdQsOEMmabiCdM/3tpdud0uZXydhmfoA2G8IBqmldRCGsGZUIJR7aIAHkMM6tq+Csma135dz60fe6flYJ4fCTP1AlKV+thUuG5eg7ZjMVzmMPflBnt97UdvxKE8eJJ0AY5g2y4rstKYfCCoRmx7Fc5l1M+D8cbqFQ0UkYmEhLPpvZMx18c85gAMXIoGo5yx0Pmcqm5DBpbJWx5XnRAMAaZjKVE1LTV255YrBLi0AwlA6nmNiXR92l1Iu+nmimgz3fz6QYtrQlT8MV+rnvDAFYtE/f8pyeV2K7SUzo1TKXFsf8xzUhp9oUPBjLR+sCmTGENaEAZU3foK304PBJRi6QEtRxsur0YO6L/rZ9nhNpUA0SzPnLyDvGVmFp3ovfCBzhEzyIubowqo4P3Jf6XCLadaU5/n2V/TrIEoEvo48W3XzjOOM4z0uuKHadSScowfSIW0VEFhRc77q/idX4jrQlFA+kV4qg1eS2rjUUc2eqtKEogXyvBGlZlNF0TFItjVjd8KqquarYhYdXwpZVeRGmohGuaiuXJfOseKztGk6M5K6tcl9IFcNfr+nxbCXbnzWpP3AYUE62Dx/SAgRlz0KZHww14FQOve4zstlfCiKbpjXYs4KezJgvBsVkewtzqLHY6FeTppY28s7NYWu2vuYsSe6NiDzdrom/DZ0hk3zz/wOevrIGptyfu9YPg/m0CIXNTshRywxXi8XdEP8tJxJGhJqlceOnuhKIeyOOX/1gPPHSOZagHup8cRx/VeEwZKc7rCZgbsYD2TCSGNlw9DbE101mML8jeD8sbF+ThY9OOb8+UhGK5ShMS7X4dhXosof3rWwmjYL9bGrjvpjaiWi6xkAXpVZ2tVABdsgQjQr7vbtN0xUu0gxv9oXSk3xikUn0UuQQ4B/siqPx45+HR+c14IwG6bbvQk5CGzr10kfHmC8lT3RSwfgmBJd6tyC+ZuhChlXHHojXTyYkAS9ay5bKRDCLi3czMcTY25CI+ViwpGPg8kFwjDrDvcvIjbz742rDLoCtt73jKO6F8WybeVUNsUDKYXYGesJDr8i/GIuJTLUe632OYtSDH+nWA6XInnlQs8ww/oKcE/KXT9n2ozU9CZn8D0sRLpWUZ5M63ngpCflSt15ocjk4hvnUMLjN0CB5N4HwDZhtZx1dgxk0UM6M/Sb8CO/VDuAyV7ctNL6c3bS8mALYU3ZD8QmtBw52BSEY2xHpKCzSiHp0NXHfcbDrB0Jdf/v2B9mGU80osufZ+gnPpX9dr5E603s+VA5uL2ZVQAdu8c2JeGaYh4K5uCRzVFWwQG3IQrEytM+YGSq7b3Paj8PXW8pqe0be96faJ5B08RtTmdF7YZ19J2Ypycy1Ja9UiQ/RioGpB3BIsHslqaBzFJdzgNd77g4XObtMelQwR5S/LQwFBaJkz7X1T7TeB+gCrJuOX2jnarFrTZyQjvSxZPoomGqie4UnFC5584QljCW0HQKJLYUSDynEJaoYOOt6wcy8hfNjbWVKArK8yaEl748iv4OrTwuzDQxYQXbdb0C4c6GUiqkdK6iF4od4SgbKVW154TuT1F1iBHr/L5k3yUN9nMdQeiIhoQ8LQyc49Fp0NJWFPfaTIEQZm/dOtj1rPE81oo2AgEe2NkoJg1Dtcyi4yuqSufGs2T6V/T6htMeiwhdhGS2tSvZNRl8YQHKY0w7/Jnw1QKVh8klHHfcdRLdZMdCQsU65mo1EFqEAeGhTy+srnIPigLJxeDpxAMZu8gUZ6Rzt+Gso7kokPJYNykkvOfIU4mu9s35WP80LKzMeGoouTpc1IH+jYFqI+tldygQVU8lynw82bfHf2Aq6vNvq7xEPGU+NNHRhrjow71ccbDq/NK9JIOEXn/Ts4oL0+MH4KuYR0iKdtDDNuORADzSw9agPZBGfXMm0gUs+msrAS7i2c4t6c3gM2PhpOG8mgFkMzUiB3vnztAxsNVECwb7sFGSevA3uw4RCnVU4YfvzjNs5WnreuWg2+0uWoObynOABxKXO7b4qmKh+XIMlHa+IbWiIx08Uj1/nBQFp/paV9b3ZYN+3p5WI2tkCKug509IWGa/goF+JZtNgazbY6KoPNorkBz9c40qehuQz8zbQDNAws47+DwQ4l0k5Hlj9BA1kSgqVALEGNGeGhXUMXr+RclTR/RTt3uT2mJa6oG453BdkZ1+5RIHs4D+bFRUsmNgr68LAyfuPZ70RHQoTpgYvcrV1BlhVIkgWlMWEBZ0TAkJWVGFOPZ+vyYO5PAJHSYnKMP1ifHAgkxrPIwyBnh0VqaFMmtlrKMUFezjtpxEAATrAHfSRiNhDRdW2K3qeVOjOIq8yEeyftE6eqMomMobjLHbiiImuSgee2GsSIzvM3hOVaGa2vgPkkmoOSsPV6w/Bfi7RWvwMoAheh/itU2SsEcu/NvaMTgHH14UpFgvfkV0dxkWj8nvte8DLywsY/D0jmpPqmpXniXfo19n3btU+kXCtnlHQg6fM+NiPpN+bnOQw+5CWd9Gbjr7GeXva4pRWikQ655RgZRfT37217DfwlMI1PJYoXrSWDToQ3VYpCSHYLi09OtjBt/DeoamlcTkHp9pns09F9/xzYVRmIzdGNm9U2XVlu8dhuq+TW+QlCS4Y84vGao8XVMPntauYXU7Iq10JAA/V3XjHJe+W41drFCLROH+AtFutDeQex35x6Pkgcix7Jf3pdoHkiZFK/eGhma+73XR8LbDEwYnyg6NZJ0Imk/D59QXHW+daM9f/2VMBTRdK4v0RIpFWIQk0jlZ+Ib3voCrwdd1jNTGtOtBwAK7BODUcRE3FAtmE/5vH/fTovJPGBqRfcsR251fp6or/zePXrNvdXXHokJq5ZbD0fEx52/Eug9zH6DuBeBV8nfCwaSrYeXrOT9toO8fX8ejVyA3mSb9a6r8zLhwfh/5fnov+X2cit+FHGotDqnlIn/GT8j7x8Mp6nlOxd9jBq9D8kjSLnm59HNt7ebIgIvzYd4r54eflnB+MkLKS4pHhib5w2MG/16iQfcUfUnOKA7nCxknz++hsYel7lHSkthzwdTz5XPxsKq5oN+FexONm1j11vHduzzYAL6FTagwDNZxdPRs45FLC70b3RG58PCAl2Sr1d8v1FnyonVCGkiJKQXON91fxXg81HH+5F5Cr3dr7F2Uz6+Zb/le/DyhunZOY9TRZ80r86OnoseN0Y9RTXtq6ZEw+DHWAyFnWOmzNkt5TBS0cf4mFX+d1uIfE1RKWm53CZdKK0Ed1LtUmMquosdYtKSHl6yw81FmPsy+cplHNEnc2WKyaJe0zeeTzbZ0oIzJLK9t+l4zLjZvWHeti6HKlEcvwMMHASSCwekJj14dAzxXHgTdte4ExL3FITyvubANJ9lFFOABCYMX4qErGLwlzu/9FQOAJ+Fhr/dyR9F4zFDgWqZLOfLIGwjJccf/ChUUGjf4/UKyeEcnI7QcKZkoXVLbcduMvea7TwwhylApwDOlouLwZlwrOWs5fzkWJaac3/m327bdzFb8G927qHbxSCVSbhyTuth747LCMK8T1C3P43wXYmJtL+e3sB+8VBQlOyzyl2uadwofXEA4bUTqPl7S2YweICo2WndtoXtZcqFM5n3vbe+jRehwqs9t8N4lx/2vTHmwrEx78M1jLmhuouV8rcxhDS5NE8Mn7BtLbdbRosey4bNOO98ruzb4vGqnRJCQS1U+WpA4u/HTOLXiuCrR9BPkYsFiIkqFYEjmLEsfXWwZlyzeL3yQwjnlPRTqqpRjWN6EMa/krtrq97Koe1/E584y1tO8zxwSureG2vQTPTfmlPic55hV3bv0NOTflBE4/9zcklEKzrHL/6Y8nuUGc9B6PDZyT9pjrZ5r4nmN0b3J3n9jJZJJXvvoNQnA9zStgetKc4z0Vdi3HF1NpBmg3oaxrnbuPMxuuJOy3t1lYWCRHxk6emHMv5e7ysU0QboECRIkSJA2GpGGlhi7MfYaiSVMkZ+MIS6VJD0J/yb5cTiHifgvaktk4yWd04zi4PzeyJmfFrxB4wUUBzrzHoox+OcxY1Fni+Y9ggQJEuTAViQtuao6KjGOeHPF41+GC0qYIH+s4PB5rTgI5nyxisOC7ApVf6Lc8KUw20GCBAmyGI9kRXsRpJHNkond4f+hwkDF4QgFIVpCQSb36FBVSupCNkBxTFK2z5GcMEiQIEGCNFMmhfJwJMO1JL3eGnbMinn0GU3vTNhH041UHJ7ucaMU4LhOyH8ECRIkyOYKduASAHdCvDtyAwnFb0MQXKmDlXRDr0nG0BLLbPBCggQJEmTRHoj+OeD8LimDFyYA5yBdu+HEKXPXJ5vobVRVx49yJZJXlQYvJEiQIEEWLLppvGpG9LPsmNsYhTEqQlRiQxBVMxMoSvTXxde05LUJEiRIkCAzeCCdAor7lazMV5VssOIYO3ogNPVCynTpQYEECRIkyMYpEUyiC4AnycY3KnxFqK+HbQ/3abi2xoXnM5qmJgRpvuPVfr8TQllBggQJskGKhLJB7thxRE5wFn1JEK76dLItZWOlEpdbVHq5toTqPzHy92lu0AcdTgleSJAgQYJsrDeyQhsdyeR6XrX+FswvpISNlxzyGWmiI0Qe9qKXoL2khxbXVu41RJdj0x2kDM8AOLZXFRDtG012IGtE5x5zuIA8Q0BkBQkSJMjGKpKy9f5rxm4c5y0rT4k5/3TM4ae0L4hp2DLBr1X+u+pHfAU26pH0xgAPQ85++x6QdtrTF7qyyZV6z3eyfv9GwQsJEiRIkM1TJMs+CpTs6GNutc75nQcAj8YmMEoZvAcZcfO+0vCJmMFHEw7vl01lAF6GPPgDzu866K517ZaumrPL9DYGuJ4A+JbdT7uRAmHwTaSTDwokSJAgQbaKV+IgUpxZQcnPlMqklMzPvZDoIaQV5yhuAufNe4KcS78jzF6QIEGCbDXPBA//hl20dE+A3cV7Vipea5QJsvwqLySuoYQfmYJCgCd2AjNvkCBBghwQCmWppvNX6+YtGoIrAP5Y51pcSoSguwaYa0k47DZhsOB9BAkSJMih6+ngz5hFT5toy4uorhzZJckcsSOhTM6v9m7XCTUgQYIECRI8G/27AHi04PBLZydFrB8B+EICsL0TEudBggQJEsRWIhnAtpRHf5tw/rEE4KsIBU4YvBuhwNpbCcojSJAgQYKUlMhER8S8VmXJ/lsYrSBBggQJ4lIkK85e7Q2RYEGCBAkSJCgSg/gKoxEkSJAgQYIECRIkSJAgQYIECbJo+V/3eHlHgFltQwAAAABJRU5ErkJggg=="/>
                        </defs>
                      </svg>

                    </div>
                    <div class="audit-card__title"><p>As of August 1, 2021, we have passed the Ambisafe audit.</p></div>
                    <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="audit-grid__item coming-soon">
                <div class="audit-card">
                  <div class="audit-card__wrap">
                    <div class="audit-card__img">
                      <img src="@/assets/img/certik-logo.png" alt="">
                    </div>
                    <div class="audit-card__title"><p>Certik audit </p></div>
                     <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="audit-grid__item coming-soon">
                <div class="audit-card">
                  <div class="audit-card__wrap">
                    <a class="audit-link" href="#">
                      <svg width="188" height="35" viewBox="0 0 188 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.851 17.5911C31.851 14.8714 31.0695 12.2142 29.569 9.93215L35.1022 4.39893L30.9444 0.241211L25.4112 5.77443C20.7533 2.7421 14.7199 2.7421 10.062 5.77443L4.56007 0.241211L0.402344 4.39893L5.93556 9.93215C2.90323 14.59 2.90323 20.6234 5.93556 25.2813L0.402344 30.8145L4.56007 34.9723L10.0933 29.4391C14.7512 32.4714 20.7846 32.4714 25.4425 29.4391L30.9757 34.9723L35.1334 30.8145L29.6002 25.2813C31.0695 22.9993 31.851 20.3421 31.851 17.5911ZM9.53059 17.5911C9.53059 14.2462 11.5626 11.2139 14.6887 9.96341C17.8148 8.71297 21.3785 9.46323 23.6919 11.8703C26.0052 14.2774 26.6617 17.8725 25.2862 20.936L19.8468 15.4966L15.689 19.6543L21.1285 25.0938C18.5963 26.2504 15.6265 26.0003 13.2819 24.4998C10.9373 22.9993 9.53059 20.4046 9.53059 17.5911Z" fill="url(#paint0_linear)"/>
                      <path d="M61.7364 17.7789C61.7364 21.1864 60.0171 24.25 56.9535 25.6567L58.579 27.7825L55.2341 29.4706L52.9833 26.5008H52.9208C47.3876 26.5008 44.1051 22.4681 44.1051 17.7789C44.1051 13.0898 47.3876 9.05711 52.9208 9.05711C58.454 9.05711 61.7364 13.0898 61.7364 17.7789ZM52.9208 23.0621C56.0469 23.0621 57.7663 20.6237 57.7663 17.7477C57.7663 14.8717 56.0781 12.4333 52.9208 12.4333C49.7634 12.4333 48.0753 14.8717 48.0753 17.7477C48.0753 20.655 49.7634 23.0621 52.9208 23.0621ZM67.8949 26.3132C65.1751 26.3132 63.7059 24.6251 63.7059 21.6553V14.6216H67.3634V20.8738C67.3634 22.4368 67.8949 23.2809 69.2391 23.2809C70.7709 23.2809 71.4274 22.2805 71.4274 20.7487V14.6528H75.0224V26.0006H71.4274V24.375C70.8021 25.5942 69.6142 26.3132 67.8949 26.3132ZM82.5563 26.3132C79.1489 26.3132 77.2107 23.7498 77.2107 20.3423C77.2107 16.9349 79.3052 14.3715 82.6188 14.3715C84.2757 14.3715 85.5574 15.153 86.1826 16.3097V14.6841H89.7776V26.0319H86.1826V24.4375C85.5261 25.5317 84.1194 26.3132 82.5563 26.3132ZM83.5879 23.3434C85.3698 23.3434 86.3076 21.9992 86.3076 20.3423C86.3076 18.7168 85.4011 17.3725 83.5879 17.3725C81.9311 17.3725 80.8682 18.623 80.8682 20.3423C80.8682 22.0617 81.8998 23.3434 83.5879 23.3434ZM92.7162 14.6528H96.3112V16.3097C96.9677 15.028 98.2806 14.3402 100 14.3402C102.751 14.3402 104.158 15.9033 104.158 18.9669V26.0006H100.531V20.1548C100.531 18.2479 100 17.3725 98.5307 17.3725C97.0927 17.3725 96.3424 18.3104 96.3424 20.061V26.0006H92.7474V14.6528H92.7162ZM112.973 23.2184C113.411 23.2184 113.88 23.1871 114.224 23.1558V26.0319C113.692 26.1256 112.848 26.2194 111.817 26.2194C110.129 26.2194 107.784 25.8443 107.784 22.0617V17.5289H106.002V14.6841H107.784V11.3079H111.379V14.6841H113.942V17.5289H111.379V21.3114C111.41 22.937 112.098 23.2184 112.973 23.2184ZM120.851 26.3757C117.537 26.3757 115.474 24.7502 115.474 22.5931H119.069C119.069 23.3747 119.82 23.9374 120.945 23.9374C121.726 23.9374 122.258 23.531 122.258 22.8745C122.258 22.4368 122.039 22.0617 121.445 21.9054L118.663 21.1864C116.787 20.7175 115.818 19.5296 115.818 17.904C115.818 15.7782 117.694 14.309 120.664 14.309C123.977 14.309 125.728 15.6844 125.728 17.8415H122.164C122.164 17.0287 121.57 16.591 120.601 16.591C119.82 16.591 119.319 16.9662 119.319 17.5289C119.319 18.0603 119.663 18.3729 120.288 18.5292L122.977 19.2482C124.728 19.7171 125.853 20.78 125.853 22.4056C125.822 24.7814 123.977 26.3757 120.851 26.3757ZM134.012 23.2184C134.45 23.2184 134.919 23.1871 135.263 23.1558V26.0319C134.731 26.1256 133.887 26.2194 132.855 26.2194C131.167 26.2194 128.823 25.8443 128.823 22.0617V17.5289H127.041V14.6841H128.823V11.3079H132.418V14.6841H134.981V17.5289H132.418V21.3114C132.449 22.937 133.137 23.2184 134.012 23.2184ZM141.859 26.3132C138.451 26.3132 136.513 23.7498 136.513 20.3423C136.513 16.9349 138.607 14.3715 141.921 14.3715C143.578 14.3715 144.86 15.153 145.485 16.3097V14.6841H149.08V26.0319H145.485V24.4375C144.86 25.5317 143.453 26.3132 141.859 26.3132ZM142.921 23.3434C144.703 23.3434 145.641 21.9992 145.641 20.3423C145.641 18.7168 144.735 17.3725 142.921 17.3725C141.265 17.3725 140.202 18.623 140.202 20.3423C140.202 22.0617 141.233 23.3434 142.921 23.3434ZM152.05 14.6528H155.645V16.3097C156.145 15.1843 157.333 14.3402 158.896 14.3402C160.928 14.3402 161.96 15.2468 162.46 16.4347C163.085 15.2155 164.429 14.3402 166.086 14.3402C169.337 14.3402 170.119 16.591 170.119 18.9669V26.0006H166.492V19.6233C166.492 18.0603 165.898 17.3725 164.804 17.3725C163.679 17.3725 162.897 17.9978 162.897 20.1548V26.0006H159.271V19.5921C159.271 18.029 158.708 17.3725 157.583 17.3725C156.426 17.3725 155.645 17.9978 155.645 20.1548V26.0006H152.05V14.6528ZM172.963 14.6528H176.59V16.2784C177.184 15.1843 178.59 14.3402 180.279 14.3402C183.373 14.3402 185.499 16.7473 185.499 20.3111C185.499 23.8749 183.311 26.2819 180.185 26.2819C178.528 26.2819 177.152 25.4379 176.59 24.375V30.6898H172.995L172.963 14.6528ZM179.153 23.3434C180.716 23.3434 181.842 22.1242 181.842 20.3423C181.842 18.5917 180.747 17.3725 179.153 17.3725C177.528 17.3725 176.433 18.5605 176.433 20.3423C176.402 22.1242 177.528 23.3434 179.153 23.3434ZM186.468 17.0287C186.187 17.0287 185.906 16.9662 185.655 16.8098C185.437 16.6848 185.249 16.4972 185.124 16.2472C184.999 15.9971 184.936 15.747 184.936 15.4656C184.936 15.1843 184.999 14.9342 185.124 14.6841C185.249 14.434 185.437 14.2777 185.655 14.1214C185.906 13.9964 186.187 13.9026 186.468 13.9026C186.781 13.9026 187.031 13.9651 187.281 14.1214C187.5 14.2464 187.687 14.434 187.812 14.6841C187.937 14.9029 188 15.1843 188 15.4656C188 15.747 187.937 16.0283 187.812 16.2472C187.687 16.466 187.5 16.6848 187.281 16.8098C187.031 16.9662 186.75 17.0287 186.468 17.0287ZM186.468 16.7786C186.718 16.7786 186.937 16.7161 187.125 16.591C187.312 16.466 187.469 16.3097 187.562 16.1221C187.656 15.9345 187.719 15.7157 187.719 15.4656C187.719 15.2468 187.656 15.028 187.562 14.8091C187.375 14.4027 186.937 14.1527 186.499 14.1839C186.281 14.1839 186.062 14.2464 185.843 14.3715C185.655 14.4965 185.499 14.6528 185.405 14.8404C185.312 15.028 185.249 15.2468 185.249 15.4969C185.249 15.747 185.312 15.9658 185.405 16.1534C185.499 16.3409 185.655 16.4972 185.843 16.6223C185.999 16.7161 186.218 16.7786 186.468 16.7786ZM185.906 14.6528H186.531C186.687 14.6528 186.812 14.7154 186.937 14.8091C187.031 14.9029 187.093 15.0592 187.093 15.2155C187.093 15.3406 187.062 15.4344 187 15.5281C186.937 15.6219 186.843 15.6845 186.718 15.7157L187.062 16.2784H186.781L186.468 15.747H186.156V16.2784H185.906V14.6528ZM186.531 15.5281C186.625 15.5281 186.718 15.4969 186.75 15.4344C186.812 15.3718 186.843 15.2781 186.843 15.2155C186.843 15.1217 186.812 15.028 186.75 14.9654C186.687 14.9029 186.593 14.8717 186.531 14.8717H186.187V15.5281H186.531Z" fill="url(#paint1_linear)"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="0.402344" y1="17.6068" x2="188" y2="17.6068" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFC9B3"/>
                          <stop offset="1" stop-color="#F67D75"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="0.402344" y1="17.6068" x2="188" y2="17.6068" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFC9B3"/>
                          <stop offset="1" stop-color="#F67D75"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    </a>
                    <div class="audit-card__title"><p>Quantstamp audit </p></div>
                     <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="cursor">
      <div class="cursor__point"></div>
      <div class="cursor__point"></div>
      <div class="cursor__point"></div>
      <div class="cursor__point"></div>
    </div>
    <!-- <div class="title-shape"></div> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from '@mscalessio/vue2-swiper';
import 'swiper/swiper.scss';

export default {
  name: 'LandingMain',
  components: {
      Swiper,
      SwiperSlide,
  },
  data() {
    return {
      initialCounter: 0,
      loading: true,
      roadMap: [
        {
          date: {
            month: 'april',
            year: '2019'
          },
          focus: false,
        },
        {
          date: {
            month: 'september',
            year: '2020'
          },
          focus: false,
        },
        {
          date: {
            month: 'july',
            year: '2020'
          },
          focus: false,
        },
        {
          date: {
            month: 'october',
            year: '2021'
          },
          focus: false,
        },
        {
          date: {
            month: 'month',
            year: '2021'
          },
          focus: false,
        },
        {
          date: {
            month: 'july',
            year: '2022'
          },
          focus: false,
        },
         {
          date: {
            month: 'july',
            year: '2022'
          },
          focus: false,
        },
          {
          date: {
            month: 'october',
            year: '2022'
          },
          focus: false,
        },
          {
          date: {
            month: 'july',
            year: '2023'
          },
          focus: false,
        },
        {
        date: {
          month: 'september',
          year: '2024'
        },
        focus: false,
      },
      //   {
      //   date: {
      //     month: 'july',
      //     year: '2030'
      //   },
      //   focus: false,
      // },
      ],
      faq: [
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        },
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        },
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        },
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        },
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        }
      ],
      quarters: [
        {
          date: '2019',
          title: 'Q3',
          text: 'Initial forecasting of the idea implementation'
        },
        {
          date: '2020',
          title: 'Q2',
          text: 'First visible concept and team formation'
        },
        {
          date: '2020',
          title: 'Q4',
          text: 'First releases and whitepaper creation'
        },
        {
          date: '2021',
          title: 'Q3',
          text: 'Seed round (10% token\'s)'
        },
        {
          date: '2021',
          title: 'Q4',
          text: 'Release of the beta version Android / iOS application.'
        },
        {
          date: '2022',
          title: 'Q1',
          text: 'Round A/B/C Token sale (20% token\'s)'
        },
        {
          date: '2022',
          title: 'Q3',
          text: 'Public offering'
        },
         {
          date: '2022',
          title: 'Q4',
          text: 'Release of a completed platform for market relations between customers and companies'
        },
        {
          date: '2023',
          title: 'Q2',
          text: 'Moving to our own blockchain'
        },
        {
          date: '2024',
          title: 'Q1',
          text: 'Integration and contracts with various delivery services and transport companies. (Bringing them up to Blockchain)'
        },
        // {
        //   date: 'july 2030',
        //   title: '7Lorem ipsum dolor sit amet, adipiscing elit',
        //   text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        // },
      ],
      activeStep: 0,
      tokensInfoUnsorted: [
        {
          group: 'Foundation Team',
          percent: '10%',
          amh: '100 000 000'
        },
        {
          group: 'Seed',
          percent: '10%',
          amh: '100 000 000'
        },
        {
          group: 'Private sale 1 (A)',
          percent: '6.5%',
          amh: '65 000 000'
        },
        {
          group: 'Private sale 2 (B)',
          percent: '10%',
          amh: '100 000 000'
        },
        {
          group: 'Private sale 3 (C)',
          percent: '3.5%',
          amh: '35 000 000'
        },
        {
          group: 'Advisors',
          percent: '2%',
          amh: '20 000 000'
        },
        {
          group: 'Reserve',
          percent: '5%',
          amh: '50 000 000'
        },
        {
          group: 'Staking revards',
          percent: '3%',
          amh: '30 000 000'
        },
        {
          group: 'Ecosystem',
          percent: '50%',
          amh: '500 000 000'
        },
      ],
      news: [
        // {
        //   date: '21 april, 2022',
        //   title: '',
        //   text: 'Amphorium is a combination of simplicity and innovation in the world of logistics.',
        // },
        // {
        //   date: '21 april, 2022',
        //   title: '',
        //   text: 'It is designed to ensure a decentralized and credible system in logistics where all partners can work together on the same network. Customers and stakeholders are able to monitor all the processes.',
        // },
        // {
        //   date: '21 april, 2022',
        //   title: '',
        //   text: 'We are crypto enthusiasts who connect the bridge between logistics and blockchain technology. Hence, our blockchain technology ensures efficiency and security in logistics.',
        // },
        // {
        //   date: '21 april, 2022',
        //   title: '',
        //   text: 'This is a future technology based on its own blockchain, performing the mission of optimization of transportation.',
        // },
        // {
        //   date: '21 april, 2022',
        //   title: '',
        //   text: 'The world\'s first blockchain aimed at simplifying documentation and payment for services in the logistics sector.',
        // },
        // {
        //   date: '21 april, 2022',
        //   title: '',
        //   text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        // },
        // {
        //   date: 'June 2021',
        //   title: '',
        //   text: 'Take a look at Aphorium’s second-quarter results report for the current year. Financial results show the progress made from 2017. Based on its blockchain technology and its ERC-20 tokens, Amphorium aims to lead the industry, helping all of the agents involved in global trading.'
        // },
        {
          date: 'May 2021',
          title: '',
          text: 'Amphorium expands collaborations. To provide the best possible service in optimizing the transportation process through decentralized blockchain technology, Amphorium expands its circle of collaboration with various business partners, such as Chainlink, Crust, Polygon, and UniLend.'
        },
        {
          date: 'April 2021',
          title: '',
          text: 'Amphorium announces the release of beta versions of Android/iOS applications. This way Amphorium expands its accessibility both on the Web and on smartphones. Now Amphorium is available anywhere and anytime. This well-designed application version of our website can be used easily, quickly, and efficiently by our customers and partners.'
        },
        {
          date: 'April 2020',
          title: '',
          text: 'Amphorium creates its first whitepaper. The first whitepaper, which explains the technology, introduces the company’s background, and provides essential guidelines for potential customers is set up by Amphorium. Have a look at our whitepaper for any additional thorough information.'
        },
        {
          date: 'April 2017',
          title: '',
          text: 'Amphorium analyzes the current data and conducts research on the use of blockchain technology in logistics. According to the research, a blockchain-based system reduces human errors, fraud, and expenditure. Hence, it optimizes and facilitates the transportation process.'
        },
      ],
      // amphorImg: [
      //   1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
      // ],
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: "right"
        },
        rail: {
          background: "#161616",
          opacity: 1,
          size: "16px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
        },
        bar: {
          size: "16px",
          showDelay: 500,
          onlyShowBarOnScroll: false,
          keepShow: true,
          background: "#292929",
          opacity: 1
        }
      },
      swiperOptions: {
        breakpoints: {
          992:{
            slidesPerView:2
          },
          1125:{
            slidesPerView:3,
            spaceBetween:50
          }
        }
      }
    }
  },
  computed: {
    tokenInfo(){
      const tokens = this.tokensInfoUnsorted;
      return tokens.sort((a,b)=>{
        return parseFloat(b.percent)-parseFloat(a.percent)}
        )
    },
    isMob(){
       if (window.innerWidth<=768){
         return true
       }

       return false
    }
  },
  methods: {
    textLighting(event){
      this.$emit('mousemove',event)
    },
    resetTextLighting(event){
     this.$emit('mouseleave', event)

    },
    nextSlide(e) {
      if (this.initialCounter === this.roadMap.length - 1) return false
      e.preventDefault()
      this.initialCounter++;
      this.setActiveSlide();
      this.slider()
    },
    prevSlide(e) {
      if (this.initialCounter === 0) return false
       e.preventDefault()
      this.initialCounter--;
      this.setActiveSlide();
      this.slider()
    },
    chooseSlide(e){
     const points =  document.body.querySelectorAll('.point-circle');
     for (let i = 0; i < points.length; i++){
       if (e.target.closest('.point-circle') ===points[i]){
         console.log(i);
          this.initialCounter=i-1;
          if (i === 0) this.initialCounter=points.length-1
          this.setActiveSlide();
          this.slider()
       }
     }
    },
    slider(){
      let bar=  this.$refs.bar;
      let barBg=  this.$refs.barBg;
      let maxStep = this.roadMap.length;
      let step = 100/maxStep;
      let barWidth = this.$refs.cont.offsetWidth;
        var val = step*(this.initialCounter+1);
        var $circle = bar;
          
        if (window.innerWidth< 600){
          bar.setAttribute('r',barWidth/2-7);
          bar.setAttribute('cx',barWidth/2);
          bar.setAttribute('cy',barWidth/2);
          barBg.setAttribute('r',barWidth/2-7);
          barBg.setAttribute('cx',barWidth/2);
          barBg.setAttribute('cy',barWidth/2);
          bar.setAttribute('stroke-dasharray',(2 * Math.PI * bar.getAttribute('r')));
        }
        // }
        // else{
          var r = $circle.getAttribute('r');
          var c = Math.PI*(r*2);
        
          if (val < 0) { val = 0;}
          if (val > 100) { val = 100;}
          
          var pct = ((100-val)/100)*c;
            $circle.style.strokeDashoffset= pct;
          // }
          
          let points = document.querySelectorAll('.point-circle');//count length from roadmap
         let centerX = barWidth/2;
          points[0].style.left=centerX -points[0].getBoundingClientRect().width/2+'px'; 
          let pointWidth = points[0].getBoundingClientRect().width;
          if (points.length){
            for (let i = 1; i< points.length; i++){
              setPoint(step*i,i);
             
            }
          }
          function setPoint(value, i){
              let a = percentToRad(value)
              let leftPos =  2*barWidth/2 * Math.pow(Math.cos((Math.PI - ( (Math.PI/2) -a) )/2 ),2); 
              let topPos =  2*barWidth/2 * Math.cos((Math.PI-a)/2) * Math.cos( ( (Math.PI-a)/2 ) );
            points[i].style.left = leftPos +'px';
             points[i].style.top =topPos + 'px';
             const title = document.body.querySelectorAll('.calendar-info__drop');
             if (value<25){
                points[i].style.left = leftPos - Math.sqrt(2*pointWidth*pointWidth)/4+'px';
                points[i].style.top = topPos - Math.sqrt(2*pointWidth*pointWidth)/4 +'px';
                // console.log( pointWidth);
                title[i-1].style.transform= `translate(-100%, -100%)`
             }else if (value<50){

                points[i].style.left = leftPos - Math.sqrt(2*pointWidth*pointWidth)/4+'px';
                points[i].style.top = topPos - Math.sqrt(2*pointWidth*pointWidth)/2  +'px';
                title[i-1].style.transform= `translate(-80%, 80%)`
             }else if (value<75){

              points[i].style.left = leftPos - Math.sqrt(2*pointWidth*pointWidth)/2+'px';
                points[i].style.top = topPos - Math.sqrt(2*pointWidth*pointWidth)/2 +'px';
                 title[i-1].style.transform= `translate(120%, 100%)`;
             }else if (value<100){
                points[i].style.left = leftPos - (Math.sqrt(2*pointWidth*pointWidth)/2 )-7+'px';
                points[i].style.top = topPos - (Math.sqrt(2*pointWidth*pointWidth)/2) +7 +'px';

                title[i-1].style.transform= `translate(120%, -150%)`;
             }
            
             if(val===100){
                title[i].style.transform= `translate(40%, -220%)`;
             }
          }
          function percentToRad(perc){
            return (perc*2*Math.PI)/100
          }
      // });
    },
    toSlide(idx) {
      this.initialCounter = idx;
      this.setActiveSlide();
    },
    setActiveSlide() {
      this.roadMap.forEach((item, idx) => {
        item.focus = idx === this.initialCounter;
      })
    },
    wheel(e) {
      if (e.deltaY < 0) {
        this.prevSlide(e);
      } else {
        this.nextSlide(e);
      }
    },
    changeStep(idx) {
      this.activeStep = idx;
    },
    overlay(){
      let logoDiv = this.$refs.logoSection; 
      let logoDivTwo = this.$refs.logoSectionTwo;
      let next = this.$refs.nextSection;
      let nextTwo = this.$refs.nextSectionTwo;
      // console.log(document.documentElement.clientHeight,'documentElement.clientHeight');
      let screenHeight = document.documentElement.clientHeight;
      // console.log(logoDiv);
      
      overlayLogo(logoDiv,next)
      overlayLogo(logoDivTwo,nextTwo)

      function overlayLogo(logo, nextSection){
        document.addEventListener('scroll',()=>{
          let logoDivTop=logo?.offsetTop;
          let nextTop = nextSection?.offsetTop
          if ((window.pageYOffset + screenHeight )> logoDivTop
          && window.pageYOffset<nextTop-500){
            let k = 0.2 
            let pos = window.pageYOffset + screenHeight - logoDivTop -150; //150 - bottom offset
            if (k*pos<1) pos=1/k;
            // if(logo) logo.style.transform=`scale(${pos*k}) translateY(${pos*0.02}%) translateZ(0)`
            // console.log(logo.childNodes[0]);
            // logo.childNodes[0].style.transform=`scale(${pos*k}) translateY(${pos*0.02}%) translateZ(0)`
            logo.childNodes[0].style.transform=`translateY(${pos*0.02}%) translateZ(0)`
            logo.childNodes[0].style.width=`${pos*k*100}px`
            // if(logo) logo.childNodes[0].style.height=`auto`
          }else{
            // if (logo) logo.childNodes[0].style.width=`${100}px`
            if (logo) logo.childNodes[0].style.width=`${0}px`
          }

          // console.log('scroll',pageYOffset )
        })
      }
    },
    amphorInit(){
      
        // const mainImage = document.getElementById('main-img');
     
        let counter = 0;
                changeImage(19,'#main-img', '.main-banner__img');//first img
                changeImage(20,'.about__img', '.about__img__img');//first img
            if (!this.isMob){
              document.addEventListener('scroll', function () {
                changeImage(19,'#main-img', '.main-banner__img');
                changeImage(20,'.about__img', '.about__img__img');
              });
            }


      

        function changeImage(quantityImages, imgWrapSelector, imgSelector) {
               const wrapper = document.body.querySelector(imgWrapSelector);

                const top =wrapper.getBoundingClientRect().top;
                const height = wrapper.getBoundingClientRect().height;
                  counter =   (window.pageYOffset*quantityImages) / (top + height*3||1000);
                  wrapper.querySelectorAll(`${imgSelector}`).forEach(item=>{
                    item.style.display="none";
                     
                    })
                if (counter<1) counter = 1;
                if (counter >= quantityImages){
                  counter = quantityImages
                }
                wrapper.querySelector(`${imgSelector}--${Math.round(counter)}`).style.display="block";
                wrapper.querySelector(`${imgSelector}--${Math.round(counter)}`).style.visibility="visible";
                
        }
        // changeImage()

        
    }
    
  },
  mounted() {
     this.$nextTick(() => {
       
         this.setActiveSlide();
         setTimeout(() => {
           if (!this.isMob){
             this.overlay()
           }
            this.slider()
            this.amphorInit()

            document.body.querySelector('#cont').addEventListener('click',this.chooseSlide)
         }, 30);
      });
  },
  
}
</script>
<style lang="scss">
  .main-banner__title{
     h1{ 
       color: #fff;    
       background-clip: text;
      //  background-image: radial-gradient(circle at 170px 40px, rgb(209, 12, 12) 0%, #fff 6rem);
     }
  }
  .calendar-info__drop{
    pointer-events: none;
  }
    /* #cont:after {//show percentage
  position: absolute;
  display: block;
  height: 160px;
  width: 160px;
  left: 50%;
  top: 50%;
  box-shadow: inset 0 0 1em black;
  content: attr(data-pct)"%";
  margin-top: -80px;
  margin-left: -80px;
  border-radius: 100%;
  line-height: 160px;
  font-size: 2em;
  text-shadow: 0 0 0.5em black;
} */

</style>
