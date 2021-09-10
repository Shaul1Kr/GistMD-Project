export default (patients = [], action) => {
  switch (action.type) {
    case "DELETE":
      return patients.filter((patient) => patient._id !== action.payload);
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...patients, action.payload];
    default:
      return patients;
  }
};
