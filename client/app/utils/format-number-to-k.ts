const bill = 1000000000
const mill = 1000000
const thousand = 1000

export const formarNumberToK = (num: number): string => {
	if (num >= bill) {
		return (num / bill).toFixed(1).replace(/\.0$/, '') + 'G'
	}

	if (num >= mill) {
		return (num / mill).toFixed(1).replace(/\.0$/, '') + 'M'
	}

	if (num >= thousand) {
		return (num / thousand).toFixed(1).replace(/\.0$/, '') + 'K'
	}

	return num.toString()
}
