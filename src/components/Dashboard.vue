<template>
  <div class="dashboard">
<!-- ---------------------- -->

<!-- ---Header--- -->
<div class="dashboard__header full-w" @click="activDash('dashboard__header', 0)" @mouseover="overElement('iddd', 0) " @mouseleave="leaveElement('iddd', 0)" >
<i class="dashboard__icon bi-alarm iddd" ></i>
<div class="dashboard__header__text full-w">
<span>Item 1</span>
<i class="bi bi-chevron-right iddd0"></i> <!-- ---Change iddd0--- -->
</div>
</div>

<!-- ---body--- -->

<div class="dashboard__body full-w" v-if="bodyBool">
<ul class="full-w">
    <!-- ---id-dashboard-action  se utiliza como id--- -->
    <li class="full-w id-dashboard-action" v-for="(item,i) in [1,2,3,4,5,6]" v-bind:key="item" @mouseover="overElement('idd', i) " @mouseleave="leaveElement('idd', i)"
     @click="actionDash">
        <i class="bi bi-record2 dashboard__icon idd" ></i>
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
    activDash(clas, position){
        this.bodyBool = !this.bodyBool;
        const target = document.getElementsByClassName(clas)[position];
        const targetRow = document.getElementsByClassName(`iddd${position}`)[position];
        if(this.bodyBool){
            target.classList.add('dashboard__header-active');
            targetRow.classList.add('dashboard__header-activeRow');
            return true;
        }
        target.classList.remove('dashboard__header-active');
       target.classList.add('dashboard__header-active');
    },
    //TODO add action
    actionDash(event){
        const target = event.target;
        const targets = document.getElementsByClassName('id-dashboard-action');
        for (let i = 0; i < targets.length; i++) {
            const item = targets[i];
            if (item.innerText === target.innerText) {
                item.classList.add('dashboard__action');
            }else{
                item.classList.remove('dashboard__action');
            }
        }
    },
    overElement(clas, position){
        const target = document.getElementsByClassName(clas)[position];
        target.classList.add('overElement');
    },
    leaveElement(clas, position){
        const target = document.getElementsByClassName(clas)[position];
        target.classList.remove('overElement');
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh; //---Change 100% if required---
    width: 18em;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    padding: 1em;
    user-select: none;


    // ---Setting---
    $dashboard__padding: 1em;
    $dashboard__border: 0.3em;
    $c__dashboard__active: rgb(243, 243, 243);
    $c__primary: #0da692;
    $c__primary-light: #13ddc2;
    $c__primary-dark: #0b7769;
    $c__primary-dark-shadow: #0b7769;
    $transition-duration: 300ms;




    &__action{
        background-color: $c__primary;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.9);
        color: white;
    }

    .overElement{
        margin-left: 0.3em;
        transition-duration: $transition-duration;
    }

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
        &__text{
           display: flex;
           justify-content: flex-start;
           & > i {
               margin-left: auto;
           }
           
        }

    }

    &__header-active{
      background-color: $c__dashboard__active;
      transition-duration: $transition-duration;
    }
    &__header-activeRow{
        transform: rotate(90deg);
        transition-duration: $transition-duration;
    }

    &__body{
        @extend .dashboard__main;
        padding: 0%;
        height: fit-content;
        animation-name: anim-body;
        animation-duration: $transition-duration;
        animation-timing-function: linear;
        overflow: hidden;

        & > ul{
           
            list-style: none;
            padding: 0%;
            margin: 0%;
        }
        & > ul > li{
            @extend .dashboard__main;
            padding:  0.3em;
             & > i{
                 padding-left: 0.2em;
             }
            height: 3em;
        }
      
    }
    @keyframes anim-body {
        0%{
            height: 0em;
        }
        100%{
            height: 5em;
        }
    }
}


</style>