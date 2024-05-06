import {Button, Card, Ellipsis, FlexBoxCol, FlexBoxRow} from "./styled/styled";
import WebApp from "@twa-dev/sdk";

export function TelegramUserInfo() {
    return (
        <Card title="TelegramUserInfo">
            <FlexBoxCol>
                <h3>Init Data</h3>
                <p>{WebApp.initData || 'No data'}</p>
            </FlexBoxCol>
        </Card>
    );
}
