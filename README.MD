<p align="center">
  <img src="assets/logo.svg" alt="Ecoleta" width="300">
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge&logo=license&logoColor=white)](https://opensource.org/licenses/MIT)
[![Repository Size](https://img.shields.io/github/repo-size/rafaumeu/ecoleta?style=for-the-badge&logo=github&logoColor=white&labelColor=2f3640&color=44bd32)](https://github.com/rafaumeu/ecoleta)
[![Development Status](https://img.shields.io/badge/Status-Frontend%20Ready-success?style=for-the-badge&logo=checkmarkcircle&logoColor=white&labelColor=2f3640&color=44bd32)](https://github.com/rafaumeu/ecoleta)
[![Last Commit](https://img.shields.io/github/last-commit/rafaumeu/ecoleta?style=for-the-badge&logo=git&logoColor=white&labelColor=2f3640&color=8c7ae6)](https://github.com/rafaumeu/ecoleta/commits)
[![Pull Requests](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&logo=git-pull-request&logoColor=white&labelColor=2f3640&color=44bd32)](http://makeapullrequest.com)

[![Tech Stack](https://img.shields.io/badge/Tech%20Stack-HTML%20%7C%20CSS%20%7C%20JS-yellow?style=for-the-badge&logo=javascript&logoColor=white&labelColor=2f3640&color=fbc531)](https://www.javascript.com)
[![Mobile Responsive](https://img.shields.io/badge/📱%20Mobile-Responsive-ff69b4?style=for-the-badge&logoColor=white&labelColor=2f3640&color=fd79a8)](https://github.com/rafaumeu/ecoleta)
[![Code Style](https://img.shields.io/badge/Code%20Style-Conventional-blue?style=for-the-badge&logo=prettier&logoColor=white&labelColor=2f3640&color=00a8ff)](https://www.conventionalcommits.org/)
[![Eco Impact](https://img.shields.io/badge/🌿%20Eco-Impact-green?style=for-the-badge&logoColor=white&labelColor=2f3640&color=44bd32)](https://github.com/rafaumeu/ecoleta)

[![Visitors](https://img.shields.io/badge/dynamic/json?url=https://api.github.com/repos/rafaumeu/ecoleta/traffic/views&label=Visitors&query=$.count&style=for-the-badge&logo=github&logoColor=white&labelColor=2f3640&color=8c7ae6)](https://github.com/rafaumeu/ecoleta)
[![Contributors](https://img.shields.io/github/contributors/rafaumeu/ecoleta?style=for-the-badge&logo=github&logoColor=white&labelColor=2f3640&color=44bd32)](https://github.com/rafaumeu/ecoleta/graphs/contributors)
[![Code Quality](https://img.shields.io/badge/Code%20Quality-A%2B-brightgreen?style=for-the-badge&logo=codefactor&logoColor=white&labelColor=2f3640&color=44bd32)](https://github.com/rafaumeu/ecoleta)

</div>
<p align="center">
  <a href="#about-the-project">💡 About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">✨ Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies-used">🚀 Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">🎯 Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#commit-standards">📋 Commit Standards</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">📝 License</a>
</p>

## 💡 About the Project

Ecoleta is a waste collection marketplace that helps people find collection points efficiently. The project features a responsive web interface with search functionality and dynamic point registration, optimized for all screen sizes.

## ✨ Features

- **🔍 Search for Collection Points**
  - Modal-based search interface
  - City and state filtering
  - Intuitive search experience

- **📝 Collection Point Registration**
  - Form with required field validation
  - Dynamic UF and City selection using IBGE API
  - Interactive items grid with visual feedback
  - Responsive form layout with styled field groups

- **🎨 Interface Components**
  - Responsive header with dynamic navigation
  - Mobile-first design with optimized layouts
  - Modal system for search interface
  - Custom styled buttons with hover effects
  - Optimized for screens as small as 375px

## 🚀 Technologies Used

- HTML5
- CSS3 (with modular organization)
- JavaScript (Vanilla)
- External APIs Integration (IBGE)
- Git for version control
- Mobile-First Design Approach

## 📂 Project Structure

```
C:.
│   create-point.html
│   index.html
│   search-results.html
│
├───assets
│       arrow-left.svg
│       baterias.svg
│       check.svg
│       eletronicos.svg
│       home-background.svg
│       lampadas.svg
│       log-in.svg
│       logo.svg
│       oleo.svg
│       organicos.svg
│       papeis-papelao.svg
│       search.svg
│       x.svg
│
├───scripts
│       create-point.js
│       index.js
│
└───styles
        create-point.css
        home.css
        index.css
        modal.css
        responsive.css
        search-results.css
```

## 🎯 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - pure HTML, CSS, and JavaScript
4. Test the responsive design using device emulation in your browser

## 📋 Commit Standards

We follow the Conventional Commits specification for our commit messages:

### 📝 Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### 🏷️ Types

- `feat`: ✨ A new feature
- `fix`: 🐛 A bug fix
- `docs`: 📚 Documentation changes
- `style`: 💎 Changes that do not affect the code's meaning
- `refactor`: 📦 Code changes that neither fix a bug nor add a feature
- `perf`: ⚡ Performance improvements
- `test`: 🔍 Adding or fixing tests
- `chore`: 🛠️ Changes to build process or auxiliary tools

### 💡 Examples

```bash
feat(form): ✨ add required field validation
fix(modal): 🐛 correct modal closing animation
docs(readme): 📚 update project setup instructions
style(css): 💎 improve button hover effects
refactor(js): 📦 reorganize create-point.js functions
```

### 🔄 Pull Request Process

1. 📝 Ensure your commits follow the standards above
2. 📚 Update the README.md with details of changes if needed
3. 🔗 Reference any relevant issues in your commit messages and PR description
4. 👀 Your PR will be reviewed by at least one maintainer

### 🌿 Branch Naming

```bash
feature/description-here
bugfix/description-here
hotfix/description-here
```

## 🎨 Layout

You can view the project layout through [this link](https://www.figma.com/file/Byw4X5etg8VCmezueyhzkC/Ecoleta-(Starter)?node-id=136%3A546). You need a [Figma](http://figma.com/) account to access it.

## 👥 Development Team

- Rafael Dias Zendron - _Lead Developer_ - [GitHub](https://github.com/rafaumeu)

## 📬 Contact

Rafael Dias Zendron - [rafael.zendron22@gmail.com](mailto:rafael.zendron22@gmail.com)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- IBGE for providing the API for location data
- SVG icons for waste categories
- Inspiration from modern waste management solutions

---

<div align="center">
<img src="https://github.com/rafaumeu.png" width="100" height="100" style="border-radius: 50%;">

### Built with 💜 by Rafael Zendron

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-dias-zendron-528290132/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rafaumeu)
</div>
