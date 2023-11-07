import React, { useState } from "react";

import DangerBar from "../DangerBar/DangerBar";
import { Form } from "react-bootstrap";

const DangerInput = () => {
  
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue (Number(event.target.value));
    }
  
    return (
    <div className="m-3 w-50">
        <h2> Ejemplo Barra de Progreso </h2>
        <Form.Range value={value} onChange={handleChange}/>
        <DangerBar value={value}/>
    </div>
  )
}

export default DangerInput