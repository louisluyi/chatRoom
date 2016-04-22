<template>
    <div class="user">
        <img v-for="item in userList" src="{{item.avatar}}"/>
    </div>
</template>
<script>
    module.exports = {
        data:function(){

        },
        methods:{

        }
    }
</script>