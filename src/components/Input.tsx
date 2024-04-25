import { InputAdornment, styled, TextField, TextFieldProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

type CustomTextFieldProps = TextFieldProps & {
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
};

const customStyling = ({ theme }: { theme: Theme }) => ({
  // custom styles
  '.MuiInputBase-root': {
    borderRadius: theme.shape.borderRadius * 2
  },
  'input:-internal-autofill-selected, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-internal-autofill-previewed':
    {
      boxShadow: '0 0 0px 1000px white inset'
    }
});

const BaseCustomTextField = ({ startDecorator, endDecorator, ...props }: CustomTextFieldProps) => (
  <TextField
    {...props}
    InputProps={{
      startAdornment: <InputAdornment position="start">{startDecorator}</InputAdornment>,
      endAdornment: <InputAdornment position="end">{endDecorator}</InputAdornment>
    }}
  ></TextField>
);

export const CustomTextField = styled(BaseCustomTextField)(customStyling);
