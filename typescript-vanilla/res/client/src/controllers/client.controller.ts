import { logger } from "@client/shared/logger";
import { ClientController } from "@core/client/client.controller";
import { FiveMController } from "@core/decorators/nyx.decorators";

@FiveMController()
export class Client extends ClientController {
  public constructor() {
    super();

    logger.info("Client controller initialized");
  }
}
