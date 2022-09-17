import { Request, Response, Router } from "express";
import { prisma } from "../prisma/prisma";
import { convertHoursStringToMinutes } from "../../utils/convert-hours-string-to-minutes";
import { convertMinutesToHoursString } from "../../utils/convert-minutes-to-hours-string";

const routes = Router();

routes.get("/", async (req: Request, res: Response) => {
  try {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    });

    return res.status(200).json(games);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.get("/:id/ads", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ads = await prisma.ad.findMany({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      where: {
        gameId: id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(
      ads.map((ad) => {
        return {
          ...ad,
          weekDays: ad.weekDays.split(","),
          hourStart: convertMinutesToHoursString(ad.hourStart),
          hourEnd: convertMinutesToHoursString(ad.hourEnd),
        };
      })
    );
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.post("/:id/ads", async (req: Request, res: Response) => {
  try {
    const gameId = req.params.id;
    const {
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
    } = req.body;

    const newAd = {
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays: weekDays.join(","),
      hourStart: convertHoursStringToMinutes(hourStart),
      hourEnd: convertHoursStringToMinutes(hourEnd),
      useVoiceChannel: useVoiceChannel ? 1 : 0,
    };

    await prisma.ad.create({
      data: newAd,
    });

    return res.status(201).json({ message: "Ad created successfully." });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

export { routes };
