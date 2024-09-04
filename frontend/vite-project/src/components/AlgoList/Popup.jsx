import React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export default function SimplePopup({ open, anchorEl, handleClose }) {
  const id = open ? 'simple-popper' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <PopupBody>
        The content of the Popup.
      </PopupBody>
    </Popover>
  );
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const PopupBody = styled('div')(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  z-index: 1;
  transition: transform 0.3s, opacity 0.3s; /* Add transition effect */
  `,
);

// Add a CSS class to the Popover component to handle the transition
const StyledPopover = styled(Popover)`
  &.MuiPopover-enter {
    opacity: 0;
    transform: scale(0.8);
  }
  &.MuiPopover-enter.MuiPopover-enterActive {
    opacity: 1;
    transform: scale(1);
  }
  &.MuiPopover-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.MuiPopover-exit.MuiPopover-exitActive {
    opacity: 0;
    transform: scale(0.8);
  }
`;

// Replace the original Popover component with the styled one
export default function SimplePopup({ open, anchorEl, handleClose }) {
  const id = open ? 'simple-popper' : undefined;

  return (
    <StyledPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <PopupBody>
        The content of the Popup.
      </PopupBody>
    </StyledPopover>
  );
}