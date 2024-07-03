import { React, url } from "@vendetta/metro/common"
import { getAssetIDByName } from "@vendetta/ui/assets"
import { Forms, General } from "@vendetta/ui/components"
import { logger } from "@vendetta"
import { showToast } from "@vendetta/ui/toasts"
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";

import { isValidWebSocketUrl } from "./index"

const { ScrollView } = General
const { FormSection, FormRow, FormInput } = Forms


export default () => {
    useProxy(storage);

    return(
        <ScrollView>
            <FormSection>
            <FormInput
                        type="text"
                        placeholder="Enter Websocket URL"
                        onBlur={async (event) => {
                            const url = event.target.value;
                            if (!isValidWebSocketUrl(url)) {
                                logger.log("Invalid Websocket");
                                return showToast("Invalid Websocket", getAssetIDByName("warning"));
                            } else {
                                logger.log("Valid Websocket");
                                return showToast("Valid Websocket", getAssetIDByName("check"));
                                storage.url = url;
                            }
                        }}
                    />
            </FormSection>
        </ScrollView>
    )
}