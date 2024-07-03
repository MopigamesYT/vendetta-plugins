import { ReactNative as RN } from "@vendetta/metro/common";
import { useProxy } from "@vendetta/storage";
import { Forms } from "@vendetta/ui/components";

const { FormSection, FormSwitch, FormInput, FormSlider, FormSelect } = Forms;

const settings = useProxy({
    connectAutomatically: true,
    rampUpAndDown: true,
    rampUpAndDownSteps: 20,
    websocketUrl: "ws://localhost:12345",
    maxVibrationIntensity: 70,
    targetWords: "",
    triggerWords: "",
    addOnWords: "",
    switchBlacklistToWhitelist: false,
    listedUsers: "",
    listedChannels: "",
    listedGuilds: "",
    altOptions: "none",
    richPresence: false,
    richPresenceTitle: "venPlugPlus",
    rpcDisconnectTimeout: 5,
    allowDirectUserControl: false,
    directControlAllowedUsers: "",
    directControlCommandPrefix: ">."
});

const altOptions = [
    { label: "None (Default)", value: "none" },
    { label: "DM Only", value: "dmOnly" },
    { label: "Current Channel Only", value: "currentChannelOnly" },
    { label: "Current Guild Only", value: "currentGuildOnly" }
];

export default () => (
    <RN.ScrollView>
        <FormSection title="Connection Settings">
            <FormSwitch
                label="Connect Automatically"
                subLabel="If true, it will connect to intiface on startup. (With this off, you need to re-enable the plugin to reconnect)"
                value={settings.connectAutomatically}
                onValueChange={(value) => settings.connectAutomatically = value}
            />
            <FormInput
                label="Websocket URL"
                subLabel="The URL of the websocket server"
                value={settings.websocketUrl}
                onChange={(value) => settings.websocketUrl = value}
                placeholder="ws://localhost:12345"
            />
        </FormSection>

        <FormSection title="Vibration Settings">
            <FormSwitch
                label="Ramp Up and Down"
                subLabel="If true, it will try and smoothly ramp the vibration intensity up and down"
                value={settings.rampUpAndDown}
                onValueChange={(value) => settings.rampUpAndDown = value}
            />
            <FormSlider
                label="Ramp Up and Down Steps"
                subLabel="How many steps to use when ramping up and down (Higher steps will add more delay)"
                value={settings.rampUpAndDownSteps}
                minimumValue={0}
                maximumValue={40}
                step={1}
                onValueChange={(value) => settings.rampUpAndDownSteps = value}
            />
            <FormSlider
                label="Max Vibration Intensity"
                subLabel="The maximum intensity of vibration"
                value={settings.maxVibrationIntensity}
                minimumValue={0}
                maximumValue={100}
                step={1}
                onValueChange={(value) => settings.maxVibrationIntensity = value}
            />
        </FormSection>

        <FormSection title="Trigger Settings">
            <FormInput
                label="Target Words"
                subLabel="Comma-separated list of words to use as targets (used for detecting things when you were not mentioned)"
                value={settings.targetWords}
                onChange={(value) => settings.targetWords = value}
            />
            <FormInput
                label="Trigger Words"
                subLabel="Comma-separated list of words to use as triggers"
                value={settings.triggerWords}
                onChange={(value) => settings.triggerWords = value}
            />
            <FormInput
                label="Add-On Words"
                subLabel="Comma-separated list of words to add to the trigger words (increases vibration per word)"
                value={settings.addOnWords}
                onChange={(value) => settings.addOnWords = value}
            />
        </FormSection>

        <FormSection title="Filtering Settings">
            <FormSwitch
                label="Switch Blacklist to Whitelist"
                subLabel="If true, will switch the blacklist to a whitelist"
                value={settings.switchBlacklistToWhitelist}
                onValueChange={(value) => settings.switchBlacklistToWhitelist = value}
            />
            <FormInput
                label="Listed Users"
                subLabel="Comma-separated list of user IDs to blacklist/whitelist"
                value={settings.listedUsers}
                onChange={(value) => settings.listedUsers = value}
            />
            <FormInput
                label="Listed Channels"
                subLabel="Comma-separated list of channel IDs to blacklist/whitelist"
                value={settings.listedChannels}
                onChange={(value) => settings.listedChannels = value}
            />
            <FormInput
                label="Listed Guilds"
                subLabel="Comma-separated list of guild IDs to blacklist/whitelist"
                value={settings.listedGuilds}
                onChange={(value) => settings.listedGuilds = value}
            />
        </FormSection>

        <FormSection title="Alternative Options">
            <FormSelect
                label="Alternative Options"
                subLabel="Alternative options to use"
                value={settings.altOptions}
                options={altOptions}
                onValueChange={(value) => settings.altOptions = value}
            />
        </FormSection>

        <FormSection title="Rich Presence">
            <FormSwitch
                label="Enable Rich Presence"
                subLabel="Enable rich presence (requires restart)"
                value={settings.richPresence}
                onValueChange={(value) => settings.richPresence = value}
            />
            <FormInput
                label="Rich Presence Title"
                subLabel="The name of the rich presence"
                value={settings.richPresenceTitle}
                onChange={(value) => settings.richPresenceTitle = value}
            />
            <FormSlider
                label="RPC Disconnect Timeout"
                subLabel="Timeout for the 'Intiface not connected' RPC (in minutes)"
                value={settings.rpcDisconnectTimeout}
                minimumValue={1}
                maximumValue={30}
                step={1}
                onValueChange={(value) => settings.rpcDisconnectTimeout = value}
            />
        </FormSection>

        <FormSection title="Direct User Control">
            <FormSwitch
                label="Allow Direct User Control"
                subLabel="Allow other users to directly control your toy"
                value={settings.allowDirectUserControl}
                onValueChange={(value) => settings.allowDirectUserControl = value}
            />
            <FormInput
                label="Allowed Users"
                subLabel="UserIDs to grant command access to"
                value={settings.directControlAllowedUsers}
                onChange={(value) => settings.directControlAllowedUsers = value}
            />
            <FormInput
                label="Command Prefix"
                subLabel="The prefix for the command to be used"
                value={settings.directControlCommandPrefix}
                onChange={(value) => settings.directControlCommandPrefix = value || ">."}
            />
        </FormSection>
    </RN.ScrollView>
);