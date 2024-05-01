export function convertUnixTimeToDateTime(time: string): string {
    const dateTime = new Date(Number(time) * 1000);
    return dateTime.toLocaleString();
}