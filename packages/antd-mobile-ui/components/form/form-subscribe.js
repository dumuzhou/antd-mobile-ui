import React, { memo, useContext } from 'react';
import { FieldContext, useWatch } from 'rc-field-form';
import { useUpdate } from 'ahooks';
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect';
export const FormSubscribe = props => {
  const update = useUpdate();
  const form = useContext(FieldContext);
  return React.createElement(React.Fragment, null, props.children(form.getFieldsValue(props.to), form), props.to.map(namePath => React.createElement(Watcher, {
    key: namePath.toString(),
    form: form,
    namePath: namePath,
    onChange: update
  })));
};
export const Watcher = memo(props => {
  const value = useWatch(props.namePath, props.form);
  useIsomorphicUpdateLayoutEffect(() => {
    props.onChange();
  }, [value]);
  return null;
});