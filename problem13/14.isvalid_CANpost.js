function caPostalCode(str)
{
 regexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(caPostalCode("K8V3Y1"));

console.log(caPostalCode("K8V 3Y1"));

console.log(caPostalCode("Z4V4X1"));
