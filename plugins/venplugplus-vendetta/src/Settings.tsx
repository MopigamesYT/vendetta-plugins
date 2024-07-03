import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms, General } from "@vendetta/ui/components";

const { FormSection, FormSwitch, FormInput, FormSlider, FormSelect } = Forms;
const { Text } = General;

export default () => {
    const settings = useProxy(storage);

    return (
        <>
            <FormSection title="Connection Settings">
                <FormSwitch
                    label="Connect Automatically"
                    subLabel="Connect to intiface on startup"
                    value={settings.connectAutomatically ?? true}
                    onValueChange={(value) => {
                        settings.connectAutomatically = value;
                    }}
                />
                <FormInput
                    label="WebSocket URL"
                    subLabel="The URL of the websocket server"
                    value={settings.websocketUrl ?? "ws://localhost:12345"}
                    placeholder="ws://localhost:12345"
                    onChange={(value) => {
                        settings.websocketUrl = value;
                    }}
                />
            </FormSection>

            <FormSection title="Vibration Settings">
                <FormSwitch
                    label="Ramp Up and Down"
                    subLabel="Smoothly ramp the vibration intensity up and down"
                    value={settings.rampUpAndDown ?? true}
                    onValueChange={(value) => {
                        settings.rampUpAndDown = value;
                    }}
                />
                <FormSlider
                    label="Ramp Steps"
                    subLabel="Steps to use when ramping up and down"
                    value={settings.rampUpAndDownSteps ?? 20}
                    minimumValue={0}
                    maximumValue={40}
                    step={1}
                    onValueChange={(value) => {
                        settings.rampUpAndDownSteps = value;
                    }}
                />
                <FormSlider
                    label="Max Vibration Intensity"
                    value={settings.maxVibrationIntensity ?? 70}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    onValueChange={(value) => {
                        settings.maxVibrationIntensity = value;
                    }}
                />
            </FormSection>

            <FormSection title="Trigger Words">
                <FormInput
                    label="Target Words"
                    subLabel="Comma-separated list of words to use as targets"
                    value={settings.targetWords ?? ""}
                    placeholder="word1,word2,word3"
                    onChange={(value) => {
                        settings.targetWords = value;
                    }}
                />
                <FormInput
                    label="Trigger Words"
                    subLabel="Comma-separated list of words to use as triggers"
                    value={settings.triggerWords ?? ""}
                    placeholder="word1,word2,word3"
                    onChange={(value) => {
                        settings.triggerWords = value;
                    }}
                />
                <FormInput
                    label="Add-On Words"
                    subLabel="Comma-separated list of words to add to the trigger words"
                    value={settings.addOnWords ?? ""}
                    placeholder="word1,word2,word3"
                    onChange={(value) => {
                        settings.addOnWords = value;
                    }}
                />
            </FormSection>

            <FormSection title="Filtering">
                <FormSwitch
                    label="Switch Blacklist to Whitelist"
                    value={settings.switchBlacklistToWhitelist ?? false}
                    onValueChange={(value) => {
                        settings.switchBlacklistToWhitelist = value;
                    }}
                />
                <FormInput
                    label="Listed Users"
                    subLabel="Comma-separated list of user IDs to blacklist/whitelist"
                    value={settings.listedUsers ?? ""}
                    placeholder="123456789,987654321"
                    onChange={(value) => {
                        settings.listedUsers = value;
                    }}
                />
                <FormInput
                    label="Listed Channels"
                    subLabel="Comma-separated list of channel IDs to blacklist/whitelist"
                    value={settings.listedChannels ?? ""}
                    placeholder="123456789,987654321"
                    onChange={(value) => {
                        settings.listedChannels = value;
                    }}
                />
                <FormInput
                    label="Listed Guilds"
                    subLabel="Comma-separated list of guild IDs to blacklist/whitelist"
                    value={settings.listedGuilds ?? ""}
                    placeholder="123456789,987654321"
                    onChange={(value) => {
                        settings.listedGuilds = value;
                    }}
                />
            </FormSection>

            <FormSection title="Other Options">
                <FormSelect
                    label="Alternative Options"
                    value={settings.altOptions ?? "none"}
                    options={[
                        { label: "None (Default)", value: "none" },
                        { label: "DM Only", value: "dmOnly" },
                        { label: "Current Channel Only", value: "currentChannelOnly" },
                        { label: "Current Guild Only", value: "currentGuildOnly" },
                    ]}
                    onChange={(value) => {
                        settings.altOptions = value;
                    }}
                />
            </FormSection>

            <FormSection title="Rich Presence">
                <FormSwitch
                    label="Enable Rich Presence"
                    subLabel="Requires restart"
                    value={settings.richPresence ?? false}
                    onValueChange={(value) => {
                        settings.richPresence = value;
                    }}
                />
                <FormInput
                    label="Rich Presence Title"
                    value={settings.richPresenceTitle ?? "venPlugPlus"}
                    onChange={(value) => {
                        settings.richPresenceTitle = value;
                    }}
                />
                <FormSlider
                    label="RPC Disconnect Timeout"
                    subLabel="Timeout for the 'Intiface not connected' RPC (in minutes)"
                    value={settings.rpcDisconnectTimeout ?? 5}
                    minimumValue={1}
                    maximumValue={30}
                    step={1}
                    onValueChange={(value) => {
                        settings.rpcDisconnectTimeout = value;
                    }}
                />
            </FormSection>

            <FormSection title="Direct User Control">
                <FormSwitch
                    label="Allow Direct User Control"
                    subLabel="Allow other users to directly control your toy"
                    value={settings.allowDirectUserControl ?? false}
                    onValueChange={(value) => {
                        settings.allowDirectUserControl = value;
                    }}
                />
                <FormInput
                    label="Allowed Users"
                    subLabel="UserIDs to grant command access to"
                    value={settings.directControlAllowedUsers ?? ""}
                    placeholder="123456789 987654321"
                    onChange={(value) => {
                        settings.directControlAllowedUsers = value;
                    }}
                />
                <FormInput
                    label="Command Prefix"
                    subLabel="The prefix for the command to be used"
                    value={settings.directControlCommandPrefix ?? ">."}
                    onChange={(value) => {
                        settings.directControlCommandPrefix = value || ">.";
                    }}
                />
            </FormSection>
        </>
    );
};