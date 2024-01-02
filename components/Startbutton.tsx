import React from 'react';
import Fab from '@mui/material/Fab';
import Image from 'next/image';

export default function StartButton() {
  return (
      <Fab variant="extended" sx={{ backgroundColor: '#FADCB5 !important' }}>
        Start
        <Image
            src="/right-arrow.png"
            alt="Logo"
            width="30"
            height="30"
        />
      </Fab>
  );
}
