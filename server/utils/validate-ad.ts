import { z, ZodError } from "zod";

const Ad = z.object({
  name: z.string(),
  gameId: z.string(),
  yearsPlaying: z.number().positive(),
  discord: z
    .string()
    .regex(new RegExp("^.{3,32}#[0-9]{4}$"), "Invalid discord username."),
  weekDays: z.string(),
  hourStart: z.number(),
  hourEnd: z.number(),
  useVoiceChannel: z.boolean(),
});

export async function validateAd(newAd: any): Promise<{success: boolean, errors: any}> {
  try {
    const data = Ad.parse(newAd);
    console.log(data)
  } catch (err) {
    if (err instanceof ZodError) {
      return { success: false, errors: err.flatten().fieldErrors };
    } else {
      throw err;
    }
  }

  return { success: true, errors: null }
}
