<template>
    <div id="AboutIt">
        <SimpleList></SimpleList>
        <History></History>
        <Dempartment></Dempartment>
        <!-- <Footer></Footer> -->
    </div>
</template>
<script>
import SimpleList from '../Home/AboutIt/SimpleList'
import History from '../Home/AboutIt/History'
import Dempartment from '../Home/AboutIt/Dempartment'
// import Footer from '../Home/Footer'
export default {
    components:{
        SimpleList,
        History,
        Dempartment,
        // Footer
    }
}
</script>
<style scoped>
</style>