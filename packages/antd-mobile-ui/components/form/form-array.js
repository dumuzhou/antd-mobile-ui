import React from 'react';
import { List as RCList } from 'rc-field-form';
import List from '../list';
export const FormArray = props => {
  return React.createElement(RCList, {
    name: props.name,
    initialValue: props.initialValue
  }, (rcFields, operation) => {
    const fields = rcFields.map(field => ({
      index: field.name,
      key: field.key
    }));
    const children = props.children(fields, operation).map((child, index) => {
      var _a;

      return React.createElement(List, {
        key: fields[index].key,
        mode: 'card',
        header: (_a = props.renderHeader) === null || _a === void 0 ? void 0 : _a.call(props, fields[index], operation)
      }, child);
    });

    if (props.renderAdd) {
      children.push(React.createElement(List, {
        key: 'add',
        mode: 'card'
      }, React.createElement(List.Item, {
        className: 'adm-form-list-operation',
        onClick: () => {
          props.onAdd ? props.onAdd(operation) : operation.add();
        },
        arrow: false
      }, props.renderAdd())));
    }

    return React.createElement(React.Fragment, null, children);
  });
};