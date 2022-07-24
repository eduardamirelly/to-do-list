import { useState } from "react"

function CheckboxGradient() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
}

  return (
    <>
      <input type="checkbox" name="checkbox" className={isChecked ? 'checked' : ''} />
      <label htmlFor="checkbox" className="check" onClick={handleCheckbox}>
        <svg className="svg-checkbox" width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path className="rect" d="M4 1L28 1C29.6569 1 31 2.34315 31 4L31 28C31 29.6569 29.6569 31 28 31L4 31C2.34315 31 1 29.6569 1 28L1 4C1 2.34315 2.34315 1 4 1Z" stroke="url(#paint0_linear_431_208)" strokeWidth="2" />
          <path className="result" d="M26.5 7L13.5 26L6 16" stroke="url(#paint1_linear_431_208)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="paint0_linear_431_208" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#632329" />
              <stop offset="0.49648" stopColor="#F25551" />
              <stop offset="1" stopColor="#50F283" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="paint1_linear_431_208" x1="16.25" y1="6" x2="16.25" y2="25.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#632329" />
              <stop offset="0.49648" stopColor="#F25551" />
              <stop offset="1" stopColor="#50F283" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </label>

    </>
  )
}

export default CheckboxGradient