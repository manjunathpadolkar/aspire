export const state = () => ({
  loans: [
    {
      loan_id: 1231231231232,
      username: 'manjunath@test.com', 
      amount: 100000,
      term: 2,
      installments: [
        {installed_no: 1, paid: false, amount: 50000},
        {installed_no: 2, paid: false, amount: 50000}
      ]
    },
    {
      loan_id: 12312312312311,
      username: 'manjunath@test.com',
      amount: 50000,
      term: 2,
      installments: [
        {installed_no: 1, paid: false, amount: 25000},
        {installed_no: 2, paid: false, amount: 25000}
      ]
    },
  ]
})

export const mutations = {
  addLoan(state, loan) {
    state.loans.push({
      loan_id: loan.loan_id,
      username: loan.username,
      amount: loan.amount,
      term: loan.term,
      installments: loan.installments
    })
  },
  installmentPaid(state, loan){
    let newLoanMapArray = JSON.parse(JSON.stringify(state.loans))
    let newLoanArray = newLoanMapArray.map(function(loanItem){

      if(loanItem.loan_id == loan.loan_id){
        loanItem.installments.map(function(installmentItem){
          if(installmentItem.installed_no == loan.installed_no){
            installmentItem.paid = true
          }
          return installmentItem
        })
      }

      return loanItem
    })
    state.loans = newLoanArray
  }
}