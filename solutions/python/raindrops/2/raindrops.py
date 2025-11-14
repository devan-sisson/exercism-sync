def convert(number):
  raindrop_speak = ''

  if number % 3 != 0 and number % 5 != 0 and number %7 != 0:
    return str(number)

  else:
    if number % 3 == 0:
      raindrop_speak += "Pling"
    if number % 5 == 0:
        raindrop_speak += "Plang"
    if number % 7 == 0:
        raindrop_speak += "Plong"
  

    return raindrop_speak