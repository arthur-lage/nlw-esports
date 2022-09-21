import axios from "axios";

export function LoginWithDiscord() {
  return (
    <a href="https://discord.com/api/oauth2/authorize?client_id=1021903218084687963&redirect_uri=http%3A%2F%2Flocalhost%3A5173&response_type=code&scope=identify">
      Login with discord
    </a>
  );
}
