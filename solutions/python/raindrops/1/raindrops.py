def convert(number):
    factors = []
    for i in range(1, number+1):
        if number % i == 0:
            factors.append(i)

    NOT_IN_LIST = (3 not in factors and 5 not in factors and 7 not in factors)
    raindropSpeak = ""
    if NOT_IN_LIST:
        raindropSpeak += str(number)
    else:
        if 3 in factors:
            raindropSpeak += "Pling"
        if 5 in factors:
            raindropSpeak += "Plang"
        if 7 in factors:
            raindropSpeak += "Plong"

    return raindropSpeak