import styles from '@components/ButtonGroup.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import ActionButton from '@components/ActionButton';
import DropdownMenuTrigger from '@components/DropdownMenuTrigger';

export interface ButtonGroupProps {
  style?: React.CSSProperties;
  className?: string;
  isFull?: boolean;
  items?: any[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  if (!props.items) {
    return null;
  }

  return (
    <div className={Utilities.classNames(styles.root, props.isFull ? styles.full : null, props.className)} style={props.style}>
      {props.items.map((each) => {
        if (each.items) {
          console.log('each', each)
          return (
            <DropdownMenuTrigger key={each.body} items={each.items} hotkey={each.openHotkey}>
              <ActionButton hotkey={each.hotkey} className={each.className} isSelected={each.selected}>
                {each.body}
              </ActionButton>
            </DropdownMenuTrigger>
          );
        }

        
        return (
          <ActionButton key={each.body} className={each.className} onClick={each.onClick} hotkey={each.hotkey} isSelected={each.selected}>
            {each.body}
          </ActionButton>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
