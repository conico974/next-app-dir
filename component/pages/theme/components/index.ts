import {
  ComponentMultiStyleConfig,
  ComponentSingleStyleConfig,
} from '@chakra-ui/react';
import * as Inputs from './input';

const Editable: ComponentMultiStyleConfig = {
  parts: ['input', 'preview'],
  variants: {
    flushed: {
      preview: {
        // color: 'blue',
        borderRadius: 0,
        borderBottom: '1px solid',
        borderColor: 'blackAlpha.600',
      },
    },
  },
  defaultProps: {
    variant: 'flushed',
  },
};

const Link: ComponentSingleStyleConfig = {
  variants: {
    nav: {
      color: 'text.heading',
      fontSize: '2xl',
    },
    button: {
      bg: 'secondary.700',
      p: 3,
      borderRadius: 'xl',
      color: 'primary',
      _hover: {
        transform: 'scale(1.1)',
      },
      textAlign: 'center',
    },
  },
};

const Button = {
  baseStyle: {
    backgroundColor: 'secondary.700',
    p: 3,
    borderRadius: 'xl',
    color: 'primary',
    _hover: {
      transform: 'scale(1.1)',
    },
    textAlign: 'center',
  },
  variants: {
    base: {
      backgroundColor: 'secondary.700',
      p: 3,
      borderRadius: 'xl',
      color: 'primary',
      _hover: {
        transform: 'scale(1.1)',
      },
      textAlign: 'center',
    },
  },
  defaultProps: {
    variant: 'base',
  },
};

export const components = {
  Editable,
  Button,
  Link,
  ...Inputs,
};
