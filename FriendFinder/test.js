var arr = [  
   {  
      "QuestionText":"What is your Name",
      "QuestionType":1
   },
   {  
      "QuestionText":"Where are you from",
      "QuestionType":2,
      "ChoiceList":[  
         "US",
         "UK"
      ]
   },
   {  
      "QuestionText":"Are you married",
      "QuestionType":3,
      "ChoiceList":[  
         "Yes",
         "No"
      ]
   }
];

 var jStr = JSON.stringify(arr);
console.log(jStr.QuestionText + "\n \n");

 var jStr2 = JSON.stringify(jStr);
 console.log(jStr2.QuestionText + "\n \n")

var parsedArr = JSON.parse(jStr2);
console.log(parsedArr.QuestionText + "\n \n");

var parsedArr2 = JSON.parse(parsedArr);
console.log(parsedArr2.QuestionText + "\n \n");


