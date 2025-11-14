using System;

public static class Leap
{
    public static bool IsLeapYear(int year)
    {
        var yearDivisibleByFour = (year % 4) == 0;
        var yearDivisibleByOneHundred = (year % 100) == 0;
        var yearDivisibleByFourHundred = (year % 400) == 0;

        return yearDivisibleByOneHundred ? yearDivisibleByFourHundred : yearDivisibleByFour;
    }
}