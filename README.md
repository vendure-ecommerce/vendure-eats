<p align="center">
  <a href="https://vendure.io">
    <img alt="Vendure logo" height="60" width="auto" src="https://a.storyblok.com/f/192301/252x200/c6608214a9/brand-icon-primary.svg">
  </a>
</p>

<h1 align="center">
  VendureEats - Multi-Vendor Food Delivery App
</h1>
<p align="center">
  A food delivery platform built with <a href="https://vendure.io">Vendure v3</a> and <a href="https://vendure.io">Next.js 14</a>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Work_in_progress-blue" alt="Status: Work in Progress" />
  <a href="https://vendure.io/community">
    <img src="https://img.shields.io/badge/join-our%20discord-7289DA.svg" alt="Join our Discord" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=vendure_io">
    <img src="https://img.shields.io/twitter/follow/vendure_io" alt="Follow @vendure_io" />
  </a>
</p>

> 🚧 **Work in Progress** 🚧
> This project is currently still under development and is part of a series of live streams on the Vendure YouTube channel and Twitch.
> This means that the project is not yet feature-complete and is being developed live on stream.
> If you want to follow along, make sure to subscribe to the [Vendure YouTube channel](https://www.youtube.com/@vendure_io/streams) and follow us on [Twitch](https://www.twitch.tv/vendure_io).

## Overview

Vendure Eats is an open-source project that is used to demonstrate the capabilities and features of Vendure. It is built in a series of live streams of the Vendure founders [David](https://x.com/dlhck_) and [Michael](https://x.com/michlbrmly) on the [Vendure YouTube channel](https://www.youtube.com/@vendure_io/streams) and on [Twitch](https://www.twitch.tv/vendure_io).

The stack of Vendure Eats:

- [Vendure](https://vendure.io)
- [Nx](https://nx.dev)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org)

## Features

This project is currently still under development and the features are being added as we go. The following features are planned for the project:

- [x] Monorepo Setup
- [ ] ♻️ Restaurant listing and map view
- [ ] ♻️ Restaurant detail page
- [ ] Customer registration and login (incl. social login/signup)
- [ ] Menu listing
- [ ] Cart functionality
- [ ] ♻️ Checkout process
- [ ] Order history and order status page
- [ ] Admin dashboard for restaurants
- [ ] Admin dashboard for drivers (delivering the orders)

## Quickstart

We are using [Nx](https://nx.dev) to manage the monorepo. To get started, clone the repository and run the following commands:

Install dependencies first:

```bash
npm install
```

Start docker containers:

```bash
docker-compose up -d
```

In case your env variable `ADMIN_UI_DEV_MODE` is set to `true`, you need to build the admin ui first:

```bash
npx nx build-admin vendure 
```

Start the Vendure server and worker:

```bash
npx nx serve vendure 
npx nx serve-worker vendure 
```

To start the storefront, run:

```bash
npx nx dev storefront 
```

Following these steps, you should be able to access

- the Vendure Admin UI at `http://localhost:3000/admin`
- the Vendure Admin API playground at `http://localhost:3000/admin-api`
- the Vendure Shop API playground at `http://localhost:3000/shop-api`
- the storefront at `http://localhost:4200`.

## Resources

### Get started with Vendure

- [Vendure Documentation](https://docs.vendure.io)
- [Vendure GitHub Repository](https://github.com/vendure-ecommerce/vendure)
- [Vendure Discord Community](https://vendure.io/community)

### Get started with Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
