import { DesignToken } from '@microsoft/fast-foundation';

export const fontFamily =
  DesignToken.create<string>('font-family').withDefault('');

export const neutralForeground =
  DesignToken.create<string>('neutral-foreground').widthDefault('#2B2B2B');
