export const formatDate = (date) => {
  if (date) {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    return `${d}-${m}-${y}`;
  }
};

export const getStatus = (code) => {
  switch (code) {
    case "Y":
      return "Verified";
    case "N":
      return "Not Verified";
    case "D":
      return "Demolished";
    case "R":
      return "Ready to Demolish";
    default:
      return "";
  }
};

export const getAuthStatusById = (id) => {
  switch (id) {
    case "01":
      return "Authorized";
    case "02":
      return "Unauthorized";
    case "03":
      return "Not Known";
    default:
      return "--";
  }
};
