FROM node:18 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run ssr:build
CMD npm run ssr:start:run
#RUN npm run build
#FROM nginx
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=build /app/build /usr/share/nginx/html
