import { useState } from "react";

const Test = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    return <input type="text" onChange={handleChange} value={inputValue} />;
  };
};
export default Test;

//To fix this, you need to explicitly cast the event.target to the correct type, which is usually an HTMLInputElement for input elements.
