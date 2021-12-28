exports.handler = async (event, context) => {
  const dataPenduduk = {
    data: [
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
    ],
  };

  // If there is a user property on the client context
  // if there is a token, user logged in, show the data
  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(dataPenduduk.data),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({
      data: {
        message: "Sekarang engga ada data karena kamu belum login",
      },
    }),
  };
};
