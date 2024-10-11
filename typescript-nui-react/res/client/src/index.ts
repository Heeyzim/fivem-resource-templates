import { ClientEvents } from "@repyx/events";

export class Client {
  events: ClientEvents = new ClientEvents();

  constructor() {
    on("onResourceStart", (resName: string) => {
      if (resName === GetCurrentResourceName()) {
        console.log(`[${resName}] started!`);
      }
    });
  }
}
const client = new Client();
globalThis.exports("client", () => client);
