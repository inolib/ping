import { Alert, Pressable, Text } from "react-native";
import { type OCRFrame } from "vision-camera-ocr";

import { styles } from "./styles";

type Props = {
  readonly frame?: OCRFrame | undefined;
  readonly pixelRatio: number;
};

export const OCR = ({ frame, pixelRatio }: Props) => {
  const onPress = (text: string) => {
    Alert.alert(text);
  };

  return (
    <>
      {frame?.result.blocks.map((block, index) => (
        <Pressable
          accessibilityRole="button"
          key={index}
          onPress={() => onPress(block.text)}
          style={{
            ...styles.pressable,
            left: block.frame.x * pixelRatio,
            top: block.frame.y * pixelRatio,
          }}
        >
          <Text style={styles.text}>{block.text}</Text>
        </Pressable>
      ))}
    </>
  );
};
