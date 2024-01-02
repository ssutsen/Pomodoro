"use client";

import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
  const [time, setTime] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  return (
    <FormControl required sx={{ m: 1, minWidth: 120 }} >
      <InputLabel id="demo-select-small-label">Time</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={time}
        label="Time *"
        onChange={handleChange}
      >
        <MenuItem value={5}>5 minutes</MenuItem>
        <MenuItem value={10}>10 minutes</MenuItem>
        <MenuItem value={15}>15 minutes</MenuItem>
        <MenuItem value={20}>20 minutes</MenuItem>
      </Select>
    </FormControl>
  );
}
