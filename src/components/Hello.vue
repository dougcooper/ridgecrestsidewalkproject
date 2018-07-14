<template>
<div>
    <div id="nav-scroller">
      <b-jumbotron fluid sticky
                  class="m-0 text-center" 
                  style="position:relative; font-family: Arial, Helvetica, sans-serif" 
                  header="Ridge Crest Sidewalk Project" 
                  header-level="3"
                  bg-variant="dark" text-variant="light">
                  <h3 :slot="lead">An effort to complete the sidewalk along Ridge Crest Drive and adjacent streets</h3>
                  <p>Scroll down to learn more or click <a href="#" @click="scrollTo('#rcsp-support')"><b>here</b></a> to support</p>
                  <div align="center" class="">
                    <b-button @click="scrollTo('#rcsp-issues')" class="mb-4">
                      <img :src="require('@/components/circle.png')" width="50" height="50"/>
                    </b-button>
                  </div>
      </b-jumbotron>
      <b-container  fluid class="px-0" id="rcsp-issues" name="Issues">
        <br><br><br>
        <h1 class="text-center">Why do we need sidewalks?</h1>
        <br><br>
        <carousel/>
      </b-container>
      <b-container fluid class="px-0" id="rcsp-benefits" name="Benefits" >
        <br><br>
        <h1 class="text-center">What are the additional benefits?</h1>
        <br><br>
        <features/>
      </b-container>
      <b-container fluid class="px-0" id="rcsp-map" name="Map" >
        <br><br>
        <h1 class="text-center">What are the proposed routes?</h1>
        <br><br>
        <b-embed style="" id="gmap" type="iframe" aspect="" src="https://www.google.com/maps/d/u/0/embed?mid=15U0H8mVvYEiDeIDQaSW3iyQtWsA6Ikdq"></b-embed>
      </b-container>
      <b-container id="rcsp-process" name="Process" class="mx-auto mx-2">
        <br><br>
        <h1 class="text-center">What is the process for moving forward?</h1>
        <br><br>
        <timeline class="" style="">
          <timeline-item class="pl-3" v-for="(action,index) in actions" :key="action.id">
            <i slot="others" class="fas fa-2x" :class="action.icon"></i>
            <b-container>
              <b-row >
                <b-col>
                  <b-row class="font-italic" >Step {{index+1}}</b-row>
                  <b-row><b>{{action.item}}</b></b-row>
                </b-col>
                <b-col class="" sm="9">
                  <p>{{action.description}}</p>
                </b-col>
              </b-row>
            </b-container>
          </timeline-item>
        </timeline>
      </b-container>
      <b-container id="rcsp-progress" class="p-3" name="Progress" >
        <br><br>
        <h1 class="text-center">How many signatures obtained so far?</h1>
        <br><br>
        <div class="row p-3">
          <div class="col-sm text-center" v-for="location in progress" :key="location.id">
            <vue-circle :progress="location.completed" 
                        :size="100" 
                        :reverse="false" 
                        line-cap="round" 
                        :fill="fill" 
                        empty-fill="rgba(0, 0, 0, .1)" 
                        :animation-start-value="0.0" 
                        :start-angle="0" 
                        insert-mode="append" 
                        :thickness="5" 
                        :show-percent="true" 
                        @vue-circle-progress="progress"
                        @vue-circle-end="progress_end">
            </vue-circle>
            <p>{{location.street}}</p>
          </div>
        </div>
        <br><br>
      </b-container>
      <b-container fluid id="rcsp-faq" class="" style="background-color: white;" name="FAQ" >
        <br><br>
        <h1 class="text-center">FAQ</h1>
        <br><br>
        <v-collapse-group :onlyOneActive="true" class="list-group">
          <v-collapse-wrapper class="list-group-item list-group-item-action" v-for="qa in questions" :key="qa.id" v-on:onStatusChange="qa.toggled=!qa.toggled">
              <div v-collapse-toggle>
                  <i v-bind:class="{'fa-rotate-90': qa.toggled}" class="fas fa-angle-right fa-lg"/> {{qa.question}}
              </div>
              <div class="font-italic" v-collapse-content>
                <br>
                  {{qa.answer}}
              </div>
          </v-collapse-wrapper>
        </v-collapse-group>
        <br><br>
      </b-container>
      <b-container fluid id="rcsp-info" name="Info" >
        <br><br>
        <h1 class="text-center">Additional Info</h1>
        <br><br>
        <b-list-group>
          <b-list-group-item href="#" v-for="item in info" :key="item.id">{{item.message}}</b-list-group-item>
        </b-list-group>
        <br><br>
      </b-container>
      <b-jumbotron fluid id="rcsp-support" name="Support"
                  class="m-0 text-center" 
                  style="position:relative; font-family: Arial, Helvetica, sans-serif" 
                  header-level="3"
                  bg-variant="dark" text-variant="light">
                  <br><br><br><br>
                  <h1 :slot="header" class="text-center">Let us know if you're interested</h1>
                  <p :slot="lead">Send us an <a href="mailto:ridgecrestsp@gmail.com"><b>email</b></a> 
                    and connect with us to stay up to date.</p>
                  <br>
                  <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                      <b-button class="btn btn-dark btn-lg btn-circle" href="https://fb.me/rcspcopley">
                        <i class="fab fa-facebook-f fa-lg"> </i>
                      </b-button>
                    </li>
                    <li class="list-inline-item">
                      <b-button class="btn btn-dark btn-lg btn-circle" href="https://twitter.com/rcsp7">
                        <i class="fab fa-twitter fa-lg"></i>
                      </b-button>
                    </li>
                    <li class="list-inline-item">
                      <b-button class="btn btn-dark btn-lg btn-circle" href="https://plus.google.com/u/2/109929461810031001399">
                        <i class="fab fa-google-plus-g fa-lg"></i>
                      </b-button>
                    </li>
                  </ul>
      </b-jumbotron>
      </div>
    </div>
