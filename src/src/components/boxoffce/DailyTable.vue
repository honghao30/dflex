<template>
    <td>{{ dailyRk['rank'] }}</td>
    <td class="text-l">{{ dailyRk['movieNm'] }}</td>
    <td>{{ dailyRk['openDt'] }}</td>
    <td>{{ dailyRk['audiAcc'] }}</td>
    <td>{{ dailyRk['rankInten'] }}</td>
</template>
<script>
export default {
  props: ['dailyRk'],
};
</script>
<style lang="scss" scoped>
    .text-l {
        text-align: left;
    }
</style>