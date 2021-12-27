exports.handler = async () => {
  console.log("Function Penduduk Ran");

  const content = {
    data: {
      name: "Dzekov",
      NIK: 367406150062312,
      umur: 19,
      alamat: "Icebox Jl. Yellow Box No. 1",
      jenis_kelami: "P",
    },
  };

  // Return response to browser
  return {
    statusCode: 200,
    body: JSON.stringify(content),
  };
};
