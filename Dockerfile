FROM cypress/included:latest

WORKDIR /e2e

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
RUN yarn install

COPY . .

CMD ["cypress", "run"]