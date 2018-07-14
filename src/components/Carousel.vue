<template>
<div>
  <b-card-group deck class="text-center mx-3">
    <b-card v-for="card in cards" :key="card.id"
            :title="card.title"
            :img-src="card.src"
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-4">
      <p class="card-text">
        {{card.text}}
      </p>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
const imKids = require('@/assets/park-kids-4-1240443-1600x1200.jpg')
const imBusStop = require('@/assets/school-bus-1525654-1598x1055.jpg')
const imRestaurant = require('@/assets/mexican-tacos-1329691-1599x1196.jpg')
const imRunner = require('@/assets/legs-of-a-young-man-running-1245230.jpg')
const imStreet = require('@/assets/neighborhood-street-1440967-1598x699.jpg')
const imConstruction = require('@/assets/house-framing-with-builders-1234044-1599x2132.jpg')
const imLamp = require('@/assets/street-lamp-1498296.jpg')
const imCurves = require('@/assets/curves-ahead-1526015.jpg')
const imFast = require('@/assets/five-oh-in-5-0-1186489-1599x901.jpg')

export default {
  name: 'carousel',
  data() {
    return {
      slide: 0,
      sliding: null,
      cards: [
        {
          id: 0,
          title: 'Children of All Ages',
          text: 'Without sidewalks it makes it difficult for kids to enjoy typical outdoor activities at every age.',
          src: imKids
        },
        {
          id: 1,
          title: 'Active Bus Stops',
          text: 'Historically bus stops have been on corners, and without sidewalks kids are forced to wait in the street or yard.',
          src: imBusStop
        },
        {
          id: 2,
          title: 'Popular thoroughfare for traveling to “Restaurant Hill”',
          text: 'Neighborhoods south of our street use Ridge Crest for easy access to Restuarant Hill rather than doubling back using SR-18. This increases the amount of traffic and thus reduces pedestrian safety.',
          src: imRestaurant
        },
        {
          id: 3,
          title: 'Popular route for runners and walkers',
          text: 'Ridge Crest and Heritage Woods is a popular route for runners. The lack of sidewalks descreases pedestrian safety.',
          src: imRunner
        },
        {
          id: 4,
          title: 'Surrounding neighborhoods have sidewalks',
          text: 'Many of the surrounding neighborhoods have sidewalks whereas the proposed routes do not, despite the popularity of our street.',
          src: imStreet
        },
        {
          id: 5,
          title: 'New developments will increase through traffic',
          text: 'As the number of residents in the surrounding area increases so will the traffic, thus decreasing pedestrian safety.',
          src: imConstruction
        },
        {
          id: 6,
          title: 'No street lights',
          text: 'The lack of street lights increases the risk of injury when exercising or walking pets on the street in the early morning or late evening.',
          src: imLamp
        },
        {
          id: 7,
          title: 'Curved road create dangerous blind spots',
          text: 'Pockets of dangerous areas are created by curved roads, thus requiring pedestrians and drivers alike to take extra care.',
          src: imCurves
        },
        {
          id: 8,
          title: 'Speeding cars',
          text: 'Cars driving down Ridge Crest tend to speed, placing pedestrians at greater risk for injury.',
          src: imFast
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

.card {
  min-width: 25vw;
}

</style>