<template>
    <b-carousel center
                style=""
                controls
                indicators
                background=""
                :interval="0"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <b-carousel-slide caption="Children of All Ages" class="responsive">
        <b-img slot="img" fluid center :src="require('@/assets/park-kids-4-1240443-1600x1200.jpg')" alt="image slot" style=""/>
      </b-carousel-slide>
      <b-carousel-slide caption="Active Bus Stops" class="responsive">
        <b-img slot="img" fluid center :src="require('@/assets/school-bus-1525654-1598x1055.jpg')" alt="image slot" style=""/>
      </b-carousel-slide>
      <b-carousel-slide caption="Popular route for traveling to “Restaurant Hill”" class="responsive" >
        <b-img slot="img" fluid center :src="require('@/assets/mexican-tacos-1329691-1599x1196.jpg')" alt="image slot" style=""/>
      </b-carousel-slide>
      <b-carousel-slide caption="Popular route for runners and walkers" class="responsive" >
        <b-img slot="img" fluid center :src="require('@/assets/legs-of-a-young-man-running-1245230.jpg')" alt="image slot" style=""/>
      </b-carousel-slide>
      <b-carousel-slide caption="Surrounding neighborhoods have sidewalks" class="responsive" >
        <b-img slot="img" fluid center :src="require('@/assets/neighborhood-street-1440967-1598x699.jpg')" alt="image slot" style=""/>
      </b-carousel-slide>
      <b-carousel-slide caption="New developments will increase through traffic" class="responsive" >
        <b-img slot="img" fluid center :src="require('@/assets/house-framing-with-builders-1234044-1599x2132.jpg')" alt="image slot" style=""/>
      </b-carousel-slide>
      <b-carousel-slide caption="No street lights" class="responsive" >
        <b-img slot="img" fluid center :src="require('@/assets/street-lamp-1498296.jpg')" alt="image slot" style=""/>
      </b-carousel-slide>
      <b-carousel-slide caption="Curved road that creates dangerous blind spots" class="responsive" >
        <b-img slot="img" fluid center :src="require('@/assets/curves-ahead-1526015.jpg')" alt="image slot" style=""/>
      </b-carousel-slide>
      <b-carousel-slide caption="Speeding cars" class="" >
        <b-img slot="img" fluid center :src="require('@/assets/five-oh-in-5-0-1186489-1599x901.jpg')" alt="image slot" style=""/>
      </b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>

.responsive {
    max-width: 100%;
    max-height: 75vh;
}

.carousel-item:after {
  content:"";
  display:block;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background:rgba(0,0,0,0.5);
}
</style>