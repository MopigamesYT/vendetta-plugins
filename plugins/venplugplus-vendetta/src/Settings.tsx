import { React, url } from "@vendetta/metro/common"
import { useEffect } from 'react';
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
    useEffect(() => {
        const savedUrl = localStorage.getItem('websocketUrl');
        if (savedUrl) {
            storage.url = savedUrl;
        }
    }, []);
    return(
        <ScrollView>
            <FormSection>
                <FormInput
                    label="Websocket URL"
                    type="text"
                    placeholder="Enter Websocket URL"
                    onChange={async (event) => {
                        const newUrl = event.target.value;
                        storage.url = newUrl;
                        localStorage.setItem('websocketUrl', newUrl); // Persist the change
                    }}
                    value={storage.url}
                />
            </FormSection>
        </ScrollView>
    )
}