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
          <v-card class="card mx-auto" elevation="24">
            <v-layout fill-height column justify-center align-content-space-around class="pa-3">
              <table class="">
                <thead>
                  <tr>
                    <td></td>
                    <td>
                      <span>Contract Name</span>
                    </td>
                    <td>
                      <span>Issue Amount</span>
                    </td>
                    <td>
                      <span>Dues Per Year</span>
                    </td>
                    <td>
                      <span>Expiry Date</span>
                    </td>
                    <td>
                      <span>Participants</span>
                    </td>
                    <td>
                      <span>Remaining Token</span>
                    </td>
                    <td>
                      <span>Issue Token</span>
                    </td>
                    <td>
                      <span>Function</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="data-row" v-for="(row, rowIndex) in data" :key="rowIndex">
                    <td>
                      <span>{{ row.type }}</span>
                    </td>
                    <td>
                      <span>{{ row.name }}</span>
                    </td>
                    <td>
                      <span>{{ $numberWithCommas(row.issueAmout) }} ￦</span>
                    </td>
                    <td>
                      <span>{{ row.duesPerYear }} %</span>
                    </td>
                    <td>
                      <span>{{ row.fundingYears }} years</span>
                    </td>
                    <td>
                      <span>{{ row.JoinCnt || row.cnt }}</span>
                    </td>
                    <td>
                      <span>{{ row.remainToken }}</span>
                    </td>
                    <td>
                      <span>{{ row.issueToken }}</span>
                    </td>
                    <td>
                      <v-layout column>
                        <v-dialog v-model="row.joinDialog" persistent max-width="400">
                          <template v-slot:activator="{ on }">
                            <v-btn class="my-3" v-on="on">
                              <span>Join</span>
                            </v-btn>
                          </template>
                          <v-card class="card white-back">
                            <v-card-title class="headline">How much join ?</v-card-title>
                            <v-card-text>Value {{ row.value }} * {{ row.inputValue }} = {{ isNaN(row.value * row.inputValue) ? 0 : (row.value * row.inputValue) }}</v-card-text>
                            <v-text-field light box v-model="row.inputValue" label="Input Value"></v-text-field>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="green darken-1" text @click="row.joinDialog = false">Close</v-btn>
                              <v-btn color="green darken-1" text @click="join(row)">Join</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
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
          type: 'Private',
          name: '제 111회 한화',
          issueAmount: 10000000000,
          fundingYears: 2.6,
          expiryDate: 2,
          participants: 3,
          remainToken: 99,
          issueToken: 100,
          buttonJoin: true,
          buttonDetail: true
        }, {
          type: 'Public',
          name: '제 2회 한화',
          issueAmount: 1000000000000,
          fundingYears: 5,
          expiryDate: 5,
          participants: 109,
          remainToken: 586,
          issueToken: 1000,
          buttonJoin: true,
          buttonDetail: true
        }, {
          fundingYears: 2,
          name: 'test contract',
          type: 'public',
          contractAddress: '0x1234',
          erc20ContractAddress: '131414',
          owner: 1,
          stockCode: '4422342',
          uid: null,
          value: 1000
        }
      ]
    };
  },
  methods: {
    loadData () {
      this.$http.get(this.$store.getters.server.hostname + this.$store.getters.server.path.list).then((response) => {
        console.log(response);
        if (response.data.ok) {
          this.data = response.data.d;
        }
      }).catch((error) => {
        console.log('error', error);
      }).finally(() => {
        console.log('finally');
      });
    },
    join (row) {
      var body = {
        name: row.name,
        amount: row.inputValue
      };
      this.$http.post(this.$store.getters.server.hostname + this.$store.getters.server.path.buy, body).then((response) => {
        console.log(response);
        if (response.data.ok) {
          this.$store.dispatch('showSnackbar', {message: 'Successfully buy contract', color: 'success'});
        }
      }).catch((error) => {
        console.log('error', error);
        this.$store.dispatch('showSnackbar', {message: 'Failed buy contract', color: 'error'});
      }).finally(() => {
        console.log('finally');
        row.joinDialog = false;
      });
    }
  },
  mounted () {
    this.loadData();
  }
};
</script>

<style>
</style>
