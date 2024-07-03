import { ReactNative as RN } from "@vendetta/metro/common";
import { useProxy } from "@vendetta/storage";
import { Forms, General } from "@vendetta/ui/components";

const { FormSection, FormRow, FormSwitch, FormInput, FormDivider } = Forms;
const { ScrollView } = General;

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
    <ScrollView>
        <FormSection title="Connection Settings">
            <FormRow
                label="Connect Automatically"
                subLabel="If true, it will connect to intiface on startup. (With this off, you need to re-enable the plugin to reconnect)"
                leading={<FormSwitch
                    value={settings.connectAutomatically}
                    onValueChange={(value) => settings.connectAutomatically = value}
                />}
            />
            <FormInput
                title="Websocket URL"
                placeholder="ws://localhost:12345"
                value={settings.websocketUrl}
                onChange={(value) => settings.websocketUrl = value}
            />
        </FormSection>

        <FormSection title="Vibration Settings">
            <FormRow
                label="Ramp Up and Down"
                subLabel="If true, it will try and smoothly ramp the vibration intensity up and down"
                leading={<FormSwitch
                    value={settings.rampUpAndDown}
                    onValueChange={(value) => settings.rampUpAndDown = value}
                />}
            />
            <FormInput
                title="Ramp Up and Down Steps"
                placeholder="20"
                keyboardType="numeric"
                value={settings.rampUpAndDownSteps.toString()}
                onChange={(value) => settings.rampUpAndDownSteps = parseInt(value) || 0}
            />
            <FormInput
                title="Max Vibration Intensity"
                placeholder="70"
                keyboardType="numeric"
                value={settings.maxVibrationIntensity.toString()}
                onChange={(value) => settings.maxVibrationIntensity = parseInt(value) || 0}
            />
        </FormSection>

        <FormSection title="Trigger Settings">
            <FormInput
                title="Target Words"
                placeholder="Comma-separated list"
                value={settings.targetWords}
                onChange={(value) => settings.targetWords = value}
            />
            <FormInput
                title="Trigger Words"
                placeholder="Comma-separated list"
                value={settings.triggerWords}
                onChange={(value) => settings.triggerWords = value}
            />
            <FormInput
                title="Add-On Words"
                placeholder="Comma-separated list"
                value={settings.addOnWords}
                onChange={(value) => settings.addOnWords = value}
            />
        </FormSection>

        <FormSection title="Filtering Settings">
            <FormRow
                label="Switch Blacklist to Whitelist"
                leading={<FormSwitch
                    value={settings.switchBlacklistToWhitelist}
                    onValueChange={(value) => settings.switchBlacklistToWhitelist = value}
                />}
            />
            <FormInput
                title="Listed Users"
                placeholder="Comma-separated user IDs"
                value={settings.listedUsers}
                onChange={(value) => settings.listedUsers = value}
            />
            <FormInput
                title="Listed Channels"
                placeholder="Comma-separated channel IDs"
                value={settings.listedChannels}
                onChange={(value) => settings.listedChannels = value}
            />
            <FormInput
                title="Listed Guilds"
                placeholder="Comma-separated guild IDs"
                value={settings.listedGuilds}
                onChange={(value) => settings.listedGuilds = value}
            />
        </FormSection>

        <FormSection title="Alternative Options">
            <FormRow
                label="Alternative Options"
                subLabel={settings.altOptions}
                onPress={() => {
                    // Implement a custom select dialog here
                }}
            />
        </FormSection>

        <FormSection title="Rich Presence">
            <FormRow
                label="Enable Rich Presence"
                subLabel="Enable rich presence (requires restart)"
                leading={<FormSwitch
                    value={settings.richPresence}
                    onValueChange={(value) => settings.richPresence = value}
                />}
            />
            <FormInput
                title="Rich Presence Title"
                placeholder="venPlugPlus"
                value={settings.richPresenceTitle}
                onChange={(value) => settings.richPresenceTitle = value}
            />
            <FormInput
                title="RPC Disconnect Timeout (minutes)"
                placeholder="5"
                keyboardType="numeric"
                value={settings.rpcDisconnectTimeout.toString()}
                onChange={(value) => settings.rpcDisconnectTimeout = parseInt(value) || 5}
            />
        </FormSection>

        <FormSection title="Direct User Control">
            <FormRow
                label="Allow Direct User Control"
                subLabel="Allow other users to directly control your toy"
                leading={<FormSwitch
                    value={settings.allowDirectUserControl}
                    onValueChange={(value) => settings.allowDirectUserControl = value}
                />}
            />
            <FormInput
                title="Allowed Users"
                placeholder="Comma-separated user IDs"
                value={settings.directControlAllowedUsers}
                onChange={(value) => settings.directControlAllowedUsers = value}
            />
            <FormInput
                title="Command Prefix"
                placeholder=">."
                value={settings.directControlCommandPrefix}
                onChange={(value) => settings.directControlCommandPrefix = value || ">."}
            />
        </FormSection>
    </ScrollView>
);