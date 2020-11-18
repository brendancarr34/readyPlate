import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import './DatePicker.css';

let date = new Date();

let DatePicker = () => {
    return (
        <div>
            <DateRangePicker initialSettings={{ startDate: (date.getMonth()+1) + '/'+ date.getDate() +'/' + date.getFullYear()}}>
                <button class="material-button"type="button"><span>Pick Dates</span></button>
            </DateRangePicker>
        </div>
    );
}

export default DatePicker;