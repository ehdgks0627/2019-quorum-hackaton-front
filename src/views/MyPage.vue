<template>
  <div class="my-page">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" gradient="to top right, rgba(100,115,201,.63), rgba(25,32,72,.9)" class="justify-center align-center">
      <v-card class="mx-auto" max-width="1000">
        <v-layout fill-height column justify-center align-content-space-around class="pa-3">
          <table class="">
            <thead class="text-xs-center">
              <tr>
                <td></td>
                <td>
                  <span>계약명</span>
                </td>
                <td>
                  <span>시작일</span>
                </td>
                <td>
                  <span>만기일</span>
                </td>
                <td>
                  <span>보유 토큰량 / 평가 금액</span>
                </td>
                <td>
                  <span>동작</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                <td>
                  <span>{{ row.flag }}</span>
                </td>
                <td>
                  <span>{{ row.secName }}</span>
                </td>
                <td>
                  <span>{{ row.startDate }}</span>
                </td>
                <td>
                  <span>{{ row.expiryDate }}</span>
                </td>
                <td>
                  <span>{{ row.holdToken }}</span>
                  <span>{{ row.valueAmount }}</span>
                </td>
                <td>
                  <v-layout column>
                    <v-btn flat v-if="row.buttonTransfer">
                      <span>송금</span>
                    </v-btn>
                    <v-btn flat v-if="row.buttonDetail">
                      <span>세부 설명</span>
                    </v-btn>
                  </v-layout>
                </td>
              </tr>
            </tbody>
          </table>
        </v-layout>
      </v-card>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  components: {
  },
  data () {
    return {
      data: [
        {
          flag: '사모',
          secName: '제 111회 한화',
          startDate: 2,
          expiryDate: 2,
          holdToken: 99,
          valueAmount: 100,
          buttonTransfer: true,
          buttonDetail: true
        }, {
          flag: '공모',
          secName: '제 2회 한화',
          startDate: 5,
          expiryDate: 5,
          remainToken: 586,
          valueAmount: 1000,
          buttonTransfer: true,
          buttonDetail: true
        }
      ]
    };
  },
  mounted () {
  }
};
</script>

<style>
</style>
