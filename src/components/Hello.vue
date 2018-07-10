<template>
  <b-card no-body>
    <b-card-body id="nav-scroller" ref="content" style="position:relative; height:98vh; overflow-y:scroll;" class="p-0">
      <b-jumbotron fluid
                  class="m-0 text-center" 
                  style="position:relative; font-family: Arial, Helvetica, sans-serif" 
                  header="Ridge Crest Sidewalk Project" 
                  header-level="3"
                  bg-variant="dark" text-variant="light">
                  <h3 :slot="lead">An effort to complete the sidewalk along Ridge Crest Drive and adjacent streets</h3>
                  <p>Scroll down to learn more</p>
                  <div align="center" class="">
                    <b-button @click="scrollTo('#rcsp-issues')" class="mb-4">
                      <img :src="require('@/components/circle.png')" width="50" height="50"/>
                    </b-button>
                  </div>
      </b-jumbotron>
      <b-navbar toggleable="sm" sticky="true" type="dark" variant="dark" style=";" class="" >
        <b-navbar-brand><b-img :src="require('@/components/ridge_crest_logo2.svg')" width="100" height="50" ></b-img></b-navbar-brand>
        <h3 v-if="isMobile" class="text-white text-canter" >{{activeNavItem}}</h3>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav fill pills v-b-scrollspy:nav-scroller class="" style="">
            <b-nav-item href="#rcsp-issues" class="">
              <i class="fa fa-exclamation-triangle fa-lg"></i> Issues
            </b-nav-item>
            <b-nav-item href="#rcsp-benefits">
              <i class="fa fa-thumbs-up fa-lg"></i> Benefits
            </b-nav-item>
            <b-nav-item href="#rcsp-map">
              <i class="fa fa-map-marker fa-lg"></i> Map
            </b-nav-item>
            <b-nav-item href="#rcsp-process">
              <i class="fa fa-list-ol fa-lg"></i> Process
            </b-nav-item>
            <b-nav-item href="#rcsp-progress">
              <i class="fa fa-spinner fa-lg"></i> Progress
            </b-nav-item>
            <b-nav-item href="#rcsp-faq">
              <i class="fa fa-question-circle fa-lg"></i> FAQ
            </b-nav-item>
            <b-nav-item href="#rcsp-info">
              <i class="fa fa-info-circle fa-lg"></i> Info
            </b-nav-item>
            <b-nav-item href="#rcsp-support">
              <i class="fa fa-life-ring fa-lg"></i> Support
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-container  fluid class="px-0" id="rcsp-issues" name="Issues">
        <br><br><br>
        <carousel/>
      </b-container>
      <b-container fluid class="px-0" id="rcsp-benefits" name="Benefits" >
        <br><br><br>
        <features/>
      </b-container>
      <b-container fluid class="px-0" id="rcsp-map" name="Map" >
        <br><br><br><br>
        <b-embed style="" id="gmap" type="iframe" aspect="" src="https://www.google.com/maps/d/u/0/embed?mid=15U0H8mVvYEiDeIDQaSW3iyQtWsA6Ikdq"></b-embed>
      </b-container>
      <b-container id="rcsp-process" name="Process" >
        <br><br><br>
        <timeline class="mx-auto" style="width: 200px;">
          <timeline-item class="ml-3" v-for="(action,index) in actions" :key="action.id">
            <i slot="others" class="fas fa-2x" :class="action.icon"></i>
            <b-container>
              <b-row class="font-italic" >Step {{index+1}}</b-row>
              <b-row>{{action.item}}</b-row>
            </b-container>
          </timeline-item>
        </timeline>
      </b-container>
      <b-container id="rcsp-progress" class="p-3" name="Progress" >
        <br><br><br><br>
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
        <br><br><br><br>
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
        <br><br><br><br>
      </b-container>
      <b-container fluid id="rcsp-info" name="Info" >
        <br><br><br><br>
        <b-list-group>
          <b-list-group-item href="#" v-for="item in info" :key="item.id">{{item.message}}</b-list-group-item>
        </b-list-group>
        <br><br><br><br>
      </b-container>
      <b-container fluid id="rcsp-support" class="bg-dark text-white" style="" name="Support" >
        <br><br><br><br>
        <h2 class="text-center">Let us know if you're interested?</h2>
        <p class="text-center">Questions, comments and concerns are welcome</p>
        <b-form id="contact_form" class="mx-auto" style="width:90%;" @submit="submitForm" action="">
          <b-form-group class="" label="Name:" label-for="name">
            <b-form-input required v-model="form.name" :state="isValidName" name="name" type="text" placeholder="Enter you name"/>
          </b-form-group>
          <b-form-group class="form-group" label="Email" label-for="email">
            <b-form-input required v-model="form.email" :state="isValidEmail" name="email" type="email" placeholder="youremail@domain"/>
          </b-form-group>
          <b-form-group class="form-group" label="Message">
            <b-form-textarea required v-model="form.message" :state="isValidMessage" name="message" :rows="6" :max-rows="12" class="" ></b-form-textarea>
          </b-form-group>
          <b-button type="submit" class="btn btn-dark">Send</b-button>
        </b-form>
        <br>
      </b-container>
      <footer class="page-footer font-small bg-dark">
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
        <div class="footer-copyright text-center py-3">
          <p class="text-white">Ridge Crest Sidewalk Project</p>
        </div>
      </footer>
      
    </b-card-body>
  </b-card>
