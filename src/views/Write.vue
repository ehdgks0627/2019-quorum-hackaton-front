<template>
  <div class="write">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" gradient="to top right, rgba(100,115,201,.63), rgba(25,32,72,.9)" class="justify-center align-center">
      <v-card class="mx-auto pa-4" max-width="800">
        <v-layout column>
          <h3 class="display-2 text-xs-center my-4">주가연계증권 계약서</h3>
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
              <v-btn color="primary">
                <span>Submit</span>
                <v-icon class="ml-2">send</v-icon>
              </v-btn>
            </v-layout>
          </v-form>
        </v-layout>
      </v-card>
    </v-img>
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
