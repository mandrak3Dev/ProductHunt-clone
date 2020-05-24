import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/layout/Layout";
import DetallesProductos from "../components/layout/DetalleProductos";
import { FirebaseContext } from "../firebase";

export default function Home() {
  const [productos, guardarProductos] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db
        .collection("productos")
        .orderBy("creado", "desc")
        .onSnapshot(manejarSnapshot);
    };
    obtenerProductos();
  }, []);
  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    guardarProductos(productos);
  }
  return (
    <div className="">
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {productos.map((producto) => (
                <DetallesProductos key={producto.id} producto={producto} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
