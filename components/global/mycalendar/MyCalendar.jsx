'use client';
// import { useState } from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { styled } from '@mui/material/styles';
// import dayjs from 'dayjs';



// const StyledCalendar = styled(DateCalendar)(() => ({
//   backgroundColor: '#F4F6F9',
//   borderRadius: '16px',
//   padding: '8px',

//   /* Header (month + arrows) */
//   '.MuiPickersCalendarHeader-root': {
//     marginBottom: '4px',
//   },
// '.MuiPickersCalendarHeader-label': {
//   fontSize: '18px',
//   fontWeight: 600, 
//   color: '#2C3A4B',
// },
// '.MuiPickersDay-root': {
//   fontSize: '16px',
//   fontWeight: 500,
//   color: '#394452',   
//   margin: '0',
// },


//   /* Weekday row container */
//   '.MuiDayCalendar-weekContainer': {
//     marginBottom: '5px',
//   },

//   /* Weekday labels */
//   '.MuiDayCalendar-weekDayLabel': {
//     color: '#000',
//     fontWeight: 600,
//     fontSize: '16px',
//   },

//   /* Day grid rows */
//   '.MuiDayCalendar-weekRow': {
    
//     margin: '3',              // REMOVE extra spacing
//   },

//   /* Day cells */
//   '.MuiPickersDay-root': {
//     fontSize: '16px',
//     fontWeight: 500,
//     color: '#000',
//     margin: '4',              // IMPORTANT
//   },

//   '.MuiPickersDay-root.Mui-selected': {
//     backgroundColor: '#000',
//     color: '#fff',
//   },

//   '.MuiPickersDay-root:hover': {
//     backgroundColor: '#00000',
//   },
// }));

// export default function MyCalendar({ setEndDate }) {
//   const [value, setValue] = useState(dayjs());

//   const handleChange = (newValue) => {
//     setValue(newValue);

//     if (newValue) {
//       setEndDate(newValue.toDate()); 
//     }
//   };

//   return (
//        <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StyledCalendar
//         value={value}
//         onChange={handleChange}
//         minDate={dayjs()}             
//         dayOfWeekFormatter={(day) => day.format('dd')}
//       />
//     </LocalizationProvider>
//   );
// }

import React, { useState, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";
import moment from "moment";

const MyCalendar = ({ setEndDate }) => {
  const { docs } = useSelector((state) => state.event);

 const events = useMemo(() => {
  if (!docs) return [];

  return docs.map((item) => ({
    id: item._id,
    title: "", 
    date: moment(item.eventDate).format("YYYY-MM-DD"),
    display: "list-item", // important for dot style
    backgroundColor: "green",
    borderColor: "green",
  }));
}, [docs]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setEndDate(arg.date);
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[80%] mx-auto relative z-5 bg-light-cyan/40 rounded-2xl p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        dayCellClassNames={(arg) =>
          arg.dateStr === selectedDate ? "selected-day" : ""
        }
        contentHeight={450}
        aspectRatio={1.2}
      />
    </div>
  );
};

export default MyCalendar;