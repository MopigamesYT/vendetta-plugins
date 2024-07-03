import { logger, commands } from "@vendetta";
import { findByProps } from "@vendetta/metro"
import Settings from "./Settings";
import { ButtplugBrowserWebsocketClientConnector, ButtplugClient, ButtplugClientDevice, ButtplugDeviceError } from "buttplug";
import validator from 'validator';
import { storage } from "@vendetta/plugin";


const ClydeUtils = findByProps("sendBotMessage")


export function isValidWebSocketUrl(url: string): boolean {
    // Use validator.js to check if the URL is a valid WebSocket URL
    return validator.isURL(url, {
        protocols: ['ws', 'wss'],
        require_protocol: true,
        require_tld: false,  // Allows for localhost and IP addresses without TLD
        allow_underscores: true,
    })
};

export default {
    onLoad: () => {
        logger.log("Hello world! test, url: " + storage.url);


    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}
