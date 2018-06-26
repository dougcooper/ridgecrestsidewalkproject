<template>
  <div class="container p-3">
    <div class="row p-3">
      <div class="col-md text-center">
        <vue-circle :progress="50" :size="100" :reverse="false" line-cap="round" :fill="fill" empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0" insert-mode="append" :thickness="5" :show-percent="true" @vue-circle-progress="progress"
          @vue-circle-end="progress_end">
        </vue-circle>
        <p>Ridge Crest Dr</p>
      </div>
      <div class="col-sm text-center">
        <vue-circle :progress="50" :size="100" :reverse="false" line-cap="round" :fill="fill" empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0" insert-mode="append" :thickness="5" :show-percent="true" @vue-circle-progress="progress"
          @vue-circle-end="progress_end">
        </vue-circle>
        <p>Redfield Ln</p>
      </div>
      <div class="col-sm text-center">
        <vue-circle :progress="50" :size="100" :reverse="false" line-cap="round" :fill="fill" empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0" insert-mode="append" :thickness="5" :show-percent="true" @vue-circle-progress="progress"
          @vue-circle-end="progress_end">
        </vue-circle>
        <p>Heritage Woods Dr</p>
      </div>
    </div>
  </div>
</template>

<script>
  import VueCircle from 'vue2-circle-progress'
  
  export default {
    name: 'theprogress',
    components: {
      VueCircle
    }
  }
</script>