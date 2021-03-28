FROM node:14-alpine
WORKDIR /usr/src  
ADD ./ ./
RUN ls -al
RUN npm set progress=false && \
    npm install -s --no-progress && \
#    npm run build && \
    npm prune --production && \
    npx next telemetry disable
CMD ["npm","run","dev"]
EXPOSE 3000
