import React from 'react'
import { ButtonBase, ButtonDark, ButtonLight, ButtonOutlined } from './index.styles'

interface Props {
  readonly type?: "button" | "submit" | "reset";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode
}

export const ButtonPrimary: React.FC<Props> = ({ onClick, children, type = "button" }) => (
  <ButtonBase type={type} onClick={onClick}>{children}</ButtonBase>
)

export const ButtonSecondary: React.FC<Props> = ({ onClick, children, type = "button" }) => (
  <ButtonLight type={type} onClick={onClick}>{children}</ButtonLight>
)

export const ButtonPrimaryDark: React.FC<Props> = ({ onClick, children, type = "button" }) => (
  <ButtonDark type={type} onClick={onClick}>{children}</ButtonDark>
)

export const ButtonSecondaryDark: React.FC<Props> = ({ onClick, children, type = "button" }) => (
  <ButtonOutlined type={type} onClick={onClick}>{children}</ButtonOutlined>
)