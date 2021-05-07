<template>
    <!-- <h1>AboutUs</h1> -->
    <div>
        <Works></Works>
        <Comments></Comments>
        <Team></Team>
    </div>
</template>
<script>
import Works from '../Home/AboutUs/Works'
import Comments from '../Home/AboutUs/Comments';
import Team from '../Home/AboutUs/Team'
export default {
    components:{
        Works,
        Comments,
        Team,
    }
}
</script>