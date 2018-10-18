<template>
    <header>
        <div class="header-content">
            <div class="logo-tit">{{logoTxt}}</div>
            <div class="toggle-box">
                <div class="toggle-history">
                    <i><</i>
                    <i>></i>
                </div>
                <div class="input-box">
                    <input type="text" name="searchBox" id="searchBox" v-bind:placeholder="searchPlaceholder" title=""/>
                    <a href="javascript:;" class="search-btn"></a>
                </div>
            </div>
            <div class="user-box"></div>
            <div class="header-function"></div>
        </div>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                logoTxt: '网易云音乐',
                searchPlaceholder:'搜索音乐，视频，歌词，电台',
                userInfo:{
                    name:'Mycaptaion95',
                    headIcon:''
                }
            };
        }
    };
</script>

<style lang="less">
    @import "./header.less";
</style>

