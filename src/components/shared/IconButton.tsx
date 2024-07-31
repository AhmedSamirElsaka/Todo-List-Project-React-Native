import { Pressable, Text, StyleSheet } from "react-native";
import Icons, { IconName } from "./icons";
type ButtonProps = {
  onPress?: () => void;
  style?: any;
  iconName: IconName;
  width: number;
  height: number;
  color?: string;
};

const IconButton = ({
  onPress,
  style,
  iconName,
  width,
  height,
  color,
}: ButtonProps) => {
  return (
    <Pressable style={[style, styles.button]} onPress={onPress}>
      <Icons name={iconName} width={width} height={height} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    // borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
