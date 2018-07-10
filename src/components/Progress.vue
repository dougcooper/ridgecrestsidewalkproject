<template>
  <div class="container p-3">
    <div class="row p-3">
      <div class="col-sm text-center" v-for="location in progress" :key="location.id">
        <vue-circle :progress="location.completed" :size="100" :reverse="false" line-cap="round" :fill="fill" empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0" insert-mode="append" :thickness="5" :show-percent="true" @vue-circle-progress="progress"
          @vue-circle-end="progress_end">
        </vue-circle>
        <p>{{location.street}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import VueCircle from 'vue2-circle-progress'
  
  export default {
    name: 'theprogress',
    data: function() {
      return {
        progress: [
          {
            id: 1,
            street: 'Ridge Crest Dr',
            completed: 50
          },
          {
            id: 2,
            street: 'Redfield Ln',
            completed: 75
          },
          {
            id: 3,
            street: 'Heritage Woods Dr',
            completed: 100
          }
        ]
      }
    },
    components: {
      VueCircle
    }
  }
</script>