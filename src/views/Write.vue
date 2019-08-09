<template>
  <div class="write">
    <div class="main mini">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
      <div class="circle c4"></div>
      <div class="circle c5"></div>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <h3 class="display-3 text-xs-center">CONTRACT WRITING</h3>
            <h3 class="display-1 mb-4 text-xs-center red-text">Create and distribute an QELS Contract !</h3>
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
          <v-card class="card mx-auto my-5" max-width="800" elevation="24">
            <v-layout column>
              <h3 class="display-1 text-xs-center my-4">Quorum Equity Linked Securities Contract</h3>
              <v-form ref="form" v-model="valid" lazy-validation>
                <div>
                  <v-select class="text-xs-right contract-input-field" :items="types" v-model="type"></v-select>
                </div>
                <div>
                  <v-text-field class="contract-input-field" v-model="secName" hint="Stock Name" placeholder="Stock Name" :rules="secNameRules" />
                  <v-text-field class="contract-input-field" v-model="stockCode" hint="Stock Code" placeholder="Stock Code" :rules="stockCodeRules" />
                  <br />
                  <span>연 이자율을 </span>
                  <v-text-field class="contract-input-field" v-model="duesPerYear" hint="Dues Per Year" placeholder="Dues Per Year" :rules="duesPerYearRules" />
                  <span>% 로 책정한다.</span>
                  <br />
                  <span>액면 금액을 </span>
                  <v-text-field class="contract-input-field" v-model="notionalAmount" hint="Notional Amount" placeholder="Notional Amount" :rules="notionalAmountRules" />
                  <span>원 으로 책정한다.</span>
                  <br />
                  <span>발행가액을 </span>
                  <v-text-field class="contract-input-field" v-model="issueAmount" hint="Issue Amount" placeholder="Issue Amount" :rules="issueAmountRules" />
                  <span>원 으로 책정한다.</span>
                  <br />
                  <span>발행일은 </span>
                  <v-text-field class="contract-input-field" v-model="issueDate" hint="Issue Date" placeholder="Issue Date" :rules="issueDateRules" />
                  <span>이며, </span>
                  <span>만기일은 </span>
                  <v-text-field class="contract-input-field" v-model="expiryDate" hint="Expiry Date" placeholder="Expiry Date" :rules="expiryDateRules" />
                  <span>원 으로 정한다.</span>
                  <br />
                  <span>하한선 금액을 </span>
                  <v-text-field class="contract-input-field" v-model="underPerPrice" hint="하한선 금액" placeholder="하한선 금액" :rules="underPerPriceRules" />
                  <span>원 으로 책정한다.</span>
                </div>
                <v-layout row>
                  <v-spacer />
                  <v-btn flat @click="reset">
                    <span>Reset</span>
                    <v-icon class="ml-2">settings_backup_restore</v-icon>
                  </v-btn>
                  <v-btn color="primary" @click="submit">
                    <span>Submit</span>
                    <v-icon class="ml-2">send</v-icon>
                  </v-btn>
                </v-layout>
              </v-form>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Write',
  components: {
  },
  data () {
    return {
      valid: true,
      secName: '',
      stockCode: '',
      duesPerYear: '',
      notionalAmount: '',
      issueAmount: '',
      issueDate: '',
      expiryDate: '',
      underPerPrice: '',
      years: '',
      type: 'Private Equity Fund',
      types: ['Private Equity Fund', 'Public Equity Fund'],
      secNameRules: [
        v => !!v || 'Please input Stock Name.'
      ],
      stockCodeRules: [
        v => !!v || 'Please input Stock Code.'
      ],
      duesPerYearRules: [
        v => !!v || 'Please input Dues Per Year.'
      ],
      notionalAmountRules: [
        v => !!v || 'Please input Notional Amount.'
      ],
      issueAmountRules: [
        v => !!v || 'Please input Issue Amount.'
      ],
      issueDateRules: [
        v => !!v || 'Please input Issue Date.'
      ],
      expiryDateRules: [
        v => !!v || 'Please input Expiry Date.'
      ],
      underPerPriceRules: [
        v => !!v || 'Please input Under Per Price.'
      ]
    };
  },
  methods: {
    reset () {
      this.secName = '';
      this.stockCode = '';
      this.duesPerYear = '';
      this.notionalAmount = '';
      this.issueAmount = '';
      this.issueDate = '';
      this.expiryDate = '';
      this.underPerPrice = '';
      this.years = '';
      this.type = 'Private Equity Fund';
      this.valid = true;
    },
    submit () {
    }
  },
  mounted () {
  }
};
</script>

<style scoped>
.contract-input-field {
  display: inline-block;
  margin: 0px 8px;
}
</style>
