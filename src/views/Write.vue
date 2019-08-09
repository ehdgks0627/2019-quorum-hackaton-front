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
                <div class="text-xs-right">
                  <v-select class="contract-input-field" :items="types" v-model="type"></v-select>
                  <span> Equity Fund</span>
                </div>
                <div>
                  <v-text-field class="contract-input-field" v-model="secName" hint="Stock Name" placeholder="Stock Name" :rules="secNameRules" />
                  <v-text-field class="contract-input-field" v-model="stockCode" hint="Stock Code" placeholder="Stock Code" :rules="stockCodeRules" />
                  <br />
                  <span>Set an Dues Per Year of </span>
                  <v-text-field class="contract-input-field" v-model="duesPerYear" hint="Dues Per Year" placeholder="Dues Per Year" :rules="duesPerYearRules" />
                  <span>%.</span>
                  <br />
                  <span>Set the Notional Amount to </span>
                  <v-text-field class="contract-input-field" v-model="notionalAmount" hint="Notional Amount" placeholder="Notional Amount" :rules="notionalAmountRules" />
                  <span>￦.</span>
                  <br />
                  <span>Set the Issue Amount to </span>
                  <v-text-field class="contract-input-field" v-model="issueAmount" hint="Issue Amount" placeholder="Issue Amount" :rules="issueAmountRules" />
                  <span>￦.</span>
                  <br />
                  <span>Then issue date is </span>
                  <v-menu
                    v-model="issueDateMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="issueDate"
                        label="Issue Date"
                        readonly
                        v-on="on"
                        class="contract-input-field"
                      ></v-text-field>
                    </template>
                    <v-date-picker light color="#242d55" v-model="issueDate" @input="issueDateMenu = false"></v-date-picker>
                  </v-menu>
                  <!-- <v-text-field class="contract-input-field" v-model="issueDate" hint="Issue Date" placeholder="Issue Date" :rules="issueDateRules" /> -->
                  <span>and, </span>
                  <span>the expiration date is For </span>
                  <v-text-field class="contract-input-field" v-model="expiryYears" hint="Expiry Years" placeholder="Expiry Years" :rules="expiryYearsRules" />
                  <!-- <v-menu
                    v-model="expiryDateMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="expiryDate"
                        label="Expiry Date"
                        readonly
                        v-on="on"
                        class="contract-input-field"
                      ></v-text-field>
                    </template>
                    <v-date-picker light color="#242d55" v-model="expiryDate" @input="expiryDateMenu = false"></v-date-picker>
                  </v-menu> -->
                  <!-- <v-text-field class="contract-input-field" v-model="expiryDate" hint="Expiry Date" placeholder="Expiry Date" :rules="expiryDateRules" /> -->
                  <span> years.</span>
                  <br />
                  <span>Set the Under Per Price to </span>
                  <v-text-field class="contract-input-field" v-model="underPerPrice" hint="Under Per Price" placeholder="Under Per Price" :rules="underPerPriceRules" />
                  <span>￦.</span>
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
      expiryYears: '',
      // expiryDate: '',
      underPerPrice: '',
      years: '',
      type: 'private',
      types: ['private', 'public'],
      issueDateMenu: false,
      // expiryDateMenu: false,
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
      // expiryDateRules: [
      //   v => !!v || 'Please input Expiry Date.'
      // ],
      expiryDateRules: [
        v => !!v || 'Please input Expiry Years.'
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
      this.expiryYears = '';
      // this.expiryDate = '';
      this.underPerPrice = '';
      this.years = '';
      this.type = 'private';
      this.valid = true;
    },
    submit () {
      var body = {
        totalSupply: this.issueAmount,
        secName: this.secName,
        stockCode: this.stockCode,
        duesPerYear: this.duesPerYear * 10,
        fundingYears: this.expiryYears,
        issueAmout: this.issueAmount,
        issueDate: this.issueDate,
        expiryDate: this.issueDate + (this.expiryYears * 3.154e+10),
        underPerPrice: this.underPerPrice
      }
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
