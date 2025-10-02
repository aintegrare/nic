import { ColorToken, TypographyToken, SpacingToken } from '../types/design-system';

export const colorTokens: ColorToken[] = [
  {
    name: 'Primary',
    value: '#978e81',
    description: 'Cor principal da marca'
  },
  {
    name: 'Primary Dark',
    value: '#785633',
    description: 'Variação escura'
  },
  {
    name: 'Primary Light',
    value: '#f1ebe1',
    description: 'Variação clara'
  },
  {
    name: 'Accent',
    value: '#5d3a20',
    description: 'Acento'
  },
  {
    name: 'Accent Dark',
    value: '#272721',
    description: 'Acento escuro'
  },
  {
    name: 'Neutral 50',
    value: '#fafafa',
    description: 'Background principal'
  },
  {
    name: 'Neutral 100',
    value: '#f5f5f5',
    description: 'Background secundário'
  },
  {
    name: 'Neutral 200',
    value: '#e5e5e5',
    description: 'Borders sutis'
  },
  {
    name: 'Neutral 300',
    value: '#d4d4d4',
    description: 'Borders ativos'
  },
  {
    name: 'Neutral 700',
    value: '#404040',
    description: 'Texto secundário'
  },
  {
    name: 'Neutral 900',
    value: '#171717',
    description: 'Texto principal'
  },
  {
    name: 'Success',
    value: '#10b981',
    description: 'Estados de sucesso'
  },
  {
    name: 'Error',
    value: '#ef4444',
    description: 'Estados de erro'
  },
  {
    name: 'Warning',
    value: '#f59e0b',
    description: 'Avisos'
  }
];

export const typographyTokens: TypographyToken[] = [
  {
    name: 'Display Large',
    fontSize: '4.5rem',
    lineHeight: '1.1',
    fontWeight: '700',
    letterSpacing: '-0.02em'
  },
  {
    name: 'Display',
    fontSize: '3.75rem',
    lineHeight: '1.1',
    fontWeight: '700',
    letterSpacing: '-0.02em'
  },
  {
    name: 'Heading 1',
    fontSize: '3rem',
    lineHeight: '1.2',
    fontWeight: '700',
    letterSpacing: '-0.01em'
  },
  {
    name: 'Heading 2',
    fontSize: '2.25rem',
    lineHeight: '1.25',
    fontWeight: '600',
    letterSpacing: '-0.01em'
  },
  {
    name: 'Heading 3',
    fontSize: '1.875rem',
    lineHeight: '1.3',
    fontWeight: '600'
  },
  {
    name: 'Heading 4',
    fontSize: '1.5rem',
    lineHeight: '1.35',
    fontWeight: '600'
  },
  {
    name: 'Heading 5',
    fontSize: '1.25rem',
    lineHeight: '1.4',
    fontWeight: '600'
  },
  {
    name: 'Body Large',
    fontSize: '1.125rem',
    lineHeight: '1.6',
    fontWeight: '400'
  },
  {
    name: 'Body',
    fontSize: '1rem',
    lineHeight: '1.6',
    fontWeight: '400'
  },
  {
    name: 'Body Small',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontWeight: '400'
  },
  {
    name: 'Caption',
    fontSize: '0.75rem',
    lineHeight: '1.4',
    fontWeight: '400',
    letterSpacing: '0.01em'
  },
  {
    name: 'Button Large',
    fontSize: '1.125rem',
    lineHeight: '1.5',
    fontWeight: '600',
    letterSpacing: '0.01em'
  },
  {
    name: 'Button',
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: '600',
    letterSpacing: '0.01em'
  },
  {
    name: 'Button Small',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontWeight: '600',
    letterSpacing: '0.01em'
  }
];

export const spacingTokens: SpacingToken[] = [
  { name: 'xs', value: '0.25rem', pixels: '4px' },
  { name: 'sm', value: '0.5rem', pixels: '8px' },
  { name: 'md', value: '0.75rem', pixels: '12px' },
  { name: 'lg', value: '1rem', pixels: '16px' },
  { name: 'xl', value: '1.5rem', pixels: '24px' },
  { name: '2xl', value: '2rem', pixels: '32px' },
  { name: '3xl', value: '2.5rem', pixels: '40px' },
  { name: '4xl', value: '3rem', pixels: '48px' },
  { name: '5xl', value: '4rem', pixels: '64px' },
  { name: '6xl', value: '5rem', pixels: '80px' },
  { name: '7xl', value: '6rem', pixels: '96px' },
  { name: '8xl', value: '8rem', pixels: '128px' }
];

export const shadowTokens = [
  { name: 'sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { name: 'md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  { name: 'lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
  { name: 'xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
  { name: '2xl', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }
];

export const borderRadiusTokens = [
  { name: 'none', value: '0' },
  { name: 'sm', value: '0.25rem' },
  { name: 'md', value: '0.375rem' },
  { name: 'lg', value: '0.5rem' },
  { name: 'xl', value: '0.75rem' },
  { name: '2xl', value: '1rem' },
  { name: 'full', value: '9999px' }
];
