<template>
  <div class="p-6">
    <form>
      <div class="w-full">
        <input
          v-model="loanAmount"
          class="p-3 w-full focus:border-ap-color-#01D167 rounded border-2 outline-none text-ap-color-#0C365A"
          type="text"
          id="loan-amount"
          name="loan-amount"
          placeholder="Loan amount"
        />
        <div 
          v-if="validation.hasError('loanAmount')" 
          class="block w-full text-left"
          :class="{ 'text-red-700': true }"
        >
          {{ validation.firstError('loanAmount') }}
        </div>
      </div>
      <div class="w-full">
        <select 
          placeholder="Loan term"
          :style="{'padding': '10px', 'border-radius': '4px', 'display': 'block', 'width': '100%', 'margin-top': '16px'}"
          v-model="loanTerm">
          <option value="2" class="block w-full">2 months term</option>
          <option value="4" class="block w-full">4 months term</option>
          <option value="6" class="block w-full">6 months term</option>
          <option value="8" class="block w-full">8 months term</option>
          <option value="10" class="block w-full">10 months term</option>
        </select>
        <div 
          v-if="validation.hasError('loanTerm')" 
          class="block w-full text-left"
          :class="{ 'text-red-700': true }"
        >
          {{ validation.firstError('loanTerm') }}
        </div>
      </div>
      <button
        class="bg-ap-color-#01D167 text-white font-bold p-3 rounded-full w-80 text-ap-font-size-19 mt-3 text-center tracking-wide"
        type="submit"
        @click.prevent="createLoan"
      >
        {{ submitting ? 'Creating Loan.. ' : 'Create Loan' }} 
      </button>      
    </form>

    <div 
      class="mt-6"
      v-for="(authUserLoan, key) in authUserLoans"
      :key="key">
      <div 
        class="grid grid-cols-1 p-2 border-t-2 border-r-2 border-l-2">
        <div>Loan ID : {{ authUserLoan.loan_id }}</div>
        <div>Amount : {{ authUserLoan.amount }}</div>
        <div>Term : {{ authUserLoan.term }}</div>
      </div>
      <div>
        <div 
          class="grid grid-cols-1 md:grid-cols-3 p-6 bg-white border-b-2 border-r border-l">
          <div>Installment no.</div>
          <div>Amount</div>
          <div>&nbsp;</div>
        </div>
        <div
          v-for="(installment, iKey) in authUserLoan.installments" 
          :key="iKey"
          class="grid grid-cols-1 md:grid-cols-3 p-6 bg-white border-b border-r border-l">
          <div>{{ installment.installed_no }}</div>
          <div>{{ installment.amount }}</div>
          <div>
            <button 
              v-if="!installment.paid"
              @click.prevent="paid(authUserLoan.loan_id, installment.installed_no)"
              class="bg-ap-color-#01D167 text-white font-bold p-2 rounded-lg w-10">Pay</button>
            <span v-else>Paid</span>
          </div>
        </div>

      </div>
    </div>
    <!--<pre>{{ authUserLoans }}</pre>-->

  </div>
</template>
<script>
import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator
export default {
  name: 'code-challenge',
  data(){
    return {
      submitting: false,
      loanAmount: null,
      loanTerm: 4,
    }
  },
  validators: {
    loanAmount: function (value) {
      return Validator.value(value).required().integer();
    },
    loanTerm: function (value) {
      return Validator.value(value).required().integer();
    }
  },
  computed:{
    authUserLoans(){
      let _this = this
      if(_this.$store.state.authUser){
        let authUsername = _this.$store.state.authUser.username
        let loadData = JSON.parse(JSON.stringify(_this.$store.state.loan.loans))
        return loadData.filter(function(val){
          return val.username == authUsername
        })
      }
      return []
    }
  },
  methods:{
    createLoan(){
      let _this = this
      _this.$validate().then(function(success){
        if (success) {
          _this.submitting = true
          setTimeout(function(){

            let installments = []
            let installmentAmt = (_this.loanAmount / _this.loanTerm);
            for (let i = 1; i <= _this.loanTerm; i++) { 
              installments.push({
                installed_no: i,
                paid: false,
                amount: installmentAmt
              })
            }

            _this.$store.commit('loan/addLoan', {
              loan_id: Date.now(),
              username: _this.$store.state.authUser.username,
              amount: _this.loanAmount,
              term: _this.loanTerm,
              installments: installments
            })

            _this.submitting = false
            _this.reset()

          }, 2000)
        }
      })
    },
    reset(){
      this.loanAmount = null
      this.loanTerm = null
      this.validation.reset()
    },
    paid(loan_id, installed_no){
      this.$store.commit('loan/installmentPaid', {
        loan_id,
        installed_no
      })
    }
  }
}
</script>
