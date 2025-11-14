def convert(number):
  raindrop_speak = ''

  if number % 3 == 0:
    raindrop_speak += "Pling"
  if number % 5 == 0:
      raindrop_speak += "Plang"
  if number % 7 == 0:
      raindrop_speak += "Plong"
  
  return raindrop_speak if len(raindrop_speak) > 0 else str(number)