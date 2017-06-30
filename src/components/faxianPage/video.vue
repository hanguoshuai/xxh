<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../assets/images/banner-pic.jpg" alt="">1</mt-swipe-item>
            <mt-swipe-item><img src="../../assets/images/banner-pic.jpg" alt="">2</mt-swipe-item>
            <mt-swipe-item><img src="../../assets/images/banner-pic.jpg" alt="">3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>


export default {
    name:"v-video"
}
</script>
<style scoped>

.mint-swipe{
    height:200px;
    background:#fff;width:100%;
    margin-top:5px;
}
.mint-swipe-item{
    height:200px;
} 

</style>