export function getDateString([year, month]) {
  const date = new Date(year, month - 1)

  return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
}

export function getDateRangeString(startNumbers, endNumbers) {
  const [startYear, startMonth] = startNumbers
  const [endYear, endMonth] = endNumbers

  let years = endYear - startYear
  let months = endMonth - startMonth

  if (months < 0) {
    years -= 1
    months += 12
  }

  const countString = (count, word) => {
    if (count <= 0) return ''

    let string = `${count} ${word}`

    if (count > 1) {
      string += 's'
    }

    return string
  }

  const yearString = countString(years, 'year')
  const monthString = countString(months, 'month')

  return `(${[yearString, monthString].join(' ').trim()})`
}
