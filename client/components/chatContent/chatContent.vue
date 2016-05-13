<template>
    <li class="chat-content">
        <div class="dialogue-container">
            <ul class="dialogue-list">
                <li v-for="" class="dialogue"></li>
            </ul>
        </div>
        <div class="edit-container">
            <ul class="edit-option-list">
                <li class="edit-option"></li>
            </ul>
            <div class="edit-box" contenteditable="true"></div>
            <p class="operations"><a href="javascript:void(0);" class="submit">发送</a></p>
        </div>
    </li>
</template>
<script>
    import './chatContent.styl';
    export default {
        data: function(){

        }
    }
</script>