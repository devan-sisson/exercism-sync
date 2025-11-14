class Lasagna
{
  private const int baseMinutesInOven = 40;
  // TODO: define the 'ExpectedMinutesInOven()' method
  public int ExpectedMinutesInOven()
  {
    return baseMinutesInOven;
  }

  // TODO: define the 'RemainingMinutesInOven()' method
  public int RemainingMinutesInOven(int timeInOven)
  {
    return baseMinutesInOven - timeInOven;
  }

  // TODO: define the 'PreparationTimeInMinutes()' method
  public int PreparationTimeInMinutes(int layers)
  {
    const int prepTimePerLayer = 2;

    return prepTimePerLayer * layers;
  }

  // TODO: define the 'ElapsedTimeInMinutes()' method
  public int ElapsedTimeInMinutes(int layers, int timeInOven)
  {
    int prepTime = this.PreparationTimeInMinutes(layers);

    return prepTime + timeInOven;
  }
}
