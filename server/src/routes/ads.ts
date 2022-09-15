import { Request, Response, Router } from "express";
import { prisma } from "../prisma/prisma";

const routes = Router();

routes.get("/", async (req: Request, res: Response) => {
  try {
    const ads = await prisma.ad.findMany({});

    return res.status(200).json(ads);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.delete("/", async (req: Request, res: Response) => {
  try {
    await prisma.ad.deleteMany({});

    return res.status(200).json({ message: "Ads deleted successfully" });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.ad.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "Ad deleted successfully" });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.get("/:id/discord", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ad = await prisma.ad.findUnique({
      select: {
        discord: true
      },
      where: {
        id,
      },
    });

    if (!ad) {
      return res.status(404).json({ message: "Could not find ad" });
    }

    const discord = ad.discord;

    return res.status(200).json(discord);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

export { routes };
