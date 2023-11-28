# Vanderbilt Holiday Catalog

### About

- Landing page for Vanderbilt Holiday Catalog

### Stack

- HTML
- CSS
- JS
- Webpack
- Swiper js

### dev: https://oak-theory.github.io/VHC/

### prod: https://vanderbiltshop.com/

## How to make a deploy to prod:

For correct deploy to prod(live) we need transfer all files from dist folder directly to the 'develop' branch.
Steps:

- Make sure the page work correctly on dev env. Use - 'npm run deploy' to deploy files to the dev env -> https://oak-theory.github.io/VHC/
- If all good and after running 'npm run dev' you don`t have any issues in console -> run 'npm run build'. Files in dist folder will be updated.
- After that go to repo page in git hub, and create new branch from branch 'develop' -> 'deploy' (for example)
- Then in code app switch to the new 'deploy branch' and :
- - resolve conflicts with .gitignore -> accept changes from 'deploy' branch
- -
