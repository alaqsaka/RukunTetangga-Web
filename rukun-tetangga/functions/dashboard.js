exports.handler = async (event, context) => {
  const penduduk = [
    {
      name: "Dzekov",
      NIK: 367406150062312,
      umur: 19,
      alamat: "Icebox Jl. Yellow Box No. 1",
      jenis_kelamin: "P",
    },
    {
      name: "Jett",
      NIK: 367406150063211,
      umur: 19,
      alamat: "Icebox Jl. Yellow Box No. 2",
      jenis_kelamin: "P",
    },
    {
      name: "John Doe",
      NIK: 3674061500620921,
      umur: 19,
      alamat: "Icebox Jl. Yellow Box No. 3",
      jenis_kelamin: "P",
    },
  ];

  if (context.clientContext.user) {
    // fetch data & then return
    return {
      statusCode: 200,
      body: JSON.stringify(penduduk),
    };
  }

  // return error status
  return {
    statusCode: 401,
    body: JSON.stringify({
      mssg: "Sekarang engga ada data karena kamu belum login",
    }),
  };
};
