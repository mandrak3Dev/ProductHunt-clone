import React, { useState, useEffect } from "react";

const useValidacion = (stateInicial, validar, fn) => {
  const [valores, guardarValores] = useState(stateInicial);
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarsubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;
      if (noErrores) {
        fn(); // Función que se ejecuta en el componente
      }
      guardarsubmitForm(false);
    }
  }, [errores]);

  const handleChange = (e) => {
    guardarValores({ ...valores, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
    guardarsubmitForm(true);
  };

  const handleBlur = () => {
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
  }

  return {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  };
};

export default useValidacion;
