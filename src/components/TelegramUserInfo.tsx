'use client';

import {Card, FlexBoxRow} from "./styled/styled";
import {useInitData} from "@tma.js/sdk-react";
import {useMemo} from "react";

export function TelegramUserInfo() {
    const initData = useInitData();

    const initDataJson = useMemo(() => {
        if (!initData) {
            return 'Init data is empty.';
        }
        const { authDate, chat, hash, canSendAfter, queryId, receiver, user, startParam } = initData;

        return JSON.stringify({
            authDate,
            chat,
            hash,
            canSendAfter,
            queryId,
            receiver,
            user,
            startParam,
        }, null, ' ');
    }, [initData]);

    return (
        <Card title="TelegramUserInfo">
            <FlexBoxRow>
                <code>
                    {initDataJson}
                </code>
            </FlexBoxRow>
        </Card>
    );
}
