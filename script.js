var dateDiffInDays = function (dateOne, dateTwo) {
  //   write your code here
	 let firstDate= new Date(dateOne);
        let secondDate= new Date(dateTwo);

        const diffInTime=secondDate.getTime() - firstDate.getTime();
        
        const diffIndays= diffInTime/(1000*3600*24);

        return diffIndays;
       }
// Do not change the cod below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));