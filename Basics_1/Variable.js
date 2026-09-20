 const accountID = 3874499418
   let accountPass = "27720TURU"
   var accountMail = "ICICI@gmail.com"
   accountCity = "pune"

  // method 1 Single declare 

   console.log(accountID); //error ----
   console.log(accountPass);

   accountMail = "SBI@gmail.com"
   accountPass = "8347987HUHIU"
   accountCity = "Mumbai"

  // method 2 all declare 
  // Variable Decalaring with let and Var 
  //prefer not to use var becase of issue in block scope and funtional scope


   console.table(accountMail, accountPass, accountCity); 