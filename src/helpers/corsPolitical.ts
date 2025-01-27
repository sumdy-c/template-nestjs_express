/**
 * Определяет политику CORS для приложения
 * @param origin домен запроса
 */
const corsPolitical = (origin: string) => {
  if (process.env.MOD === 'dev') {
    return true;
  }

  const urlPattern = /\.mf\.com$/;

  if (!origin || urlPattern.test(new URL(origin).hostname)) {
    return true;
  } else {
    return false;
  }
};

export { corsPolitical };
