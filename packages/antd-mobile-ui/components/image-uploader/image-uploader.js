import { __awaiter } from "tslib";
import React, { useRef, useState } from 'react';
import { AddOutline } from 'antd-mobile-icons';
import { mergeProps } from '../../utils/with-default-props';
import ImageViewer from '../image-viewer';
import PreviewItem from './preview-item';
import { usePropsValue } from '../../utils/use-props-value';
import { useIsomorphicLayoutEffect, useUnmount } from 'ahooks';
import Space from '../space';
import { withNativeProps } from '../../utils/native-props';
import { useConfig } from '../config-provider';
const classPrefix = `adm-image-uploader`;
const defaultProps = {
  disableUpload: false,
  deletable: true,
  showUpload: true,
  multiple: false,
  maxCount: 0,
  defaultValue: [],
  accept: 'image/*',
  preview: true,
  showFailed: true,
  imageFit: 'cover'
};
export const ImageUploader = p => {
  const {
    locale
  } = useConfig();
  const props = mergeProps(defaultProps, p);
  const [value, setValue] = usePropsValue(props);
  const [tasks, setTasks] = useState([]);
  useIsomorphicLayoutEffect(() => {
    setTasks(prev => prev.filter(task => {
      if (task.url === undefined) return true;
      return !value.some(fileItem => fileItem.url === task.url);
    }));
  }, [value]);
  const idCountRef = useRef(0);
  const {
    maxCount,
    onPreview
  } = props;

  function processFile(file, fileList) {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        beforeUpload
      } = props;
      let transformedFile = file;
      transformedFile = yield beforeUpload === null || beforeUpload === void 0 ? void 0 : beforeUpload(file, fileList);
      return transformedFile;
    });
  }

  function onChange(e) {
    var _a;

    return __awaiter(this, void 0, void 0, function* () {
      e.persist();
      const {
        files: rawFiles
      } = e.target;
      if (!rawFiles) return;
      let files = [].slice.call(rawFiles);
      e.target.value = ''; // HACK: fix the same file doesn't trigger onChange

      if (props.beforeUpload) {
        const postFiles = files.map(file => {
          return processFile(file, files);
        });
        yield Promise.all(postFiles).then(filesList => {
          files = filesList.filter(Boolean);
        });
      }

      if (files.length === 0) {
        return;
      }

      if (maxCount > 0) {
        const exceed = value.length + files.length - maxCount;

        if (exceed > 0) {
          files = files.slice(0, files.length - exceed);
          (_a = props.onCountExceed) === null || _a === void 0 ? void 0 : _a.call(props, exceed);
        }
      }

      const newTasks = files.map(file => ({
        id: idCountRef.current++,
        status: 'pending',
        file
      }));
      setTasks(prev => [...prev, ...newTasks]);
      yield Promise.all(newTasks.map(currentTask => __awaiter(this, void 0, void 0, function* () {
        try {
          const result = yield props.upload(currentTask.file);
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === currentTask.id) {
                return Object.assign(Object.assign({}, task), {
                  url: result.url
                });
              }

              return task;
            });
          });
          setValue(prev => {
            const newVal = Object.assign({}, result);
            return [...prev, newVal];
          });
        } catch (e) {
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === currentTask.id) {
                return Object.assign(Object.assign({}, task), {
                  status: 'fail'
                });
              }

              return task;
            });
          });
          throw e;
        }
      }))).catch(error => console.error(error));
    });
  }

  const imageViewerHandlerRef = useRef(null);

  function previewImage(index) {
    imageViewerHandlerRef.current = ImageViewer.Multi.show({
      images: value.map(fileItem => fileItem.url),
      defaultIndex: index,
      onClose: () => {
        imageViewerHandlerRef.current = null;
      }
    });
  }

  useUnmount(() => {
    var _a;

    (_a = imageViewerHandlerRef.current) === null || _a === void 0 ? void 0 : _a.close();
  });
  const showUpload = props.showUpload && (maxCount === 0 || value.length + tasks.length < maxCount);
  return withNativeProps(props, React.createElement("div", {
    className: classPrefix
  }, React.createElement(Space, {
    className: `${classPrefix}-space`,
    wrap: true,
    block: true
  }, value.map((fileItem, index) => {
    var _a, _b;

    return React.createElement(PreviewItem, {
      key: (_a = fileItem.key) !== null && _a !== void 0 ? _a : index,
      url: (_b = fileItem.thumbnailUrl) !== null && _b !== void 0 ? _b : fileItem.url,
      deletable: props.deletable,
      imageFit: props.imageFit,
      onClick: () => {
        if (props.preview) {
          previewImage(index);
        }

        onPreview && onPreview(index, fileItem);
      },
      onDelete: () => __awaiter(void 0, void 0, void 0, function* () {
        var _c;

        const canDelete = yield (_c = props.onDelete) === null || _c === void 0 ? void 0 : _c.call(props, fileItem);
        if (canDelete === false) return;
        setValue(value.filter((x, i) => i !== index));
      })
    });
  }), tasks.map(task => {
    if (!props.showFailed && task.status === 'fail') {
      return null;
    }

    return React.createElement(PreviewItem, {
      key: task.id,
      file: task.file,
      deletable: task.status !== 'pending',
      status: task.status,
      imageFit: props.imageFit,
      onDelete: () => {
        setTasks(tasks.filter(x => x.id !== task.id));
      }
    });
  }), showUpload && React.createElement("div", {
    className: `${classPrefix}-upload-button-wrap`
  }, props.children ? props.children : React.createElement("span", {
    className: `${classPrefix}-cell ${classPrefix}-upload-button`,
    role: 'button',
    "aria-label": locale.ImageUploader.upload
  }, React.createElement("span", {
    className: `${classPrefix}-upload-button-icon`
  }, React.createElement(AddOutline, null))), !props.disableUpload && React.createElement("input", {
    capture: props.capture,
    accept: props.accept,
    multiple: props.multiple,
    type: 'file',
    className: `${classPrefix}-input`,
    onChange: onChange,
    "aria-hidden": true
  })))));
};