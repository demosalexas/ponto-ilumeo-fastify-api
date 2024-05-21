export function getTimeDifference(startDate: Date, endDate: Date): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error('Invalid date format');
  }

  const diffMs: number = end.getTime() - start.getTime();
  const diffHrs: number = Math.floor(diffMs / 3600000);
  const diffMins: number = Math.round((diffMs % 3600000) / 60000);

  if (diffHrs === 0) {
    return `${diffMins}m`;
  } else if (diffMins === 0) {
    return `${diffHrs}h`;
  } else {
    return `${diffHrs}h ${diffMins}m`;
  }
}