</template>

// <script>
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
  
  export default {
    name: 'hello',
    data() {
      return {
        actions: [
          {
            id: 1,
            icon: 'fa-search',
            item: 'Identify Parcel Owners'
          },
          {
            id: 2,
            icon: 'fa-envelope',
            item: 'Get the Word Out'
          },
          {
            id: 3,
            icon: 'fa-edit',
            item: 'Obtain Owner Signature'
          },
          {
            id: 4,
            icon: 'fa-share-square',
            item: 'Submit Petitions'
          },
          {
            id: 5,
            icon: 'fa-clock',
            item: 'Conduct Analysis'
          },
          {
            id: 6,
            icon: 'fa-gavel',
            item: 'Participate in Hearing'
          },
          {
            id: 7,
            icon: 'fa-check',
            item: 'Receive Approval'
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
            question: 'Does the sidewalk have to be on both sides?',
            answer: 'No',
            toggled: false
          },
          {
            id: 2,
            question: 'What if everyone doesn\'t participate?',
            answer: 'The project can be scoped to a portion of the overall goal.',
            toggled: false
          },
          {
            id: 3,
            question: 'How much will it cost?',
            answer: 'If it costs too much after engineering analysis, you don’t have to pay.',
            toggled: false
          },
          {
            id: 4,
            question: 'How is the cost for each parcel calculated?',
            answer: 'Cost is attributed to square footage using depth, length and width.',
            toggled: false
          },
          {
            id: 5,
            question: 'How do we pay for it?',
            answer: 'Tax assessment paid by land owners to Town of Copley.',
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
            message: 'Copley is embarking on a “Complete Streets” effort: proposing streets that are inclusive of pedestrians, cyclists, and people in wheelchairs.'
          },
          {
            id: 3,
            message: 'Every intersection requires handicap cross sections.'
          },
          {
            id: 4,
            message: 'If any parcel has a hill, right-of-way may have to be obtained.'
          }
        ],
        form: {
          name: '', // data for the name on the form
          email: '', // data for the email on the form
          message: '' // data for the message on the form
        },
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
      submitForm: function(evt) {
        evt.preventDefault()
        this.$http({
          url: '/someUrl',
          method: 'POST',
          data: {
            name: this.form.name,
            email: this.form.email,
            message: this.form.message
          }
        }).then(function() {
          alert('Your form was submitted!')
        }, function() {
          alert('Form submission failed')
        })
      },
      onActivate: function(target) {
        // console.log('Receved Event: scrollspy::activate for target ', target)
        this.activeNavItem = $(target).attr('name')
        this.isMobile = md.mobile()
      },
      scrollTo: function(evt) {
        // evt.preventDefault()
        console.log(evt)
        this.$scrollTo(evt, 2000)
        $('html, body').animate({
          scrollTop: $(evt).offset().top
        }, 2000)
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
    /* background-image: url("../assets/ridgecrest.jpg") !important; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-color: rgb(201, 76, 76,.5) !important; */
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url("../assets/cross-road2.jpg");
    position: fixed;
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
