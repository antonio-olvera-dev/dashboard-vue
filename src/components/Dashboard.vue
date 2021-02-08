<template>
  <div class="dashboard">
<!-- ---------------------- -->

<!-- ---Header--- -->
<div class="dashboard__header full-w" @click="activDash">
<i class="dashboard__icon bi-alarm"></i>
<div class="dashboard__header__text">
<span>Item 1</span>
</div>
</div>

<!-- ---body--- -->

<div class="dashboard__body full-w" v-if="bodyBool">
<ul class="full-w">
    <li class="full-w" v-for="(item,i) in [1,2,3,4,5,6]" v-bind:key="item">
        <i class="dashboard__icon bi-alarm"></i>
        {{i}}
    </li>
</ul>
</div>

<!-- ---------------------- -->
  </div>
</template>



<script>
export default {
data() {
    return {
        bodyBool: false
    }
},
methods:{
    activDash(){
        this.bodyBool = !this.bodyBool;
    }
}


}
</script>



<style lang="scss" scoped>
*{
  margin: 0%;
  padding: 0%;
}

.full{
    width: 100%;
    height: 100%;
}
.full-w{
    width: 100%;
}
.full-h{
    height: 100%;
}
.dashboard{

    // ---Setting---
    $dashboard__padding: 1em;
    $dashboard__border: 0.3em;
    $dashboard__color-hover: rgb(224, 224, 224);


    height: 100vh; //---Change 100% if required---
    width: 15em;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    padding: 1em;
    user-select: none;

    &__icon{
        font-size: 1.3em;
         margin-right: 0.5em;
    }


    &__main{
        cursor: pointer;
        padding: $dashboard__padding;
        border-radius: $dashboard__border;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    &__header{
        @extend .dashboard__main;
        height: 3em;
         &:active{
            background-color: $dashboard__color-hover;
         }
        

        &__text{
           
           
        }
    }

    &__body{
        @extend .dashboard__main;
        padding: 0%;
        height: fit-content;
        animation-name: anim-body;
        animation-duration: 100ms;

        & > ul{
            list-style: none;
            padding: 0%;
            margin: 0%;
        }
        & > ul > li{
            @extend .dashboard__main;
             &:active{
              background-color: $dashboard__color-hover;
             }
             & > i{
                 margin-left: 0.2em;
             }
            height: 3em;
        }
      
    }
    @keyframes anim-body {
        0%{
            height: 0%;
        }
        100%{
            height: fit-content;
        }
    }
}


</style>