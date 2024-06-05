FROM cypress/base:latest

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto para o diretório de trabalho
COPY . .

# Instalar dependências necessárias
RUN apt-get update && apt-get install -y \
    xvfb \
    xauth \
    libatk1.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Instalar o Cypress globalmente
RUN npm install -g cypress

# Execute os testes do Cypress usando Xvfb
CMD ["xvfb-run", "cypress", "run", "--headless"]