import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AuthContext from "../stores/authContext";
import styles from "../styles/dashboard.module.css";

export default function Dashboard() {
  // Check if user login or not
  const { user, authReady } = useContext(AuthContext);
  // console.log(user.token.access_token);
  const [dataPenduduk, setDataPenduduk] = useState(null);
  const [error, setError] = useState(null);

  // When the page refreshed, it will run again and check if the user
  // Login or not
  useEffect(() => {
    if (authReady) {
      fetch(
        ".netlify/functions/dashboard",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            // Ini adalah message property yang di-pass ke catch
            throw Error(
              "Harus login terlebih dahulu baru bisa liat konten ..."
            );
          }
          return res.json();
        })
        .then((data) => {
          setDataPenduduk(data.data);
          console.log("dataPenduduk " + dataPenduduk);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setDataPenduduk(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className={styles.dashboard}>
      {!authReady && <div>Loading ... </div>}
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {dataPenduduk &&
        dataPenduduk.map((penduduk) => (
          <div key={penduduk.name} className={styles.card}>
            <h3>{penduduk.name}</h3>
            <h4>{penduduk.umur}</h4>
            <h4>{penduduk.NIK}</h4>
            <h4>{penduduk.alamat}</h4>
            <h4>{penduduk.jenis_kelamin}</h4>
          </div>
        ))}
    </div>
  );
}
