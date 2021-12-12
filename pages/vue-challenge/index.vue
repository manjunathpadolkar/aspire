<template>
  <div>
    <the-vue-challenge/>
  </div>
</template>
<script>
import TheVueChallenge from '@/components/vue-challenge/Index'
export default {
  middleware: 'authenticated',
  components:{
    TheVueChallenge
  }
}
</script>
