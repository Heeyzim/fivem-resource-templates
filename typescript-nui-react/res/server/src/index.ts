import { ServerEvents } from "@repyx/events";

export class Server {
  events: ServerEvents = new ServerEvents();
  constructor() {
    on("onResourceStart", (resName: string) => {
      if (resName === GetCurrentResourceName()) {
        console.log(`[${resName}] Started!`);
      }
    });
  }
}

const server = new Server();
globalThis.exports("server", () => server);
