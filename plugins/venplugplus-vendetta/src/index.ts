import { logger, commands } from "@vendetta";
import { findByProps } from "@vendetta/metro"
import Settings from "./Settings";
import { ButtplugBrowserWebsocketClientConnector, ButtplugClient, ButtplugClientDevice, ButtplugDeviceError } from "buttplug";

const ClydeUtils = findByProps("sendBotMessage")
let client: ButtplugClient | null = null;

export default {
    onLoad: () => {
        logger.log("Hello world! test");
        if (client) {
            logger.log("aaaaa")
        }
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings, 
}
