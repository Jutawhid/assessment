/**
 * Get Week Number and Year
 * Returns the number,year of a date passed to the function.
 * @param {date} date
 */

export const getWeekNumberAndYear = (date) => {
    // Copy date so don't modify original
    date = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return [date.getUTCFullYear(), weekNo];
};
