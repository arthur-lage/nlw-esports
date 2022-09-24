export function validateDiscord(discord: string) {
  return String(discord).match(/^.{3,32}#[0-9]{4}$/)
}