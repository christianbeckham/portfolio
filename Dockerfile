FROM node:alpine3.17 AS development
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci --silent
COPY . ./
EXPOSE 3000
CMD [ "npm", "start" ]

FROM development AS build
RUN npm run build

FROM nginx AS production
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]