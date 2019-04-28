/**
 * @class HeaderComponent
 */

import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Text } from "office-ui-fabric-react/lib/Text";
import gitHubLogo from "./GitHub-Mark-64px.png";

export interface IHeaderProps {
  title: string;
  repoUrl: string;
  description?: string;
}

export const PowerToolsHeader = (props: IHeaderProps) => (
  <Stack.Item align="auto">
    <Stack horizontal={true} horizontalAlign="space-between">
      <Text block={true} variant="superLarge">
        {props.title}
      </Text>
      <a target="_blank" rel="noopener noreferrer" href={props.repoUrl}>
        <img src={gitHubLogo} alt="gitHubLogo" />
      </a>
    </Stack>
    <Text>{props.description}</Text>
  </Stack.Item>
);
