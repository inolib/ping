import { useCallback, useEffect } from "react";
import { PixelRatio, Text, View, type LayoutChangeEvent } from "react-native";
import { runOnJS } from "react-native-reanimated";
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from "react-native-vision-camera";
import { useImmer } from "use-immer";
import { scanOCR, type OCRFrame } from "vision-camera-ocr";

import { Overlay } from "../Overlay";
import { styles } from "./styles";

type Display = {
  readonly pixelRatio: number;
};

type OCR = {
  readonly frame?: OCRFrame;
};

type Processors = {
  readonly ocr: OCR;
};

type State = {
  readonly camera: VisionCamera;
  readonly display: Display;
  readonly processors: Processors;
};

type VisionCamera = {
  readonly hasPermission: boolean;
};

export const App = () => {
  const cameras = useCameraDevices();
  const camera = cameras.back;

  const [state, updateState] = useImmer<State>({
    camera: {
      hasPermission: false,
    },
    display: {
      pixelRatio: 1,
    },
    processors: {
      ocr: {},
    },
  });

  const onOCRFrame = useCallback(
    (frame: OCRFrame) => {
      updateState((draft) => {
        draft.processors.ocr.frame = frame;
      });
    },
    [updateState]
  );

  const frameProcessor = useFrameProcessor(
    (frame) => {
      "worklet";
      runOnJS(onOCRFrame)(scanOCR(frame));
    },
    [onOCRFrame]
  );

  const onLayout = (event: LayoutChangeEvent) => {
    event.persist();

    updateState((draft) => {
      const layoutWidth = event.nativeEvent.layout.width;

      draft.display.pixelRatio =
        layoutWidth / PixelRatio.getPixelSizeForLayoutSize(layoutWidth);
    });
  };

  useEffect(() => {
    void (async () => {
      const permission = await Camera.requestCameraPermission();

      updateState((draft) => {
        draft.camera.hasPermission = permission === "authorized";
      });
    })();
  }, [updateState]);

  return camera !== undefined && state.camera.hasPermission ? (
    <>
      <Camera
        device={camera}
        frameProcessor={frameProcessor}
        isActive
        onLayout={onLayout}
        style={styles.camera}
      />
      <Overlay.OCR
        frame={state.processors.ocr.frame}
        pixelRatio={state.display.pixelRatio}
      />
    </>
  ) : (
    <View style={styles.container}>
      <Text>No available cameras.</Text>
    </View>
  );
};
