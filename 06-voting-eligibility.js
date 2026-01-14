function checkVotingEligibility(age) {
  // implement your solution here

  if (typeof age === 'number' && age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

module.exports = { checkVotingEligibility };