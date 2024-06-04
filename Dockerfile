# Use a imagem base do Cypress que já inclui o Cypress instalado globalmente
FROM cypress/included:3.4.0

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Execute os testes do Cypress sem interface gráfica
CMD ["cypress", "run"]
