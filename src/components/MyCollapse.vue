<template>
  <div class="card">
    <v-collapse-group :onlyOneActive="true" class="list-group">
      <v-collapse-wrapper class="list-group-item" v-for="item in items" :key="item.id">
          <div class="" v-collapse-toggle>
              {{item.question}}
          </div>
          <div class="font-italic" v-collapse-content>
              {{item.answer}}
          </div>
      </v-collapse-wrapper>
    </v-collapse-group>
  </div>
</template>
 
<script>
import Vue from 'vue'
import VueCollapse from 'vue2-collapse'

// Loading the plugin into the Vue.
Vue.use(VueCollapse)

export default {
  name: 'mycollapse',
  data: function() {
    return {
      items: [
        {
          id: 1,
          question: 'Does the sidewalk have to be on both sides?',
          answer: 'No'
        },
        {
          id: 2,
          question: 'What if everyone doesn\'t participate?',
          answer: 'The project can be scoped to a portion of the overall goal.'
        },
        {
          id: 3,
          question: 'How much will it cost?',
          answer: 'If it costs too much after engineering analysis, you don’t have to pay.'
        },
        {
          id: 4,
          question: 'How is the cost for each parcel calculated?',
          answer: 'Cost is attributed to square footage using depth, length and width.'
        },
        {
          id: 5,
          question: 'How do we pay for it?',
          answer: 'Tax assessment paid by land owners to Town of Copley.'
        }
      ]
    }
  },
  components: {
  }
}
</script>

<style scoped>

.v-collapse-content{
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
    padding: 0;
}

.v-collapse-content-end{
    transition: max-height 0.3s ease-in;
    max-height: 500px;
}

</style>