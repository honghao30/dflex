<template>
    <td>{{ weekRk['rnum'] }}</td>
    <td class="text-l">{{ weekRk['movieNm'] }}</td>
    <td>{{ weekRk['openDt'] }}</td>
     <td>{{ weekRk['audiAcc'] }}</td>
    <td>{{ weekRk['salesAmt'] }}</td>
</template>
<script>
export default {
  props: ['weekRk'],
};
</script>
<style lang="scss" scoped>
    .text-l {
        text-align: left;
    }
</style>