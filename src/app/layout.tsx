import React, {PropsWithChildren} from "react";
import {TmaSDKLoader} from "../components/TmaSDKLoader";
import {Inter} from "next/font/google";
import {Metadata} from "next";

import './index.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ton TWA App',
    description: 'Ton TWA App Example',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <TmaSDKLoader>
            {children}
        </TmaSDKLoader>
        </body>
        </html>
    );
}