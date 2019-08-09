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
                  <span class="display-1 white--text">{{ $store.getters.account.identity.charAt(0).toUpperCase() }}</span>
                </v-avatar>
                <div>
                  <p class="headline">{{ $store.getters.account.identity }}</p>
                  <p class="title">{{ $store.getters.account.address }}</p>
                </div>
                <v-spacer />
                <div>
                  <p class="title">Balance: {{ $numberWithCommas($store.getters.account.balance) }} ￦</p>
                  <p class="title">Total: {{ $numberWithCommas($store.getters.account.total) }} ￦</p>
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
                      <span>Contract Name</span>
                    </td>
                    <td>
                      <span>Start Date</span>
                    </td>
                    <td>
                      <span>Expiry Date</span>
                    </td>
                    <td>
                      <span>Hold Token</span>
                    </td>
                    <td>
                      <span>Value Amount</span>
                    </td>
                    <td>
                      <span>Function</span>
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
                      <span>{{ $numberWithCommas(row.valueAmount) }}</span>
                    </td>
                    <td>
                      <v-layout column>
                        <v-dialog v-model="row.transferDialog" persistent max-width="400">
                          <template v-slot:activator="{ on }">
                            <v-btn class="my-3" v-on="on">
                              <span>Transfer</span>
                            </v-btn>
                          </template>
                          <v-card class="card white-back">
                            <v-card-title class="headline">How much join ?</v-card-title>
                            <v-card-text>Value {{ row.value }} * {{ row.inputValue }} = {{ isNaN(row.value * row.inputValue) ? 0 : (row.value * row.inputValue) }}</v-card-text>
                            <v-text-field light box v-model="row.inputValue" label="Input Value"></v-text-field>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="green darken-1" text @click="row.transferDialog = false">Close</v-btn>
                              <v-btn color="green darken-1" text @click="transfer(row)">Join</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                        <!-- <v-btn class="my-3" v-if="row.buttonTransfer">
                          <span>Transfer</span>
                        </v-btn> -->
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
          flag: 'Private',
          secName: '제 111회 한화',
          startDate: 2,
          expiryDate: 2,
          holdToken: 99,
          valueAmount: 100000,
          buttonTransfer: true,
          buttonDetail: true
        }, {
          flag: 'Public',
          secName: '제 2회 한화',
          startDate: 5,
          expiryDate: 5,
          holdToken: 586,
          valueAmount: 1000000,
          buttonTransfer: true,
          buttonDetail: true
        }
      ]
    };
  },
  methods: {
    transfer () {
      // TODO
    }
  },
  mounted () {
  }
};
</script>

<style>
</style>
