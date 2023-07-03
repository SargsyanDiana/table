import DatePicker from "react-datepicker";
import React, {useMemo, useState} from "react";
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePickerComponent({value}) {
    const [day, month, year] = value.split('/');
    const dateObject = useMemo(() => new Date(year, month - 1, day), [year, month, day]);
    const [startDate, setStartDate] = useState(dateObject);

    return <DatePicker
        selected={startDate}
        format='dd/mm/yyyy'
        onChange={(date) => setStartDate(date)}
        className="react-datepicker"
    />
}