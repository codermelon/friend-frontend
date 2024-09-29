<template>
  <van-cell title="昵称" :value="user.username"></van-cell>
  <van-cell title="账号" is-link to="/user/edit" :value="user.userAccount"></van-cell>

  <van-cell title="头像" is-link to="/user/edit">
    <img style="height: 40px" :src="user.avatarUrl" alt=""/>
  </van-cell>

  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)"></van-cell>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"></van-cell>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email"></van-cell>
  <van-cell title="星球编号" :value="user.planetCode"></van-cell>
  <van-cell title="注册时间" :value="user.createTime"></van-cell>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

const user = {
  id: 1,
  username: '鱼皮',
  userAccount: 'dogYupi',
  avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
  gender: '男',
  phone: '123112312',
  email: '12345@qq.com',
  planetCode: '1234',
  createTime: new Date().toLocaleDateString(), // 格式化日期
}

const toEdit = (editKey: string, editName:string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

</script>

<style scoped>
</style>
