FROM node:20-bullseye AS base
# FROM node:20-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package.json package-lock.json tsconfig.json  ./
COPY /node_modules ./node_modules
COPY /src ./src

EXPOSE 3000
