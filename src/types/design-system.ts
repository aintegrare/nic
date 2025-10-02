export interface ColorToken {
  name: string;
  value: string;
  description: string;
}

export interface TypographyToken {
  name: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  letterSpacing?: string;
}

export interface SpacingToken {
  name: string;
  value: string;
  pixels: string;
}

export interface ComponentExample {
  title: string;
  description: string;
}
