import React, { ChangeEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sum, subtract } from "../../store/calculator/actions";

interface FormProps {
  a?: number;
  b?: number;
}

const Calculator: React.FC = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: any) => state.calculator);

  const [formData, setFormData] = useState<FormProps>({});

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((formData?: FormProps) => {
      return { ...formData, [name]: Number(value) };
    });
  };

  const handleSum = async () => {
    dispatch(sum(Number(formData?.a), Number(formData?.b)));
  };

  const handleSubtract = async () => {
    dispatch(subtract(Number(formData?.a), Number(formData?.b)));
  };

  return (
    <div>
      <input
        name="a"
        type="number"
        placeholder="a"
        onChange={handleInputChange}
      />
      <input
        name="b"
        type="number"
        placeholder="b"
        onChange={handleInputChange}
      />

      <button onClick={handleSum}>Somar</button>
      <button onClick={handleSubtract}>Subtrair</button>

      <div>{result}</div>
    </div>
  );
};

export default Calculator;
