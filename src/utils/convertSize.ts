import { screenWidth, screenHeight } from './Styles';
import { baseScreenWidth, baseScreenHeight } from './Styles';

export const convertWidth = (pd: number) => {
  return (pd / baseScreenWidth) * screenWidth;
};

export const convertHeight = (pd: number) => {
  return (pd / baseScreenHeight) * screenHeight;
};
