import { React, url } from "@vendetta/metro/common"
import { getAssetIDByName } from "@vendetta/ui/assets"
import { Forms, General } from "@vendetta/ui/components"
import { logger } from "@vendetta"
import { showToast } from "@vendetta/ui/toasts"

import { isValidWebSocketUrl } from "./index"

const { ScrollView } = General
const { FormSection, FormRow, FormInput } = Forms

export default () => (<ScrollView>
    <FormSection>
        <FormInput type="text" placeholder="Enter Websocket URL" onBlur={
            async (event) => {
                const url = event.target.value;
                if (!isValidWebSocketUrl(url)) {
                    logger.log("Invalid URL")
                }
            }
        }/>
        <FormRow
            label="Reload DB"
            leading={<FormRow.Icon source={getAssetIDByName("ic_message_retry")} />}
            onPress={async () => {
                // Add your logic here
            }}
        />
    </FormSection>
</ScrollView>)