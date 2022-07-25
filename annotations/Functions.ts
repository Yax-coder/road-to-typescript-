const add = (a: number, b: number): number => {
  return a + b;
};

function multiply(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};
