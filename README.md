# ISDoc built with Next JS 12+, NextAuth, Firebase, MUI and Draft JS [![LinkedIn](/public//linkedin.png)](https://www.linkedin.com/in/inderjit-shahi-b9880a201/)

<p align="center">
  <a href="https://isdoc.vercel.app/"><img src="public/ISDoc Banner.png" alt="Website banner"></a>
</p>

🚀 ISDoc, the doc editor created in Next.js, ⚡️ Made with developer experience first: Next.js, React.js, FireBase, Draft.js, VSCode, Vercel, Material UI.


### DEMO

[![ISDoc Banner](/public/1.1)](https://isdoc.vercel.app/)

Check out [live demo](https://isdoc.vercel.app/).

### Features

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🧑‍🔧 Power of  [NextAuth](https://next-auth.js.org/)
- 🏪 [FireBase](https://firebase.google.com/) for secure data storage
- 👨‍💻 [Draft.js](https://draftjs.org/) for writing beautiful
- 🎨 Integrate with [Material UI](https://tailwindcss.com)
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ✅ Strict Mode for  React 17
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel
Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Sessions

### Included Components

- Navbar
- Start Doc
- Docs
- Write
- Login
- TextEditor
- Create Doc

Find more Projects at [Github Page](https://github.com/inderjitshahi).

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready



### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/inderjitshahi/ISDOc my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

```
.
├── README.md            # README file
├── next.config.js       # Next JS configuration
├── public               # Public folder
│   └── images           # Image used by Website
│           
├──components
│   ├── Header.js        # Header Component
│   ├── Start.js         # Atomic hero component
│   ├── Docs.js          # Docs of a particular user
│   ├── Login            # Login page for Google Signin
│   └── TextEditor.js    # The Draft.js TextEditor
├──pages
│   ├── [...nextauth]    # NextAuth Config page
│   ├── index.js         # '/' page of the web
│   ├── _app.js          # file for sessions and global css import
│   └── [id].js          # Dynamic Page for Editing Docs
├── styles               # Public folder
│   └── global           # Global styles to the website
└── firebase.js          # Firebase Configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your theme is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template)

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-JS-Landing-Page-Starter-Template)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [Inderjit Shahi](https://port-folio-vxwv.vercel.app/) [![LinkedIn](/public//linkedin.png)](https://www.linkedin.com/in/inderjit-shahi-b9880a201/)
