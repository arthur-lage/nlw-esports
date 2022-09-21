import axios from "axios";
import { Request, Response, Router } from "express";

import { URLSearchParams } from "url";

const routes = Router();

routes.get("/discord/revoke", async (req: Request, res: Response) => {
  try {
    const { token_type, access_token } = req.body;

    const params = new URLSearchParams();

    params.append("client_id", String(process.env.CLIENT_ID));
    params.append("client_secret", String(process.env.CLIENT_SECRET));
    params.append("redirect_uri", "http://localhost:5173");

    const res = await axios.post(
      "https://discord.com/api/oauth2/token/revoke",
      params,
      {
        headers: {
          authorization: `${token_type} ${access_token}`,
        },
      }
    );
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: "An internal error occured." });
  }
});

routes.get("/discord", async (req: Request, res: Response) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(401).json({ message: "Code is required." });
    }

    const params = new URLSearchParams();

    params.append("client_id", String(process.env.CLIENT_ID));
    params.append("client_secret", String(process.env.CLIENT_SECRET));
    params.append("grant_type", "authorization_code");
    params.append("code", String(code));
    params.append("redirect_uri", "http://localhost:5173");

    const discordResponse = await axios.post(
      "https://discord.com/api/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      }
    );

    const userInfo = await axios.get("https://discord.com/api/users/@me", {
      headers: {
        authorization: `${discordResponse.data.token_type} ${discordResponse.data.access_token}`,
      },
    });

    return res.status(200).json({
      discordId: userInfo.data.id,
      discord: `${userInfo.data.username}#${userInfo.data.discriminator}`,
      token_type: userInfo.data.token_type,
      access_token: userInfo.data.access_token,
    });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: "An internal error occured." });
  }
});

export { routes };
