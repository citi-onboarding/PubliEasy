import React, { useEffect, useRef } from 'react';
import { TextField, TextFieldProps } from "@mui/material";
import { useField } from '@unform/core';

type TVTextFieldProps = TextFieldProps & {
    name: string;
}

export const VTextField: React.FC<TVTextFieldProps> = ({ name, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue = '', error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref: any, value) {
                ref.value = value;
            },
            clearValue(ref: any) {
                ref.value = '';
            },
        });
    }, [fieldName, registerField]);

    return (
        <TextField
            {...rest}
            inputRef={inputRef}
            defaultValue={defaultValue}
            error={!!error}
            helperText={error}
            onKeyDown={() => error ? clearError() : undefined}
        />
    );
};
