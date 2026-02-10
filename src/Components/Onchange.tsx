import { useState } from "react";

const InputExample = () => {
  const [name, setName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Typed value: {name}</p>
    </div>
  );
};

export default InputExample;
