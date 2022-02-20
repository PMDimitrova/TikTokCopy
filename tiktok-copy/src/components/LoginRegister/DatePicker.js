import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function DatePicker(props) {

    const [month, setMonth] = React.useState("");
    const [day, setDay] = React.useState("");
    const [year, setYear] = React.useState("");

    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
        props.onMonthChange(event.target.value);

    };
    const handleChangeDay = (event) => {
        setDay(event.target.value);
        props.onDayChange(event.target.value);
    };
    const handleChangeYear = (event) => {
        setYear(event.target.value);
        props.onYearChange(event.target.value);
    };

    const fillTheOptions = (a, b, arr) => {
        for (let i = a; i <= b; i++) {
            arr.push(i);
        }
        return arr;
    }

    return (
        <>
            <FormControl required sx={{ m: 1, minWidth: 122, margin: 0}}>
                <InputLabel id="demo-simple-select-required-label2" style={{color:'#ababaf'}}>Month</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label2"
                    id="demo-simple-select-required2"
                    value={month}
                    label="month"
                    onChange={handleChangeMonth}
                    style={{maxWidth:112, backgroundColor: '#f1f1f2'}}
                >
                    {fillTheOptions(1, 12, []).map((i) => {
                        return <MenuItem key={i} value={i}>{i}</MenuItem>;
                    })}
                </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 122, margin: 0 }}>
                <InputLabel id="demo-simple-select-required-label1" style={{color:'#ababaf'}}>Date</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label1"
                    id="demo-simple-select-required1"
                    value={day}
                    label="date"
                    onChange={handleChangeDay}
                    style={{maxWidth:112, backgroundColor: '#f1f1f2'}}
                >
                    {fillTheOptions(1, 31, []).map((i) => {
                        return <MenuItem key={i} value={i}>{i}</MenuItem>;
                    })}
                </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 122, margin: 0 }}>
                <InputLabel id="demo-simple-select-required-label3" style={{color:'#ababaf'}}>Year</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label3"
                    id="demo-simple-select-required3"
                    value={year}
                    label="year"
                    onChange={handleChangeYear}
                    style={{maxWidth:112, backgroundColor: '#f1f1f2'}}
                >
                    {fillTheOptions(1920, 2022, []).map((i) => {
                        return <MenuItem key={i} value={i}>{i}</MenuItem>;
                    })}
                </Select>
            </FormControl>
        </>
    );

}