</template>

<script>
  import {
    Timeline,
    TimelineItem,
    TimelineTitle
  } from 'vue-cute-timeline'
  import Carousel from '@/components/Carousel'
  import Features from '@/components/Features'
  import Vue from 'vue'
  import VueCollapse from 'vue2-collapse'
  import VueCircle from 'vue2-circle-progress'
  import $ from 'jquery'
  import MobileDetect from 'mobile-detect'
  const VueScrollTo = require('vue-scrollto')
  Vue.use(VueScrollTo)
  Vue.use(VueCollapse)
  var md = new MobileDetect(window.navigator.userAgent)

  $(window).on('activate.bs.scrollspy', function(e) {
    history.replaceState({}, '', $('.nav-item .active').attr('href'))
  })
  
  export default {
    name: 'hello',
    data() {
      return {
        actions: [
          {
            id: 1,
            icon: 'fa-search',
            item: 'Identify Parcel Owners',
            description: 'Create a list of every property, including all owners listed on the deed, along the proposed route.'
          },
          {
            id: 2,
            icon: 'fa-envelope',
            item: 'Get the Word Out',
            description: 'Lines of communication will be established to provide information to property owners.'
          },
          {
            id: 3,
            icon: 'fa-edit',
            item: 'Obtain Owner Signature',
            description: 'The petition must be signed in blue ink by every individual whose name is on the deed.'
          },
          {
            id: 4,
            icon: 'fa-share-square',
            item: 'Submit Petitions',
            description: 'Petitions will be submitted to the town of Copley for review.'
          },
          {
            id: 5,
            icon: 'fa-clock',
            item: 'Conduct Analysis',
            description: 'Once signatures have been obtained from 51% of property owners on a particular street segment, an engineer will be assigned to asses the feasibility and cost.'
          },
          {
            id: 6,
            icon: 'fa-gavel',
            item: 'Participate in Hearing',
            description: 'Prior to implementation a town hearing will be held to give all affected parties the opportunity to discuss the proposal.'
          },
          {
            id: 7,
            icon: 'fa-check',
            item: 'Receive Approval',
            description: 'Once the approval has been made the town will sell bonds to fund the installation, which may be partially back paid in taxes by residents.'
          }
        ],
        progress: [
          {
            id: 1,
            street: 'Ridge Crest Dr',
            completed: 0
          },
          {
            id: 2,
            street: 'Redfield Ln',
            completed: 0
          },
          {
            id: 3,
            street: 'Heritage Woods Dr',
            completed: 0
          }
        ],
        questions: [
          {
            id: 1,
            question: 'Does the sidewalk have to be on both sides of the street?',
            answer: 'No',
            toggled: false
          },
          {
            id: 2,
            question: 'What if everyone doesn\'t participate?',
            answer: 'The project can be scoped to a portion of the overall goal, but we need 51% for a particular stretch of road.',
            toggled: false
          },
          {
            id: 3,
            question: 'How much will it cost?',
            answer: 'The town cannot provide an estimate yet, but if estimated costs from the engineering analysis are too much, you can voice concerns at the hearing.',
            toggled: false
          },
          {
            id: 4,
            question: 'How is the cost for each parcel calculated?',
            answer: 'Cost is attributed to square footage using depth, length and width - you may end up paying a bit more if you have a larger property.',
            toggled: false
          },
          {
            id: 5,
            question: 'How do we pay for it?',
            answer: 'Potential tax assessment paid by land owners to Town of Copley after sale of bonds.',
            toggled: false
          }
        ],
        info: [
          {
            id: 1,
            message: 'New Copley subdivisions are beginning to require sidewalks.'
          },
          {
            id: 2,
            message: 'Copley is embarking on a “Complete Streets” effort, proposing streets that are inclusive of pedestrians, cyclists, and people in wheelchairs.'
          },
          {
            id: 3,
            message: 'Every intersection requires a handicap cross sections.'
          },
          {
            id: 4,
            message: 'If any parcel has a hill, right-of-way may have to be obtained.'
          }
        ],
        activeNavItem: '',
        isMobile: false
      }
    },
    created: function() {
      // window.addEventListener('scroll', this.handleScroll)
      this.$root.$on('bv::scrollspy::activate', this.onActivate)
    },
    destroyed: function() {
      // window.removeEventListener('scroll', this.handleScroll)
    },
    computed: {
      isValidName: function() {
        var regex = /^[ ]/
        return this.form.name.length > 0 && !regex.test(this.form.name)
      },
      isValidEmail: function() {
        var regex = /^.+@.+$/
        return regex.test(this.form.email)
      },
      isValidMessage: function() { // what is message is just spaces?
        var regex = /^[ ]/
        return this.form.message.length > 0 && !regex.test(this.form.message)
      }
    },
    methods: { // all the actions our app can do
      checkMessage: function() {
        // TODO keep the message below maxMessageLength?
        //      or maybe change the text, background, or counter color?
      },
      onActivate: function(target) {
        this.activeNavItem = $(target).attr('name')
        this.isMobile = md.mobile()
        // history.replaceState({}, '', $('.nav-item .active').attr('href'))
      },
      scrollTo: function(evt) {
        $('html, body').animate({
          scrollTop: $(evt).parent().scrollTop() + $(evt).offset().top - $(evt).parent().offset().top
        }, 750)
      }
    },
    components: {
      Timeline,
      TimelineItem,
      TimelineTitle,
      Carousel,
      Features,
      VueCircle
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jumbotron {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url("../assets/ridgecrest.jpg");
    /* position: fixed; */
  }

  #rcsp-support {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url("../assets/cross-road2.jpg");
    
  }

  .j-button{
    position: absolute;
    bottom:0;  
  }
  .navbar-nav>li {
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
  }
  
  #gmap {
    position: relative;
    height: 75vh;
    /* width: 100vw; */
  }

  .rcsp-info {
    margin-top: 1em;
    min-width: 25%;
  }

  .btn-circle {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  
  .full-page {
    height: 100vh;
    width: 100vw;
  }

  .v-collapse-content{
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
    padding: 0;
}

.v-collapse-content-end{
    transition: max-height 0.1s ease-in;
    max-height: 500px;
}
.btn {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
}
</style>
