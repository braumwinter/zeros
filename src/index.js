module.exports = function zeros(expression) {
  let array_str = expression.split('*');
  let result_two = 0;
  let result_five = 0;

  for(let iter_array_str = 0; iter_array_str < array_str.length; iter_array_str++){

    if(array_str[iter_array_str].indexOf("!!") !== -1){
      let temp_str = array_str[iter_array_str].slice(0, -2);
      let temp_number = +temp_str;

      while(temp_number > 0){
        let prime_number = 2;
        let number = temp_number;

        while(number > 1){
          if(number%prime_number === 0){
            if(prime_number === 2){
              result_two++;
            }
        
            if(prime_number === 5){
              result_five++;
            }
        
            number /= prime_number;

            } else {
              prime_number++;
            }
          }

        temp_number -= 2;
      }

    } else {
      let temp_str = array_str[iter_array_str].slice(0, -1);
      let temp_number = +temp_str;

      while(temp_number > 0){
        let prime_number = 2;
        let number = temp_number;

        while(number > 1){
          if(number%prime_number === 0){
            if(prime_number === 2){
              result_two++;
            }
        
            if(prime_number === 5){
              result_five++;
            }
        
            number /= prime_number;

          } else {
            prime_number++;
          }
        }
        temp_number -= 1;
      }
    }
  }

  if(result_five < result_two) {
    return result_five;
  } else {
    return result_two;
  }
};