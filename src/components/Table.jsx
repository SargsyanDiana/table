import React, {useCallback, useMemo, useState} from "react";
import '../App.css';
import CustomSelect from "./CustomSelect";
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerComponent from "./DatePicker";
import SearchInput from "./SearchInput";

const Table = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState({})

    const colHeaders = useMemo(() => ['id', 'name', 'description', 'date', 'status'], [])
    const selectOptions = useMemo(() => [
        { value: "active", label: "Active" },
        { value: "pending", label: "Pending" },
        { value: "cancelled", label: "Cancelled" },
    ], [])

    //TODO handleChange(update edited data and set to firebase
    const handleChange = useCallback((e) => {
        console.log(e.target.value, 'e.target.value')
    }, [])

    const handleInputChange = useCallback( (e) => {
        setSearchQuery({name: e.target.name, value: e.target.value});
    }, [setSearchQuery]);

    const isExistedQuery = useCallback((item, type) => searchQuery.value && item[type].toString().includes(searchQuery.value) && searchQuery.name === type, [searchQuery.value, searchQuery.name])

    return (
        <>
            <table>
                <thead>
                <tr>{colHeaders.map(key => <th key={key}>{key}</th>)}</tr>
                </thead>
                <tbody>
                <tr>{colHeaders.map(item => <td key={item}><SearchInput name={item} searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleInputChange={handleInputChange} /></td>)}</tr>
                {data?.map((item) => (
                        <tr key={item.id}>
                                <td className={`${isExistedQuery(item, 'id') ? 'text-blue-main' : 'text-white'}`}><input type="number"
                                           autoComplete="off"
                                           name='id'
                                           defaultValue={item.id}
                                           onChange={handleChange}
                                />
                                </td>
                                <td className={`${isExistedQuery(item, 'name') ? 'text-blue-main' : 'text-white'}`}>
                                    <input type="text"
                                           autoComplete="off"
                                            name='name'
                                            defaultValue={item.name}
                                            onChange={handleChange}
                                />
                                </td>
                                <td className={`${isExistedQuery(item, 'description') ? 'text-blue-main' : 'text-white'}`}>
                                    <textarea
                                    name="description"
                                    autoComplete="off"
                                    defaultValue={item.description}
                                    onChange={handleChange}
                                />
                                </td>
                            <td className={`${isExistedQuery(item, 'date') ? 'text-blue-main' : 'text-white'}`}><DatePickerComponent value={item.date} /></td>
                                <td className={`${isExistedQuery(item, 'status') ? 'text-blue-main' : 'text-white'}`}>
                                    <CustomSelect
                                    name="status"
                                    value={item.status}
                                    options={selectOptions}
                                />
                                </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;