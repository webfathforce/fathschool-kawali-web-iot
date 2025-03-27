export function getTemperatureClass(temperature: number) {
  if (temperature < 20) {
    return "from-blue-200/70 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/15 text-blue-500 bg-blue-600/15"; // Dingin
  }

  return "from-orange-200/70 to-orange-100 dark:from-orange-900/70 dark:to-orange-800/15 text-orange-500 bg-orange-600/15"; // Hangat/Panas
}

export function parseTemperature(temperature: string) {
  return parseFloat(temperature?.replace("°C", "")) || 0;
}
