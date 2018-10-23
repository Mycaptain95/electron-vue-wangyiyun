<template>
    <header>
        <div class="header-content">
            <div class="logo-tit">{{logoTxt}}</div>
            <div class="toggle-box">
                <div class="toggle-history">
                    <i class="go-back"><</i>
                    <i class="go-forward">></i>
                </div>
                <!--<div class="input-box">-->
                    <!--<input type="text" name="searchBox" id="searchBox" v-bind:placeholder="searchPlaceholder" title=""/>-->
                    <!--<a href="javascript:;" class="search-btn"></a>-->
                <!--</div>-->
                <el-input class="searchInput" v-bind:placeholder="searchPlaceholder" suffix-icon="el-icon-search" v-model="searchCont">
                </el-input>
            </div>
            <div class="user-box">
                <div class="user-info">
                    <i class="user-head"></i>
                    <span class="user-name">{{userInfo.name}}</span>
                    <div class="user-util">
                        <i class="user-util-item util-pf"></i>
                        <i class="user-util-item util-email"></i>
                        <i class="user-util-item util-set"></i>
                    </div>
                </div>
            </div>
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
                searchCont:'',
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

