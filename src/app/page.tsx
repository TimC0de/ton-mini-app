'use client';

import {useTonConnect} from "../hooks/useTonConnect";
import {Button, FlexBoxCol, FlexBoxRow} from "../components/styled/styled";
import {TonConnectButton, TonConnectUIProvider} from "@tonconnect/ui-react";
import {CHAIN} from "@tonconnect/protocol";
import {Jetton} from "../components/Jetton";
import {TelegramUserInfo} from "../components/TelegramUserInfo";
import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const manifestUrl =
    "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export default function Home() {
    const { network } = useTonConnect();

    return (
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <QueryClientProvider client={queryClient}>
                <FlexBoxCol>
                    <FlexBoxRow>
                        <TonConnectButton />
                        <Button>
                            {network
                                ? network === CHAIN.MAINNET
                                    ? "mainnet"
                                    : "testnet"
                                : "N/A"}
                        </Button>
                    </FlexBoxRow>
                    <Jetton />
                    <TelegramUserInfo />
                </FlexBoxCol>
            </QueryClientProvider>
        </TonConnectUIProvider>
    );
}