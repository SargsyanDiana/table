import React, {useMemo} from "react";

const CustomSelect = ({ options, value, handleChange, name }) => {
    const selectedItem = useMemo(() => options.find(item => item.label === value), [options, value])
    return (
        <select
            name={name}
            onChange={handleChange}
            defaultValue={selectedItem.value}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default CustomSelect;