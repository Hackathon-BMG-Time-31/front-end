export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  return !!token;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  localStorage.getItem("token");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};
