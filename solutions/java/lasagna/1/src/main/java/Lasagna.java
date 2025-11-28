public class Lasagna {
	private int BASE_TIME_IN_OVEN = 40;

	// TODO: define the 'expectedMinutesInOven()' method
	public int expectedMinutesInOven() {
		return BASE_TIME_IN_OVEN;
	}

    // TODO: define the 'remainingMinutesInOven()' method
	public int remainingMinutesInOven(int timeInOven) {
		return BASE_TIME_IN_OVEN - timeInOven;
	}

    // TODO: define the 'preparationTimeInMinutes()' method
	public int preparationTimeInMinutes(int layers) {
		return layers * 2;
	}

    // TODO: define the 'totalTimeInMinutes()' method
	public int totalTimeInMinutes(int layers, int timeInOven) {
		return this.preparationTimeInMinutes(layers) + timeInOven;
	}
}
