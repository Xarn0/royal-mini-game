<template lang="pug">
button.btnMain 
    img(:src="require(`../../assets/img/${url}`)", alt="alt")

</template>

<script>
export default {
name    : "btn-element",
props:['url']
}
</script>

<style lang="scss">
.btnMain{
    border-radius: 50%;
    background: radial-gradient(circle at top,#220240 25%,#9501FF 100%);
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border: solid 2px #B754FF;
    box-shadow: 0px 4px 7px #BD92D5 inset;
    img{
        margin-right: 2px;
        object-fit: contain;
    }
}
</style>