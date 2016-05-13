<template>
    <div class="main">
        <ul class="snatshop-list">
            <li is="snatshop"></li>
        </ul>
        <ul class="chat-content-list">
            <li is="chat-content"></li>
        </ul>
    </div>
</template>

<script>
    import './chatRoom.styl';
    import snatshop from '../snapshot/snapshot.vue';
    import chatContent from '../chatContent/chatContent.vue';
    export default {
        data:function(){
            return{

            }
        },
        components:{
            snatshop,
            chatContent
        }
    }
</script>