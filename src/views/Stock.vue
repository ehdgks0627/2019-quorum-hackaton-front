<template>
  <div class="stock">
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
                  <span>발행 금액</span>
                </td>
                <td>
                  <span>연이율 / 만기일</span>
                </td>
                <td>
                  <span>참가자수</span>
                </td>
                <td>
                  <span>남은 토큰 / 발행 토큰</span>
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
                  <span>{{ row.issueAmount }}</span>
                </td>
                <td>
                  <span>{{ row.duesPerYear }}</span>
                  <span>{{ row.expiryDate }}</span>
                </td>
                <td>
                  <span>{{ row.participants }}</span>
                </td>
                <td>
                  <span>{{ row.remainToken }}</span>
                  <span>{{ row.issueToken }}</span>
                </td>
                <td>
                  <v-layout column>
                    <v-btn flat v-if="row.buttonJoin">
                      <span>참가</span>
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
  name: 'Stock',
  components: {
  },
  data () {
    return {
      data: [
        {
          flag: '사모',
          secName: '제 111회 한화',
          issueAmount: 10000000000,
          duesPerYear: 2.6,
          expiryDate: 2,
          participants: 3,
          remainToken: 99,
          issueToken: 100,
          buttonJoin: true,
          buttonDetail: true
        }, {
          flag: '공모',
          secName: '제 2회 한화',
          issueAmount: 1000000000000,
          duesPerYear: 5,
          expiryDate: 5,
          participants: 109,
          remainToken: 586,
          issueToken: 1000,
          buttonJoin: true,
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
