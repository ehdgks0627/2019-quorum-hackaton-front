<template>
  <div class="my-page">
    <div class="main mini">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
      <div class="circle c4"></div>
      <div class="circle c5"></div>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <v-card class="card white-back pa-4">
              <v-layout row justify-center align-center>
                <v-avatar color="#121836" class="mr-3">
                  <span class="display-1 white--text">{{ $store.getters.account.identity.charAt(0) }}</span>
                </v-avatar>
                <div>
                  <p class="headline">{{ $store.getters.account.identity }}</p>
                  <p class="title">{{ $store.getters.account.address }}</p>
                </div>
                <v-spacer />
                <div>
                  <p class="title">{{ $store.getters.account.balance }}</p>
                  <p class="title">{{ $store.getters.account.total }}</p>
                </div>
              </v-layout>
            </v-card>
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
      <v-layout align-center justify-center>
        <v-flex>
          <v-card class="card pa-0 mb-5" max-width="1000" elevation="24">
            <v-layout fill-height column justify-center align-content-space-around class="pa-3">
              <table class="">
                <thead>
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
                      <span>보유 토큰량</span>
                    </td>
                    <td>
                      <span>평가 금액</span>
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
                    </td>
                    <td>
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
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  components: {
  },
  data () {
    return {
      balance: 1000000000,
      valueAmount: 3000000000,
      address: '0x000000000000000000000000',
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
          holdToken: 586,
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
