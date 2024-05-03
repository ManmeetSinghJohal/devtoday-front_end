export const toggleDarkMode = () => {
  const isDark = document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
};
