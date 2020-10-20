class Date{
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(day){
        this.day = day;
    }
    setMonth(month){
        this.month = month;
    }
    setYear(year){
        this.year = year;
    }
}
let date = new Date(2,2,2);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(`${day} ${month} ${year}`);
console.log(`${day} ${month} ${year}`);
date.setDay(10);
date.setMonth(10);
date.setYear(2020);
let day1 = date.getDay();
let month1 = date.getMonth();
let year1 = date.getYear();
alert(`date after set : ${day1} ${month1} ${year1}`);
console.log(`${day1} ${month1} ${year1}`);