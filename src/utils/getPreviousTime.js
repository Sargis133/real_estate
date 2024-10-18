export const getPreviousTime = (date) => {
    const milliseconds = new Date('2023-11-06T23:44:33Z').getTime()
    const now = Date.now(); // Текущее время в миллисекундах
    const pastDate = milliseconds; // Входные миллисекунды
    const diffInSeconds = Math.floor((now - pastDate) / 1000);

    const years = Math.floor(diffInSeconds / (365 * 24 * 60 * 60));
    const months = Math.floor(diffInSeconds / (30 * 24 * 60 * 60));
    const weeks = Math.floor(diffInSeconds / (7 * 24 * 60 * 60));
    const days = Math.floor(diffInSeconds / (24 * 60 * 60));
    const hours = Math.floor(diffInSeconds / (60 * 60));
    const minutes = Math.floor(diffInSeconds / 60);

    if (years > 0) {
        return years === 1 ? "1 year ago" : `${years} years ago`;
    } else if (months > 0) {
        return months === 1 ? "1 month ago" : `${months} months ago`;
    } else if (weeks > 0) {
        return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    } else if (days > 0) {
        return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
        return diffInSeconds === 1 ? "1 second ago" : `${diffInSeconds} seconds ago`;
    }
}