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
              <v-form>
                <div>
                  <v-text-field class="contract-input-field" v-model="secName" hint="증권 명칭" placeholder="증권 명칭" :rules="secNameRules" />
                  <v-text-field class="contract-input-field" v-model="stockCode" hint="증권 코드" placeholder="증권 코드" :rules="stockCodeRules" />
                  <br />
                  <span>연 이자율을 </span>
                  <v-text-field class="contract-input-field" v-model="duesPerYear" hint="연 이자율" placeholder="연 이자율" :rules="duesPerYearRules" />
                  <span>% 로 책정한다.</span>
                  <br />
                  <span>액면 금액을 </span>
                  <v-text-field class="contract-input-field" v-model="notionalAmount" hint="액면 금액" placeholder="액면 금액" :rules="notionalAmountRules" />
                  <span>원 으로 책정한다.</span>
                  <br />
                  <span>발행가액을 </span>
                  <v-text-field class="contract-input-field" v-model="issueAmount" hint="발행가액" placeholder="발행가액" :rules="issueAmountRules" />
                  <span>원 으로 책정한다.</span>
                  <br />
                  <span>발행일은 </span>
                  <v-text-field class="contract-input-field" v-model="issueDate" hint="발행일" placeholder="발행일" :rules="issueDateRules" />
                  <span>이며, </span>
                  <span>만기일은 </span>
                  <v-text-field class="contract-input-field" v-model="expiryDate" hint="만기일" placeholder="만기일" :rules="expiryDateRules" />
                  <span>원 으로 정한다.</span>
                  <br />
                  <span>하한선 금액을 </span>
                  <v-text-field class="contract-input-field" v-model="underPerPrice" hint="하한선 금액" placeholder="하한선 금액" :rules="underPerPriceRules" />
                  <span>원 으로 책정한다.</span>
                </div>
                <v-layout row>
                  <v-spacer />
                  <v-btn flat>
                    <span>Reset</span>
                    <v-icon class="ml-2">settings_backup_restore</v-icon>
                  </v-btn>
                  <v-btn color="primary">
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
      secName: '',
      stockCode: '',
      duesPerYear: '',
      notionalAmount: '',
      issueAmount: '',
      issueDate: '',
      expiryDate: '',
      underPerPrice: '',
      years: '',
      secNameRules: [
        v => !!v || '증권 명칭을 입력하세요.'
      ],
      stockCodeRules: [
        v => !!v || '증권 코드를 입력하세요.'
      ],
      duesPerYearRules: [
        v => !!v || '연 이자율을 입력하세요.'
      ],
      notionalAmountRules: [
        v => !!v || '액면 금액을 입력하세요.'
      ],
      issueAmountRules: [
        v => !!v || '발행가액을 입력하세요.'
      ],
      issueDateRules: [
        v => !!v || '발행일을 입력하세요.'
      ],
      expiryDateRules: [
        v => !!v || '만기일을 입력하세요.'
      ],
      underPerPriceRules: [
        v => !!v || '하한선 금액을 입력하세요.'
      ]
    };
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
