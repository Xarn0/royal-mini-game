<template lang="pug">
section 
  svg(width="650").svg
    circle(
      r="20"
      cx="50"
      cy="90"
      fill="#984322"
     
      )
   

  svg.svg 
    rect(
        class="rect" 
        width="100"
        height="100"
        y="10"
        x="10"
        fill="none"
        rx="110"
        ry="90"
        stroke="#943"
        stroke-width="20" 
        
    ) 
  svg(
    style="overflow:visible" 
   
  ).svg 
    line(
      x1="0"
      y1="0"
      id="point1"
      x2="300"
      y2="300"
      stroke="#843"
      fill="#544"
    )
    text()
      textPath(href="#point1" fill="#000").
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente minus non optio?
  svg.svg 
    polygon(
    
      points="150,150 150,100 170,100 170,150 230,150 210,120 170,170 "
      fill="#003"
    )
  svg(
    width="613" 
    height="547" 
    viewBox="0 0 613 547" 
    fill="none" 
   
    xmlns="http://www.w3.org/2000/svg"
    style="overflow:visible")

      path(d="M100.992 304C223.397 449.294 -233.555 372.749 173.992 338.496M173.992 338.496C175.971 338.33 177.971 338.164 179.992 338C597.992 304 40.9917 38 179.992 426C318.992 814 119.992 -98 119.992 264C119.992 626 56.9917 626.992 173.992 338.496ZM478.992 81L382.992 222M382.992 222L429.992 249L522.992 108L580.992 147L611.992 100L512.992 1L307.992 147C238.084 161.333 140.213 182.6 307.992 153C475.77 123.4 393.9 174 331.992 203L382.992 222Z" 
      stroke="transparent"
      id="ddd")
      text(fill="darkblue")
       textPath(href="#ddd").
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At eum, temporibus sit nemo minus voluptatibus aut voluptatum vero accusantium quasi? Obcaecati architecto voluptas autem quos laudantium, voluptatum aspernatur officiis illum aliquam consectetur doloribus, hic, corrupti provident unde nobis. Odio laboriosam tempora laudantium culpa autem illum nemo, et consequatur! Dolor tempora dignissimos atque? Omnis autem blanditiis ipsum. Fuga, aut ratione blanditiis explicabo dicta obcaecati in? Provident dolore aspernatur voluptatibus cum odio sed rerum beatae sunt. Excepturi porro saepe, vitae omnis doloribus, ex iste magni expedita ratione aliquid earum? Harum dolor delectus eveniet nisi nobis illum, ea vero commodi cumque corrupti pariatur voluptate vel saepe molestiae sint facere nesciunt. Dolorum expedita ipsum eius, tempore aliquam omnis non quibusdam, impedit nemo doloribus soluta ipsa aut quidem labore, nihil nulla nam eaque fuga! Quaerat exercitationem ipsa enim optio culpa! Ea neque, beatae possimus impedit officiis non optio soluta quibusdam voluptatibus sit recusandae at incidunt? Laudantium id repellat nesciunt ut blanditiis tempora est iure autem cupiditate fugit! Aspernatur, excepturi magnam eveniet eligendi cupiditate eos commodi nam velit repellat dolorem ex adipisci similique qui dolorum ad neque? Ullam, vel eum consequuntur magnam doloremque ad perspiciatis fugiat?

  svg(
    style="overflow:visible"
  ).svg 
    polyline(
      points="100,100 150,100 150,150 200,170 "
      fill="none"
      stroke="#922"
      id="point"
      stroke-width="20"
    ) 
      text(
        fill="#000"

      )   
        textPath(href="#point" fill="#000").
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente minus non optio?
  svg.svg 
  svg.svg
  div.img__test
    img(src="@/assets/img/background.jpg", alt="alt") 
  button(@click="prov= !prov") click
  Transition(
    name="win"
  )
    .lor(v-if="prov")  ii

</template>

<script>
export default{
  data(){
    return{
      prov:true
    }
  }
}
</script>
<style lang="scss">
.rect{
  stroke-dasharray:.1 .1;
  width:100px;
    height: 100px;
  animation: rect 3s infinite ease-in-out alternate-reverse ;
  transition: width,height 1s ease;

}
@keyframes rect{
  0%{
    stroke-dasharray:.1 .1;
    stroke: rgb(255, 10, 10);
    stroke-width: 20;
    fill: #f93;
    width:100px;
    height: 100px;
  }
  100%{
    stroke-dasharray:.3 .5;
    stroke:rgb(86, 3, 250);
    fill: rgb(51, 204, 51);
    stroke-width: 30;
    width: 200px;
    height: 200px;
  }
}
@keyframes identifier {
  0%{
    transform: translate(20px,20px);
  }
  25%{
    transform: translate(40px,20px);
    color: #325;
  }
  50%{
    transform: translate(20px,40px);
    color: #777;
  }
  75%{
    transform: translate(60px,40px);
    color: darkred;
  }
  100%{
    transform: translate(20px,20px);
    color: #000;
  }
}
@keyframes su{
  0%{
    width: 300px;
  }

  100%{
    width: 1200px;
  }
}
.win{
 
&-enter-active {

  animation: su 3s ease-in-out;
  transition: animation 2s ease-out;
}

&-leave-active {

  animation: su 2s ease-in-out reverse;
  transition: animation 2s ease-out;
  
}

&-enter-from {
  
  color: green;
}
&-leave-to{
 
}



}
.lor{
  // background: #999;
  text-align: center;
  border: 1px solid #994;
 
  // background: #423;
  height: 300px;
  position: relative;
  margin: 0 auto;
  &::after{
    content: '';
    display: block;
    width: 300px;
    height: 300px;
    left: 0;
    background: rgb(4, 20, 250);
    position: absolute;
    border-radius: 50%;
    top: 0;
  }
  &::before{
    content: '';
    position: absolute;
    display: block;
    width: 300px;
    top: 0;
    right: 0;
    border-radius: 50%;
    height: 300px;
    background: rgb(204, 14, 14);
  }
}


.img__test{
  img{
      clip-path: polygon(50% 0%, 50% 10%, 60% 80%);
  }}
</style>