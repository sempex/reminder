import React, { useState, useRef } from "react";

interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  className?: string;
  setTimes: (time: string) => void;
  index: number;
}

export function TimePicker({
  value = "",
  onChange,
  className = "",
  index,
  setTimes,
}: TimePickerProps) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const validateTime = (time: string): boolean => {
    // Check format: HH:MM
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
    return timeRegex.test(time);
  };

  const formatTime = (time: string): string => {
    // Ensure hours are padded with leading zero if needed
    const [hours, minutes] = time.split(":");
    return `${hours.padStart(2, "0")}:${minutes}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setError("");

    // Validate on every change
    if (newValue === "") {
      onChange?.("");
      return;
    }

    if (validateTime(newValue)) {
      const formattedTime = formatTime(newValue);
      onChange?.(formattedTime);
      setTimes(formattedTime);
    } else {
      setError("Invalid format");
    }
  };

  const handleBlur = () => {
    if (inputValue && validateTime(inputValue)) {
      const formattedTime = formatTime(inputValue);
      setInputValue(formattedTime);
      onChange?.(formattedTime);
      setError("");
    } else if (inputValue) {
      setError("Invalid time format");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow numbers, colon, backspace, delete, arrow keys, tab
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      ":",
    ];
    const isNumber = /^[0-9]$/.test(e.key);

    if (!isNumber && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder="08:00 or 20:00"
        maxLength={5}
        className={`flex h-10 w-full rounded-md border ${
          error ? "border-red-500" : "border-slate-200"
        } bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-slate-950"
        } focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      <p className="mt-1 text-xs text-slate-500">Format: HH:MM (24-hour)</p>
    </div>
  );
}
