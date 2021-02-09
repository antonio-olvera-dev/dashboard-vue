<template>
  <div class="dashboard" @mouseleave="actionDashDesactive">
<!-- ---------------------- -->
<!-- ---Collapse--- -->
<div class="full-w dashboard__collapse">
        <i class="bi bi-record" v-if="collapseBool" @click="actionCollapse"></i>
        <i class="bi bi-record2" v-if="!collapseBool" @click="actionCollapse"></i>
</div>
<!-- ---Header--- -->
<div class="dashboard__header full-w" @click="activDash('dashboard__header', 0)" @mouseover="overElement('iddd', 0) " @mouseleave="leaveElement('iddd', 0)" >
<i class="dashboard__icon bi bi-person iddd"  data-toggle="tooltip" data-placement="top" title="User"></i>
<div class="dashboard__header__text full-w">
<span>User</span>
<i class="bi bi-chevron-right id-row iddd0" ></i> <!-- ---Change iddd0--- -->
</div>
</div>

<!-- ---body--- -->

<div class="dashboard__body full-w" v-if="bodyBool">
<ul class="full-w">
<!-- ---id-dashboard-action  se utiliza como id--- -->
    <li class="full-w id-dashboard-action" v-for="(item,i) in ['List','View','Edit','...']" v-bind:key="item" @mouseover="overElement('idd', i) " @mouseleave="leaveElement('idd', i)"
     @click="actionDash">
        <i class="bi bi-record2 dashboard__icon idd" ></i>
        <span>{{item}}</span>
    </li>
</ul>
</div>

<!-- ---Alone--- -->
<!-- ---id-dashboard-action  se utiliza como id--- -->
<div class="dashboard__header full-w id-dashboard-action" @click="actionDash" @mouseover="overElement('iddd', 1) " @mouseleave="leaveElement('iddd', 1)" >
<i class="dashboard__icon bi bi-envelope iddd" ></i>
<div class="dashboard__header__text full-w">
<span>Email</span>
</div>
</div>
<!-- ---Alone--- -->

<!-- ---Alone 2--- -->
<!-- ---id-dashboard-action  se utiliza como id--- -->
<div class="dashboard__header full-w id-dashboard-action" @click="actionDash" @mouseover="overElement('iddd', 2) " @mouseleave="leaveElement('iddd', 2)" >
<i class="dashboard__icon bi bi-calendar iddd" ></i>
<div class="dashboard__header__text full-w">
<span>Calendar</span>
</div>
</div>
<!-- ---Alone--- -->

<!-- ---------------------- -->
  </div>
</template>



<script>

export default {
data() {
    return {
        bodyBool: false,
        collapseBool:false
    }
},
mounted (){



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
       targetRow.classList.remove('dashboard__header-activeRow');
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
        console.log(target.innerText);
    },
        actionDashDesactive(){
        
        if (this.collapseBool) {
            const targets = document.getElementsByClassName('id-dashboard-action');
            for (let i = 0; i < targets.length; i++) {
            const item = targets[i];
            item.classList.remove('dashboard__action');
            }
            const target2 = document.getElementsByClassName('dashboard__header');
            for (let i = 0; i < target2.length; i++) {
                const item = target2[i];
                item.classList.remove('dashboard__header-active')
            }
            this.bodyBool = false;

            //TODO dashboard__header-activeRow probar
            const targetRow = document.getElementsByClassName('dashboard__header-activeRow');
            for (let i = 0; i < targetRow.length; i++) {
                const item = targetRow[i];
                item.classList.remove('dashboard__header-activeRow');
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
    },
    actionCollapse(){
        this.collapseBool = !this.collapseBool;
        const target = document.getElementsByClassName('dashboard')[0];
        const spans = document.getElementsByTagName('span');
        // for (const it of spans) {
        //     console.log(it);
        //     it.style.color = 'white'
        // }
        if (this.collapseBool) {
            target.classList.add('dashboard--active');
            return true;
        }
        target.classList.remove('dashboard--active');
    }
}


}
</script>



<style lang="scss" scoped>
*{
  margin: 0%;
  padding: 0%;
}
i{
    display: flex;
    align-items: center;
    justify-content: center;
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
    overflow: hidden;


    // ---Setting---
    $dashboard__padding: 1em;
    $dashboard__border: 0.3em;
    $c__dashboard__active: rgb(243, 243, 243);
    $c__primary: #0da692;
    $c__primary-light: #13ddc2;
    $c__primary-dark: #0b7769;
    $c__primary-dark-shadow: #0b7769;
    $transition-duration: 300ms;

    transition-duration: $transition-duration;
    &--active{
        width: 4em;
        transition-duration: $transition-duration;

        &:hover{
        width: 18em;
        transition-duration: $transition-duration; 
         i{
             margin-left: 0em;
         }
         span{
             color: black;
         }
         .id-row{
             margin-left: auto;
         }
        }
        i{
            
            margin-left: -0.6em;
        }
        span{
            color: white;
        }
    }



    &__collapse{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0%;
        padding: 0%;
        margin-bottom: 1em;
        padding: 0.3em;
        & > i{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0%;
        padding: 0%;
        font-size: 1.5em;
        &:hover{
            cursor: pointer;
        }
        }

    }

    &__action{
        background-color: $c__primary;
        box-shadow: inset 0px 0px 5px 0px rgba(255, 255, 255, 0.5);
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
        overflow: hidden;

        & > ul{
           
            list-style: none;
            padding: 0%;
            margin: 0%;
        }
        & > ul > li{
            @extend .dashboard__main;
            padding:  0.3em;
            margin-top: 0.1em;
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
            height: 198px;  //TODO Modificar segun el valor real
        }
    }
}


</style>