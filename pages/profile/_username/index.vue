<template>
  <div>
    <div 
      v-if="$store.state.authUser"
      class="py-12 h-screen bg-gray-300">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
            <div class="md:flex">
                <div class="w-full p-2 py-10">
                    <div class="flex justify-center">
                    <div class="relative"> 
                        <img 
                          width="80"
                          class="object-cover h-24 w-24" 
                          :src="`https://ui-avatars.com/api/?name=${$store.state.authUser.name}&amp;color=7F9CF5&amp;background=EBF4FF`" 
                          alt=""
                        />
                      <span class="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"></span> 
                    </div>
                    </div>
                    <div class="flex flex-col text-center mt-3 mb-4"> <span class="text-2xl font-medium">{{ $store.state.authUser.name }}</span> <span class="text-md text-gray-400">@{{ $store.state.authUser.username }}</span> </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'authenticated',
  layout: "default",
  mounted(){
    //this.$route.params.username
  }
}
</script>
