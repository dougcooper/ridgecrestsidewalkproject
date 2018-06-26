<template>
  <div>
    <b-navbar toggleable="md" 
              type="dark" 
              variant="primary" 
              sticky="true">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="mx-auto p-3">
          <b-nav-item v-scroll-to="{el: '#rcsp-issues',   offset: function(){return -100;}}">
            <i class="fa fa-exclamation-triangle fa-lg"></i> Issues
          </b-nav-item>
          <b-nav-item v-scroll-to="{el: '#rcsp-benefits', offset: -100}">
            <i class="fa fa-thumbs-up fa-lg"></i> Benefits
          </b-nav-item>
          <b-nav-item v-scroll-to="{el: '#rcsp-map',      offset: -100}">
            <i class="fa fa-map-marker fa-lg"></i> Map
          </b-nav-item>
          <b-nav-item v-scroll-to="{el: '#rcsp-process',  offset: -100}">
            <i class="fa fa-list-ol fa-lg"></i> Process
          </b-nav-item>
          <b-nav-item v-scroll-to="{el: '#rcsp-progress', offset: -100}">
            <i class="fa fa-spinner fa-lg"></i> Progress
          </b-nav-item>
          <b-nav-item v-scroll-to="{el: '#rcsp-info',     offset: -100}">
            <i class="fa fa-info-circle fa-lg"></i> Info
          </b-nav-item>
          <b-nav-item v-scroll-to="{el: '#rcspsupport',   offset: -100}">
            <i class="fa fa-life-ring fa-lg"></i> Support
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-jumbotron fluid class="text-center align-text-bottom" 
                style="text-shadow: 1px 1px 2px #333;"
                header-level="3" 
                lead="" 
                text-variant="white">
      <template id="j-header" slot="header" class="">Sidewalk Project</template>
    </b-jumbotron>
    <!-- <b-img fluid style="height: 100vh;" 
    :src="require('@/assets/ridgecrest.jpg')"><p>test</p>test</b-img> -->
    <br><br>
    <b-container  fluid class="px-0" id="rcsp-issues">
      <!-- <h2 class="text-center p-3">Issues</h2> -->
      <carousel/>
    </b-container>
    <br><br>
    <b-container fluid class="px-0" id="rcsp-benefits">
      <!-- <h2 class="text-center p-3">Benefits</h2> -->
      <features/>
    </b-container>
    <br><br>
    <b-container fluid class="pt-50 px-0" id="rcsp-map">
      <!-- <h2 class="text-center p-3">Map</h2> -->
      <b-embed type="iframe" aspect="4by3" src="https://www.google.com/maps/d/u/0/embed?mid=15U0H8mVvYEiDeIDQaSW3iyQtWsA6Ikdq"></b-embed>
    </b-container>
    <br><br>
    <b-container id="rcsp-process">
      <!-- <h2 class="text-center p-3">How do we make this happen?</h2> -->
      <timeline class="mx-auto p-3 w-50">
        <!-- <timeline-title>title</timeline-title> -->
        <timeline-item color="#9dd8e0" style="text-align: left;">Step 1. Identify Parcel Owners</timeline-item>
        <timeline-item color="#9dd8e0">Step 2. Get the Word Out</timeline-item>
        <timeline-item color="#9dd8e0">Step 3. Obtain Owner Signature</timeline-item>
        <timeline-item color="#9dd8e0">Step 4. Submit Petitions</timeline-item>
        <timeline-item color="#9dd8e0">Step 5. Conduct Analysis</timeline-item>
        <timeline-item color="#9dd8e0">Step 6. Participate in Hearing</timeline-item>
        <timeline-item color="#9dd8e0">Step 7. Receive Approval</timeline-item>
      </timeline>
    </b-container>
    <br><br>
    <b-container id="rcsp-progress">
      <!-- <h2 class="text-center p-3">Progress</h2> -->
      <theprogress/>
    </b-container>
    <br><br>
    <b-list-group id="rcsp-info" style="" class="mx-auto px-3">
      <!-- <h2 class="text-center p-3">Additional Information</h2> -->
      <b-list-group-item>The sidewalk doesn’t have to be on both sides of the street.</b-list-group-item>
      <b-list-group-item>The project can be scoped to a portion of the overall goal.</b-list-group-item>
      <b-list-group-item>If it costs too much after engineering analysis, you don’t have to pay.</b-list-group-item>
      <b-list-group-item>New Copley subdivisions are beginning to require sidewalks.</b-list-group-item>
      <b-list-group-item>Copley is embarking on a “Complete Streets” effort: proposing streets that are inclusive of pedestrians, cyclists, and people in wheelchairs.</b-list-group-item>
      <b-list-group-item>Cost is attributed to square footage using depth, length and width.</b-list-group-item>
      <b-list-group-item>Every intersection requires handicap cross sections.</b-list-group-item>
      <b-list-group-item>If any parcel has a hill, right-of-way may have to be obtained.</b-list-group-item>
      <b-list-group-item>Assessment paid by land owners to Town of Copley.</b-list-group-item>
    </b-list-group>
    <br><br>
    <b-container id="rcspsupport">
      <!-- <h2 class="text-center">Take the Next Step!</h2> -->
      <h1 class="text-center">Let us know if you're interested, and we'll get in touch with you.</h1>
      <form id="contact_form" style="width:90%;" class="container" v-on:submit.prevent="submitForm" action="">
        <div class="form-group">
          <label for="name">Name:</label>
          <!-- v-model link to the model (i.e. pieces of the data section of vue.js) -->
          <!-- v-on lets us run methods from vue.js : this one is v-on:blur for the blur event -->
          <!--    blur just means that the field no longer has 'focus' -->
          <input v-model="name" v-on:blur="isValidName" class="form-control" name="name" type="text" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" v-on:blur="isValidEmail" class="form-control" name="email" type="email" />
        </div>
        <div class="form-group">
          <label for="message">Message <small>(<span>{{ message.length }}</span> / <span>{{ maxLength }}</span>)</small></label>
          <textarea v-model="message" v-on:blur="isValidMessage" class="form-control" name="message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </b-container>
    <footer class="page-footer font-small blue pt-4 mt-4">
      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <button type="button" class="btn btn-primary btn-lg">
            <i class="fa fa-facebook fa-lg"> </i>
          </button>
        </li>
        <li class="list-inline-item">
          <button type="button" class="btn btn-primary btn-lg">
            <i class="fa fa-twitter fa-lg"></i>
          </button>
        </li>
      </ul>
      <div class="footer-copyright text-center py-3">
        <p>© Copyright 2017 Ridge Crest Sidewalk Project</p>
      </div>
    </footer>
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
  import theprogress from '@/components/Progress'
  // import ridgecrestimg from '@/assets/ridgecrest.jpg'
  
  export default {
    name: 'hello',
    data() {
      return {
        completedSteps: 0,
        totalSteps: 10,
        name: '', // data for the name on the form
        email: '', // data for the email on the form
        message: '', // data for the message on the form
        maxLength: 140 // maximum length of the form message
      }
    },
    methods: { // all the actions our app can do
      isValidName: function() { // TODO what if name is just spaces?
        var valid = this.name.length > 0
        return valid
      },
      isValidEmail: function() { // TODO is a@b a valid email?
        var valid = this.email.indexOf('@') > 0
        return valid
      },
      isValidMessage: function() { // what is message is just spaces?
        var valid = (this.message.length > 0) && (this.message.length < this.maxLength)
        return valid
      },
      checkMessage: function() {
        // TODO keep the message below maxMessageLength?
        //      or maybe change the text, background, or counter color?
      },
      submitForm: function() {
        // TODO prevent form from submitting if name, email, or message
        //      are invalid and display message
        // TODO submit to form processor
        this.$http({
          url: '/someUrl',
          method: 'POST',
          data: {
            name: this.name,
            email: this.email,
            message: this.message
          }
        }).then(function() {
          alert('Your form was submitted!')
        }, function() {
          alert('Form submission failed')
        })
      }
    },
    components: {
      Timeline,
      TimelineItem,
      TimelineTitle,
      Carousel,
      Features,
      theprogress
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* #rcsp-map {
    height: 100vh;
  } */

  #j-header {
    transform: translateX(100);
  }

  .btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
}

.jumbotron{
    height: 100vh;
}

.jumbotron {
background: linear-gradient(
      rgba(24, 23, 23, 0.493)
      ),url("../assets/ridgecrest.jpg");
background-position: center; 
background-size: cover;
/* opacity: .5; */
}

.navbar-nav > li{
  padding-left:30px;
  padding-right:30px;
  text-align: center;
}
</style>
