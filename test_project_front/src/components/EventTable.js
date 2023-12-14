import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
} from '@mui/material';
import { API_URL } from '../constants';

const EventTable = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/events`)
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        setFilteredEvents(data);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  useEffect(() => {
    if (filterDate.trim() === '') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.event_datetime.includes(filterDate)));
    }
  }, [filterDate, events]);

  const handleDateChange = event => {
    setFilterDate(event.target.value);
  };

  const columns = [
    { id: 'title', label: 'Title' },
    { id: 'description', label: 'Description' },
    { id: 'event_datetime', label: 'Event Date' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <div>
      <h1>Event Viewer</h1>
      <TextField
        id="date-filter"
        label="Filter by Date"
        type="date"
        value={filterDate}
        onChange={handleDateChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              📅
            </InputAdornment>
          ),
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEvents.map(event => (
              <TableRow key={event.id}>
                {columns.map(column => (
                  <TableCell key={column.id} style={{ maxWidth: '50px', overflow: 'hidden', whiteSpace: 'normal' }}>
                    {event[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EventTable;
