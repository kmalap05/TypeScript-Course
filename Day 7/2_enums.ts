// Example 1
enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

const currentWeather = WeatherConditions.Sunny;
console.log(currentWeather);

// Example 2
enum Theme {
  Light = "Light",
  Dark = "Dark",
  Default = "Default",
}

function setTheme(userTheme: Theme): void {
  console.log(`Applying ${userTheme} theme!`);
}

let userPreference: Theme = Theme.Default;

setTheme(userPreference);
