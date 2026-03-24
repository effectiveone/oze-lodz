# OZE Łódź

**Urban Dark Gold** — ciemne tło, złote akcenty, editorial magazine.

Portal o odnawialnych źródłach energii w Łodzi i województwie łódzkim.

## Stack

- Gatsby 5
- React 18
- gatsby-transformer-remark (Markdown)
- gatsby-plugin-react-helmet

## Uruchomienie

```bash
npm install
npm run develop
```

## Deploy (Cloudflare Pages)

- Build command: `gatsby build`
- Output: `public/`
- Node: 18

## Struktura treści

Artykuły Markdown umieszczaj w `content/blog/` z frontmatterem:

```yaml
---
title: "Tytuł artykułu"
date: "2024-01-15"
description: "Krótki opis"
author: "Autor"
tags: ["fotowoltaika", "łódź"]
---
```

## Partner

[ecoaudyt.app](https://ecoaudyt.app) — audyty energetyczne
