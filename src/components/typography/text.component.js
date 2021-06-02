import React from "react";
import styled from "styled-components/native";

const defaultTextstyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;
const heading = (theme) => `
  font-size: ${theme.fontSizes.h5};
  font-weight: ${theme.fontWeights.bold};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.ui.quaternary};
`;

const label = (theme) => `
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes.body};
`;
const variants = {
  body,
  hint,
  error,
  label,
  caption,
  heading,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextstyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
