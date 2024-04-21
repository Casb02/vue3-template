# Vue 3 Template - Persoonlijk template

Een persoonlijke Vue 3 template met wat basis installaties om snel te kunnen starten met een project.
Voel je vrij om dit template te gebruiken, aan te passen of te verbeteren.

Dit template leunt op de volgende hoofdzakelijke functies:
- **Vue 3**
- **Vue Router**
- **Tailwindcss** (Utility-first CSS framework)
- **Shadcn-vue** (Radix Vue Components)
- **AutoAnimate** (v-auto-animate Vue 3 plugin, for easy animations)
- **Pinia** (Vue 3 Store)
- **Github Actions** (Deploy to Github Pages)
- **Sass** (Syntactically Awesome Style Sheets)

## Installatie
1. Kopieer de repository
2. Installeer de dependencies
```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```
3. Start de development server
```bash
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev
```



### ShadCn Vue custom style generator
Deze template maakt gebruik van de ShadCn Vue componenten. Deze componenten zijn te vinden in de `src/components` map. De componenten zijn te gebruiken in de `src/App.vue` file.
ShadCn heeft custom style generator. [Deze vind je hier (shadcn-vue.com/themes)](https://www.shadcn-vue.com/themes.html)

### ShadCn npx command
ShadCn heeft een npx command om components te downloaden. [Deze vind je hier (shadcn-vue.com/docs)](https://www.shadcn-vue.com/docs/components/button.html)

### Github Actions
Dit template bevat een actie om automatisch te deployen naar Github Pages. De actie is te vinden in de `.github/workflows` map. De actie wordt uitgevoerd wanneer er een push wordt gedaan naar de `main` branch.
Zelf moet de secrets.GITHUB_TOKEN worden toegevoegd aan de repository. [Meer informatie over Github Actions](https://docs.github.com/en/actions)
De token is een Github Token. [Meer informatie over Github Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)