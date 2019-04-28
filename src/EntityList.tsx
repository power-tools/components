/**
 * @class EntitylistComponent
 */

import React, { useEffect, useState } from "react";
import { VirtualizedComboBox } from "office-ui-fabric-react/lib/ComboBox";
import { IComboBoxOption } from "office-ui-fabric-react/lib/components/ComboBox/ComboBox.types";

const listStyle = {
  marginBottom: '20px',
  maxWidth: '300px'
}

interface IEntityListProps {
  multiSelect: boolean;
  label: string;
  placehoder: string;
}

export const EntityList = (props: IEntityListProps) => {
  const [options, setOptions] = useState<IComboBoxOption[]>([]);

  interface IEntityMetadata {
    DisplayName: {
      LocalizedLabels: [any];
      UserLocalizedLabel: {
        Label: string;
      };
    };
    EntitySetName: string;
    MetadataId: string;
    SchemaName: string;
  }

  useEffect(() => {
    let url = "";
    try {
      url = parent.Xrm.Page.context.getClientUrl();
    } catch (error) {
      url = error;
    }

    fetch(
      `${url}/api/data/v9.0/EntityDefinitions?$select=DisplayName,EntitySetName,SchemaName&$filter=IsValidForAdvancedFind eq true`
    )
      .then(response => response.json())
      .then(data => {
        const md: IEntityMetadata[] = data.value;
        let mappedOptions = md.map(item => {
          const option: IComboBoxOption = {
            key: item.MetadataId,
            text: item.DisplayName.UserLocalizedLabel.Label
          };
          return option;
        });
        mappedOptions = mappedOptions.sort((a, b) => {
          if (a.text < b.text) {
            return -1;
          }
          if (a.text > b.text) {
            return 1;
          }
          return 0;
        });
        setOptions(mappedOptions);
      })
      .catch(error => {
        console.log(error);
        var dummyData: IComboBoxOption[] = [
          {
            key: 1,
            text: "Account"
          },
          {
            key: 2,
            text: "Contact"
          }
        ];
        setOptions(dummyData);
      });
  }, []);

  return (
      <VirtualizedComboBox
        style={listStyle}
        options={options}
        autoComplete="on"
        multiSelect={props.multiSelect}
        placeholder={props.placehoder}
        label={props.label}
      />
  );
};
