function formatPopulation(population) {
  if (population >= 1000000000) {
    return `${toFixedWithoutZeros(population / 1000000000, 2)}B`;
  }
  if (population >= 100000) {
    return `${toFixedWithoutZeros(population / 1000000, 2)}M`;
  }
  if (population >= 1000) {
    return `${toFixedWithoutZeros(population / 1000, 2)}K`;
  }
  return population;
}

const toFixedWithoutZeros = (num, precision) => Number.parseFloat(num.toFixed(precision));


export default formatPopulation;
