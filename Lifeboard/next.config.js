module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Adicione os domínios permitidos para imagens
  },
  env: {
    // Adicione suas variáveis de ambiente aqui
    API_URL: process.env.API_URL,
  },
};