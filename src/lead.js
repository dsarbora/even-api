// No fields are strictly required in the lead.

export class Lead{
    constructor(myFirstName, myLastName, myEmail, myCity, myState, myPrimaryPhone, myWorkPhone, myAddress1, myAddress2, mySsn, myPurpose, myLoanAmount, myEducationLevel, myProvidedCreditRating, myEmploymentStatus, myAnnualIncome, myPayFrequency ){
      this.productTypes = ["loan"];
      this.personalInformation = { firstName: myFirstName, lastName: myLastName, email: myEmail, city: myCity, state: myState, primaryPhone: myPrimaryPhone, workPhone: myWorkPhone, address1: myAddress1, address2: myAddress2, ssn: mySsn, educationLevel: myEducationLevel};
      this.loanInformation = { purpose: myPurpose, loanAmount: parseInt(myLoanAmount)};
      this.creditInformation = { providedCreditRating: myProvidedCreditRating };
      this.financialInformation = { employmentStatus: myEmploymentStatus, annualIncome: parseInt(myAnnualIncome), employmentPayFrequency: myPayFrequency }
      if(this.personalInformation.ssn === ""){
        delete this.personalInformation.ssn;
      }
      if(Number.isNaN(this.financialInformation.annualIncome)){
        delete this.financialInformation.annualIncome;
      }
    }

    returnJSON(){
      return JSON.stringify(this);
    }
}

// example of json object

// {
//   "productTypes": [
//     "loan",
//     "savings"
//   ],
//   "personalInformation": {
//     "firstName": "John",
//     "lastName": "Doe",
//     "email": "john@example.com",
//     "city": "New York",
//     "state": "NY",
//     "workPhone": "2125551234",
//     "primaryPhone": "2125556789",
//     "address1": "45 West 21st Street",
//     "address2": "5th Floor",
//     "zipcode": "10010",
//     "monthsAtAddress": 5,
//     "driversLicenseNumber": "111222333",
//     "driversLicenseState": "NY",
//     "ipAddress": "8.8.8.8",
//     "activeMilitary": false,
//     "militaryVeteran": true,
//     "dateOfBirth": "1993-10-09",
//     "educationLevel": "bachelors",
//     "ssn": "111-22-3333"
//   },
//   "loanInformation": {
//     "purpose": "home_refi",
//     "loanAmount": 10000
//   },
//   "mortgageInformation": {
//     "propertyType": "condo",
//     "propertyStatus": "own_with_mortgage",
//     "propertyValue": 200000,
//     "mortgageBalance": 10000,
//     "lenderName": "Bank OF NY",
//     "hasFHALoan": true,
//     "currentWithLoan": true
//   },
//   "creditCardInformation": {
//     "allowAnnualFee": true,
//     "cardBenefits": [
//       "travel_incentives"
//     ]
//   },
//   "creditInformation": {
//     "providedCreditRating": "excellent",
//     "providedNumericCreditScore": 750
//   },
//   "financialInformation": {
//     "employmentStatus": "employed",
//     "employmentPayFrequency": "weekly",
//     "annualIncome": 120000,
//     "monthlyNetIncome": 10000,
//     "bankName": "Santander",
//     "bankRoutingNumber": "231372691",
//     "bankAccountType": "savings",
//     "monthsAtBank": 10,
//     "bankAccountNumber": "1234567890"
//   },
//   "employmentInformation": {
//     "employerName": "EVEN Financial",
//     "employerAddress": "45 W 21st St",
//     "employerCity": "New York",
//     "employerState": "NY",
//     "employerZip": "10010",
//     "jobTitle": "Software Engineer",
//     "monthsEmployed": 14,
//     "directDeposit": true,
//     "payDate1": "2004-10-06",
//     "payDate2": "2004-11-06"
//   },
//   "legalInformation": {
//     "consentsToFcra": true,
//     "consentsToTcpa": true,
//     "tcpaLanguage": "I agree to be contacted by Even Financial and its partners at the telephone number(s) I have provided above to explore personal loan offers, including contact through automatic dialing systems, artificial or pre-recorded voice messaging, or text message. I understand my consent is not required as a condition to purchasing any goods or services from anyone."
//   },
//   "clientTags": {
//     "hello": [
//       "world",
//       "there"
//     ],
//     "something": [
//       "else"
//     ]
//   }
// }
