# Engineering Blog RSS Scheduler

This repository updates the RSS feed of [AB180 Engineering Base](https://engineering.ab180.co) every day.

## ✅ Requirement

- [Node (LTS version)](https://nodejs.org/ko/download/)
- [PNPM](https://pnpm.io/installation)

#### How To Install

```bash
# install node from brew
brew install node

# install pnpm from brew
brew install pnpm

# setup version
pnpm env use --global 16
```

## 🏃 Install & Run

To transpile the TypeScript files,  
run this command:

```bash
pnpm transpile
```

To transpile and create `rss.xml`,  
run this command:

```bash
pnpm generate
```
