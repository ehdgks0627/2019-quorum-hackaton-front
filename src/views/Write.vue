<template>
  <div class="write">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" gradient="to top right, rgba(100,115,201,.63), rgba(25,32,72,.9)" class="justify-center align-center">
      <v-card class="mx-auto pa-4" max-width="1000">
        <v-layout column>
          <h3 class="display-2 text-xs-center my-4">Contract</h3>
          <v-form>
            <v-text-field v-model="secName" label="secName" :rules="secNameRules" />
            <v-text-field v-model="stockCode" label="stockCode" :rules="stockCodeRules" />
            <v-text-field v-model="duesPerYear" label="duesPerYear" :rules="duesPerYearRules" />
            <v-text-field v-model="notionalAmount" label="notionalAmount" :rules="notionalAmountRules" />
            <v-text-field v-model="issueAmount" label="issueAmount" :rules="issueAmountRules" />
            <v-text-field v-model="issueDate" label="issueDate" :rules="issueDateRules" />
            <v-text-field v-model="expiryDate" label="expiryDate" :rules="expiryDateRules" />
            <v-text-field v-model="underPerPrice" label="underPerPrice" :rules="underPerPriceRules" />
            <v-text-field v-model="underPerPrice" label="years" :rules="yearsRules" />
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
        v => !!v || '를 입력하세요.'
      ],
      stockCodeRules: [
        v => !!v || '를 입력하세요.'
      ],
      duesPerYearRules: [
        v => !!v || '를 입력하세요.'
      ],
      notionalAmountRules: [
        v => !!v || '를 입력하세요.'
      ],
      issueAmountRules: [
        v => !!v || '를 입력하세요.'
      ],
      issueDateRules: [
        v => !!v || '를 입력하세요.'
      ],
      expiryDateRules: [
        v => !!v || '를 입력하세요.'
      ],
      underPerPriceRules: [
        v => !!v || '를 입력하세요.'
      ],
      yearsRules: [
        v => !!v || '를 입력하세요.'
      ]
    };
  },
  mounted () {
  }
};
</script>

<style>
</style>
