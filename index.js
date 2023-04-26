/* Your Code Here */

function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(dateString) {
    const dateTimeArray = dateString.split(" ");
    const date = dateTimeArray[0];
    const time = parseInt(dateTimeArray[1], 10);
    const timeInEvent = {
      type: "TimeIn",
      date: date,
      hour: time,
    };
    this.timeInEvents.push(timeInEvent);
    return this;
  }  
  
  function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
  }

  function hoursWorkedOnDate(employeeRecord, date) {
    // Find the timeIn and timeOut events for the given date
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    // Calculate the hours worked by subtracting the timeIn from the timeOut
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  
    return hoursWorked;
  }
  
  function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date);
    let timeOut = this.timeOutEvents.find(event => event.date === date);
    
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  
  function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const wage = this.payPerHour;
  return hoursWorked * wage;
}
 
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employeeRecord) => {
      return totalPayroll + allWagesFor.call(employeeRecord);
    }, 0);
  }
  
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

