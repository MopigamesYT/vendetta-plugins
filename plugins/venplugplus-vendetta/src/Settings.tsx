import { React, url } from "@vendetta/metro/common"
import { getAssetIDByName } from "@vendetta/ui/assets"
import { Forms, General } from "@vendetta/ui/components"
import { showToast } from "@vendetta/ui/toasts"

import { isValidWebSocketUrl } from "./index"

const { ScrollView } = General
const { FormSection, FormRow } = Forms

export default () => (<ScrollView>
    <FormSection>
        <FormRow
            label="Websocket URL"
            placeholder="Enter Websocket URL"
            onPress={(event) => {
                const websocketUrl = event.target.value;
                if (!isValidWebSocketUrl(websocketUrl)) {
                    showToast("Invalid Websocket URL", getAssetIDByName("check"));
                }
            }}
        />
        <FormRow
            label="Reload DB"
            leading={<FormRow.Icon source={getAssetIDByName("ic_message_retry")} />}
            onPress={async () => {
                // Add your logic here
            }}
        />
    </FormSection>
</ScrollView>)