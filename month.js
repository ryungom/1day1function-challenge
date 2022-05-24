function isLeapYear (year) {
  return (year % 4 === 0) && (year % 100 === 0) || (year % 400 === 0) 
  // year을 4로 나누고 100으로 나누었을때 나머지 없이 맞아 떨어지거나, 400으로 나누었을때 나머지가 딱 맞아 떨어지면 윤년이다 라는 공식.
}

console.log (`2022년은 윤년이 맞을까요?! === ${isLeapYear(2022}`) // false
