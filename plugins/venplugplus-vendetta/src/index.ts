import { logger, commands } from "@vendetta";
import { findByProps } from "@vendetta/metro"
import Settings from "./Settings";
import { ButtplugBrowserWebsocketClientConnector, ButtplugClient, ButtplugClientDevice, ButtplugDeviceError } from "buttplug";
import validator from 'validator';


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
    onLoad: async () => {
        logger.log("Hello world! test");

        // Create a new ButtplugClient instance
        const client = new ButtplugClient("Test Client");

        // Create a connector with a dummy URL (replace "wss://example.com" with your actual WebSocket server URL)
        const connector = new ButtplugBrowserWebsocketClientConnector("ws://localhost:12345/");

        try {
            // Attempt to connect the client using the connector
            await client.connect(connector);
            logger.log("Buttplug client connected successfully.");
        } catch (error) {
            logger.error("Failed to connect Buttplug client:", error);
        }
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}
