let weather, color, title, subtitle;

export const weatherOptions = (condition: string) => {
  switch (condition) {
    case 'Clouds':
      weather = 'weather-cloudy';
      color = ['#D7D2CC', '#304352'];
      title = 'Clouds';
      subtitle = 'I know, fucking boring';
      return {weather, color, title, subtitle};
    case 'Thunderstorm':
      weather = 'weather-lightning';
      color = ['#373B44', '#4286f4'];
      title = 'Thunderstorm in the house';
      subtitle = 'Actually, outside of the house';
      return {weather, color, title, subtitle};
    case 'Drizzle':
      weather = 'weather-hail';
      color = ['#89F7FE', '#66A6FF'];
      title = 'Drizzle';
      subtitle = 'Is like rain, but gay 🏳️‍🌈';
      return {weather, color, title, subtitle};
    case 'Rain':
      weather = 'weather-rainy';
      color = ['#00C6FB', '#005BEA'];
      title = 'Raining like a MF';
      subtitle = 'For more info look outside';
      return {weather, color, title, subtitle};
    case 'Snow':
      weather = 'weather-snowy';
      color = ['#7DE2FC', '#B9B6E5'];
      title = 'Cold as balls';
      subtitle = 'Do you want to build a snowman? Fuck no.';
      return {weather, color, title, subtitle};
    case 'Clear':
      weather = 'weather-sunny';
      color = ['#FF7300', '#FEF253'];
      title = 'Sunny as fuck';
      subtitle = 'Go get your ass burnt';
      return {weather, color, title, subtitle};
    case 'Mist':
      weather = 'weather-hail';
      color = ['#4DA0B0', '#D39D38'];
      title = 'Mist!';
      subtitle = "It's like you have no glasses on.";
      return {weather, color, title, subtitle};
    case 'Dust':
      weather = 'weather-hail';
      color = ['#4DA0B0', '#D39D38'];
      title = 'Dusty';
      subtitle = 'Thanks a lot China 🖕🏻';
      return {weather, color, title, subtitle};
    default:
      weather = 'cloud-question';
      color = ['white', 'white'];
      title = 'No weather info, Damn!';
      subtitle = 'Get the hell out of there';
      return {weather, color, title, subtitle};
  }
};
