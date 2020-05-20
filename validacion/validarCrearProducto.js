export default function validarCrearCuenta(valores) {
  let errores = {};
  // Validar nombre de usuario
  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio";
  }
  // Validar empresa
  if (!valores.empresa) {
    errores.empresa = "El nombre de la Empresa es obligatorio";
  }
  // Validar url
  if (!valores.url) {
    errores.url = "La url del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "URL no valida";
  }
  // Validar descripcion
  if (!valores.descripcion) {
    errores.descripcion = "La descripción del producto es obligatoria";
  }
  return errores;
}
