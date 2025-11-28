public class Lasagna {

	public int expectedMinutesInOven() {
		return 40;
	}

	public int remainingMinutesInOven(int timeInOven) {
		return this.expectedMinutesInOven() - timeInOven;
	}

	public int preparationTimeInMinutes(int layers) {
		return layers * 2;
	}

	public int totalTimeInMinutes(int layers, int timeInOven) {
		return this.preparationTimeInMinutes(layers) + timeInOven;
	}
}
