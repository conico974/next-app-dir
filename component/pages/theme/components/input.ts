/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ThemeOverride, ComponentSingleStyleConfig } from '@chakra-ui/react';

//@ts-ignore
export const Input: ThemeOverride['components']['Input'] = {
  variants: {
    flushed: {
      field: {
        borderColor: 'blackAlpha.600',
        _placeholder: {
          color: 'text.primary',
        },
      },
    },
  },
  defaultProps: {
    variant: 'flushed',
  },
};

//@ts-ignore
export const NumberInput: ThemeOverride['components']['NumberInput'] = {
  variants: {
    flushed: {
      field: {
        borderColor: 'blackAlpha.600',
        _placeholder: {
          color: 'text.primary',
        },
      },
    },
  },
  defaultProps: {
    variant: 'flushed',
  },
};

//@ts-ignore
export const Radio: ThemeOverride['components']['Radio'] = {
  baseStyle: {
    control: {
      borderColor: 'blackAlpha.600',
    },
  },
};

//@ts-ignore
export const Checkbox: ThemeOverride['components']['Select'] = {
  baseStyle: {
    control: {
      borderColor: 'blackAlpha.600',
    },
  },
};

export const Textarea: ComponentSingleStyleConfig = {
  baseStyle: {
    borderColor: 'blackAlpha.600',
    paddingBottom: '5',
  },
};
