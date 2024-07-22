//Determine the eligibility of a person to vote based on their age. 
function canVote(age) {
    return age >= 18;
  }
  
  console.log(canVote(20));
  console.log(canVote(16));
  console.log(canVote(18));
  console.log(canVote(17));
  