export const getData = async (link) => {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error({
        message: response.statusText,
        statusCode: response.status,
      });
    }

    const jsonData = await response.json();
    return jsonData;
};

export const getDataTypeName = async (link) => {
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error({
      message: response.statusText,
      statusCode: response.status,
    });
  }
  var jsonData = await response.json();
  return jsonData;
};