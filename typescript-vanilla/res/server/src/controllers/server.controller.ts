import { FiveMController } from "@core/decorators/nyx.decorators";
import { ServerController } from "@core/server/server.controller";
import { logger } from "@server/shared/logger";

@FiveMController()
export class Server extends ServerController {
  constructor() {
    super();

    logger.info("Server controller initialized");
  }
}
