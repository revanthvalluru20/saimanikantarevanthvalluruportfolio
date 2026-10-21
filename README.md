Revanth's Portfolio
A personal portfolio website showcasing my skills, selected projects, and software development journey. The site is built with React and Vite and is intended to be hosted using GitHub Pages.
Live Website
Once GitHub Pages deployment is enabled, the website will be available at:

https://revanthvalluru20.github.io/saimanikantarevanthvalluruportfolio/
If your GitHub repository has a different name, update the URL above and the base value in vite.config.ts to match it.

Tech Stack
- React
- Vite
- JavaScript / TypeScript, as used by the project
- CSS for styling
- Git and GitHub
- GitHub Actions and GitHub Pages for deployment
Features
- Personal introduction and profile
- Skills and technologies
- Selected software development projects
- Contact and professional links
- Responsive portfolio layout
Run Locally
Prerequisites
- Node.js and npm
- Git (optional, for cloning the repository)
Installation
git clone https://github.com/revanthvalluru20/revanth-portfolio-redesigned.git
cd revanth-portfolio-redesigned
npm install
npm run dev
Vite will print the local development URL in your terminal.
Build for Production
npm run build
The production-ready files will be generated in the dist directory. To preview the production build locally, run:
npm run preview
Deployment on GitHub Pages
This project is configured to use GitHub Pages with a GitHub Actions workflow.
1. Ensure vite.config.ts uses the repository path as its base. For this repository, it should be /revanth-portfolio-redesigned/.
2. Add the deployment workflow at .github/workflows/deploy.yml.
3. Push your changes to the main branch.
4. In GitHub, open Settings → Pages and select GitHub Actions as the build and deployment source.
5. Open the Actions tab and confirm the workflow completes successfully.
Featured Work
This portfolio may include projects such as:
- VibeVerse — a gaming-focused social platform.
- MentorAI — an AI-powered interactive coding environment.
- V-Connect — a social networking application for university students.
- Cardiovascular Risk Analytics — a data analytics dashboard project.
For project descriptions and links, refer to the Projects section of the website.
Author
Valluru Sai Manikanta Revanth
- GitHub: @revanthvalluru20
If you find this project useful or interesting, feel free to explore the repository and share feedback.
