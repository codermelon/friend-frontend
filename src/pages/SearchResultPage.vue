<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in tags" style="margin-right: 8px; margin-top: 8px" >
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup >
import {ref,onMounted } from "vue";
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios.ts";
import qs from 'qs';

const route = useRoute();
const {tags} = route.query;
const userList = ref([]);


onMounted( ()=>{
  console.log(tags)
  myAxios.get('/user/search/tags',{
    params:{
      tagNameList:tags
    },
    paramsSerializer: params => {
      return qs.stringify(params,{indices:false})
    }
  })
      .then(function (response){
        console.log('/user/search/tags succeed',response);
  })
      .catch(function (error){
        console.log('/user/search/tags error',error);
      })
})


// const mockUser = ref({
//   id: 931,
//   username: 'melon',
//   userAccount: 'melon',
//   profile: '我是melon',
//   gender: 0,
//   phone: '123456789101',
//   email: 'shayu-yusha@qq.com',
//   planetCode: '931',
//   avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
//   tags: ['java', 'emo', '打工中', 'emo', '打工中'],
//   createTime: new Date(),
// })



</script>

<style scoped>

</style>
