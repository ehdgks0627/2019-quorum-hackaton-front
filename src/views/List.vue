<template>
  <div class="list">
    <div class="main mini">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
      <div class="circle c4"></div>
      <div class="circle c5"></div>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <h3 class="display-3 text-xs-center">ELS LIST</h3>
            <h3 class="display-1 mb-4 text-xs-center red-text">Find your ELS product from here !</h3>
          </v-flex>
        </v-layout>
      </v-container>
      <v-sparkline
        fill
        :gradient="['#192149']"
        :line-width="2"
        :padding="0"
        :smooth="13"
        :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 7, 5, 8, 2, 9, 0]"
      ></v-sparkline>
    </div>

    <v-container>
      <v-layout align-center justify-center style="min-height: 500px;">
        <v-flex>
          <v-card class="card mx-auto" max-width="1000" elevation="24">
            <v-layout fill-height column justify-center align-content-space-around class="pa-3">
              <table class="">
                <thead>
                  <tr>
                    <td></td>
                    <td>
                      <span>계약명</span>
                    </td>
                    <td>
                      <span>발행 금액</span>
                    </td>
                    <td>
                      <span>연이율</span>
                    </td>
                    <td>
                      <span>만기일</span>
                    </td>
                    <td>
                      <span>참가자수</span>
                    </td>
                    <td>
                      <span>남은 토큰</span>
                    </td>
                    <td>
                      <span>발행 토큰</span>
                    </td>
                    <td>
                      <span>동작</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="data-row" v-for="(row, rowIndex) in data" :key="rowIndex">
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
                    </td>
                    <td>
                      <span>{{ row.expiryDate }}</span>
                    </td>
                    <td>
                      <span>{{ row.participants }}</span>
                    </td>
                    <td>
                      <span>{{ row.remainToken }}</span>
                    </td>
                    <td>
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
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'List',
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
