class DateHelpers {
  static formatDate(date: Date | string): string {
    const dateObj = date instanceof Date ? date : new Date(date)
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
  }
}

export default DateHelpers
