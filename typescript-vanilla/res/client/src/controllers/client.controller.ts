import { ClientController } from "@core/client/client.controller";
import { FiveMController } from "@core/decorators/nyx.decorators";

@FiveMController()
export class Client extends ClientController {
  public constructor() {
    super();

    console.log("Client controller initialized");
  }
}
