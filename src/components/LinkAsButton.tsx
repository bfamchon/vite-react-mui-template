import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkAsButtonProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const LinkAsButton: React.FC<LinkAsButtonProps> = ({ to, children }) => {
  return (
    <Button component={Link} to={to} variant="contained">
      {children}
    </Button>
  );
};

export default LinkAsButton;
