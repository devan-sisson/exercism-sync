public static class Pangram
{
    public static bool IsPangram(string input)
    {
        bool[] checkedLetter = new bool[26];

        foreach (var item in input)
        {
            if (item >= 'A' && item <= 'Z')
            {
                checkedLetter[item - 'A'] = true;
            }
            else if (item >= 'a' && item <= 'z')
            {
                checkedLetter[item - 'a'] = true;
            }
        }

        foreach (var letter in checkedLetter)
        {
            if (!letter) return false;
        }

        return true;
    }
}
