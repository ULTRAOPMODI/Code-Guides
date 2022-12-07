# **Introduction**
Hey guys today we will learn how to run **TypeScript** file without **JavaScript** file!!!
So let's get started!

1. Setup Your project

```bat
mkdir ts-discord-bot && cd ts-discord-bot
```

```bat
npm init --yes
```

2. Install useful developers packages

```bat
npm install --save-dev ts-node
```

After all packages installed then try it on your typescript file
```ts
function calc(x: number, y: number)
{
 console.log(x + y);
}

void calc(7, 7);
```

And this file then run this command on your cmd
```bat
npx ts-node ./index.ts
```
