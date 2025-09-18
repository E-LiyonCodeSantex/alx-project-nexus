## ALX PROJECT NEXUS

# How is scalfolded the project

* I scalfolded react next.js with typescript using: npx create-next-app@latest . --typescript
* I installed tailwindcss with the postcss and autoprefixer using: npm install -D tailwindcss@3.4.17 postcss autoprefixer
* I initialized it using: npx tailwindcss init -p
* I installed axios using : npm install axios

# Configuration

* I configured styles/global.css to use tailwind base, component and utilities
* I configured tailwind.config.js to get all files with .js, .jsx, .ts, .tsx and .mdx extension in pages, component, and app directories if any.
* I ran a reset using : npm run reset (why? because i want a clean state for development and I also want to avoid conflit)

# Switching to app/ directory

* I create app directory and deleted pages/ directory. feel better to use the default routing instead.

## Development begins

   # app/onboarding development
* I created app/onboarding/page.tsx.
* I redirected app/page.tsx (which is the webapp's sstarting point) to point to it.
* I made the onboarding/page to have a 3 onboarding screen to slide every 3seconds and stop at the last one with "get started" button which points to auth/page
* I created the app/auth/page.tsx (I needed to use react icons here, so i install react icons using: npm install react-icons. I might be needing lucide react to because some icons are from there. so I installed it using: npm install lucide-react )
    **Qucik sign up with phone number**
* I wrote a post request for  backend to recieve and store user's phone number before a successful quick sign up

    **Quick signin with google and facebook**
    * I installed next-auth using:  npm install next-auth
    * I created a .env.local file where i store google and facebook client ID and secret code with nextAuth secret code and url
    * I added an  onclick function to the google button and imported sign in from next-auth/react
    * I wraped my app/layout.tsx with sectiobn provider
    * I created /app/api/auth/[...nextauth]/route.ts file and wrote a code that will enable user to access their google detail through my website  (this is necessary in order to enable user sign in with google)
    * Then i set Up Google OAuth Credentials
        **How to set Up Google OAuth Credentials**
        * go to https://console.cloud.google.com/ 
        * sign up or sign in with google
        * At the top, you'll see "my first project" or "new project" click on it
        * In side it, click "new project". Give it a name and click on "Create" (don't fill any other form, just project name)
        * Then go to (or search in the search bar) APIs & Services and somewhere around the middle left is the OAuth consent screen section, click on it and click on "get stard button"
        * provide this; company nane (O-buy in my case), next: user email (the one that you'll use to log and broadcast users. eelyondesign@gmail.com) Next: external, Next: - Developer contact email and click on create.
        * Create OAuth Credential by going to APIs & Services > Credentials and click - Create Credentials > OAuth 2.0 Client ID
        * Choose Web Application
        # NOTE: I wrap my layout children in a SessionProvider (this defineds that only authenticated users can acess the page) and to do this i have to tell Next.js that this component should run on the client side by adding " 'use client'; " to the first line of app/layout.tsx
        * 





