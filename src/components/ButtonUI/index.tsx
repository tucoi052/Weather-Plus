import { Label } from 'components';
import React from 'react';
import styled from 'styled-components/native';
import { convertHeight, convertWidth } from 'utils/convertSize';

export interface ButtonUIProps {
  flex?: any;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  width?: number;
  height?: number;
  border?: boolean;
  borderWidth?: number;
  borderColor?: string;
  centered?: any;
  between?: boolean;
  middle?: any;
  color?: string;
  style?: any;
  direction?: string;
  children?: any;
  justifyContent?: string;
  borderRadius?: number;
  shadow?: string;
  onPress?: any;
  horizontal?: any;
  disable?: boolean;
}

const ButtonUI = (props: ButtonUIProps) => {
  const {
    flex,
    margin,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    width,
    height,
    border,
    borderWidth,
    borderColor,
    centered,
    between,
    middle,
    color,
    style,
    direction,
    justifyContent,
    borderRadius,
    shadow,
    children,
    onPress,
    horizontal,
    disable
  } = props;
  const styleComponent = [
    flex && { height: '100%', width: '100%' },
    margin && { margin: convertWidth(margin) },
    marginVertical && { marginVertical: convertHeight(marginVertical) },
    marginHorizontal && { marginHorizontal: convertWidth(marginHorizontal) },
    marginTop && { marginTop: convertHeight(marginTop) },
    marginBottom && { marginBottom: convertHeight(marginBottom) },
    padding && { padding: convertWidth(padding) },
    paddingVertical && { paddingVertical: convertHeight(paddingVertical) },
    paddingHorizontal && { paddingHorizontal: convertWidth(paddingHorizontal) },
    paddingTop && { paddingTop: convertHeight(paddingTop) },
    paddingBottom && { paddingBottom: convertHeight(paddingBottom) },
    paddingLeft && { paddingLeft: convertWidth(paddingLeft) },
    paddingRight && { paddingRight: convertWidth(paddingRight) },
    width && { width: convertWidth(width) },
    height && { height: convertWidth(height) },
    border && { borderWidth: 1, borderColor: 'gray' },
    borderWidth && { borderWidth },
    borderColor && { borderColor },
    color && { backgroundColor: color },
    centered && { justifyContent: 'center' },
    between && { justifyContent: 'space-between' },
    justifyContent && { justifyContent },
    direction && { flexDirection: direction },
    middle && { alignItems: 'center' },
    borderRadius && { borderRadius },
    horizontal && { flexDirection: 'row' },
    shadow && {
      shadowOpacity: 0.22,
      shadowRadius: 15,
      shadowColor: 'gray',
      shadowOffset: { height: 0, width: 0 },
      elevation: 5,
    },
    style,
  ];

  if (typeof children === 'string') {
    return (
      <Container
        disabled={disable}
        onPress={() => {
          onPress();
        }}
        style={[styleComponent]}>
        <Label color={'white'}>{children}</Label>
      </Container>
    );
  }
  return (
    <Container
      disabled={disable}
      onPress={() => {
        if (onPress)
          onPress();
      }}
      style={[styleComponent]}>
      {children}
    </Container>
  );
};
export default ButtonUI;

const Container = styled.TouchableOpacity``;