function isLeapYear(year){
  if (year < 4) return false;
  return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
}
