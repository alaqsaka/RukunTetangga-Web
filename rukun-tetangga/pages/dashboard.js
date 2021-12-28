import { useContext, useEffect, useState } from "react";
import styles from "../styles/dashboard.module.css";
import AuthContext from "../stores/authContext";

export default function Guides() {
  const { user, authReady, login } = useContext(AuthContext);
  const [dataPenduduk, setDataPenduduk] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/dashboard",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            login();
            throw Error(
              "Harus login terlebih dahulu baru bisa liat konten ..."
            );
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setDataPenduduk(data);
        })
        .catch((err) => {
          setError(err.message);
          setDataPenduduk(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}

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
