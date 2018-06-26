<template>
    <b-carousel 
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="0"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
        <img slot="img" src="https://picsum.photos/1024/480/?image=52" alt="image slot">
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide caption="Hello World!">
        <img slot="img" src="https://picsum.photos/1024/480/?image=54" alt="image slot">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <img slot="img" src="https://picsum.photos/1024/480/?image=58" alt="image slot">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="" src="https://picsum.photos/1024/480/?image=55" alt="image slot">
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

/* .carousel{
    height: 75vh;
} */
</style>