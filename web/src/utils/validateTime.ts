export function validateTime(time: string) {
  return String(time).match(/[0-9]{2}:[0-9]{2}/)
}