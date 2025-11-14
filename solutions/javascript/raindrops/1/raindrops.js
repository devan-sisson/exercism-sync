export const convert = num => {
  let factors = [];
  let raindropSpeak = "";
  for (let i =1;i< num+1; i++){
    if(num % i === 0) factors.push(i)
  }

  if (!factors.includes(3) && !factors.includes(5) && !factors.includes(7)) return "" + num;

  if (factors.includes(3)){
    raindropSpeak += "Pling";
  }
  if (factors.includes(5)){
    raindropSpeak += "Plang";
  }
  if (factors.includes(7)){
    raindropSpeak += "Plong";
  }

  return raindropSpeak;
};
