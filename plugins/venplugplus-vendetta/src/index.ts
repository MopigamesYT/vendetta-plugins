import { logger, commands } from "@vendetta";
import { findByProps } from "@vendetta/metro"
import Settings from "./Settings";
import { ButtplugBrowserWebsocketClientConnector, ButtplugClient, ButtplugClientDevice, ButtplugDeviceError } from "buttplug";

const ClydeUtils = findByProps("sendBotMessage")
let client: ButtplugClient | null = null;


export function isValidWebSocketUrl(url: string): boolean {
    const webSocketUrlPattern = /^wss?:\/\/(?:[a-zA-Z0-9-._~%]+|(?:\d{1,3}\.){3}\d{1,3})(?::\d{1,5})?(?:\/[^\s]*)?$/;



    // Test the URL against the pattern
    return webSocketUrlPattern.test(url);
}

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
