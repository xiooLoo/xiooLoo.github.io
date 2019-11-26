This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**当前项目：**

项目源： `dev`分支

build 文件： `master`分支

在线访问地址：http://xiooloo.gihub.io

---

## Available Scripts

In the project directory, you can run:

> ### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

> ### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> ### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

> ### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

> ### `npm deploy`

**deploy 命令里执行的 `-b` 表示发布到哪个分支下;`-d` 表示将哪个文件夹内容发布到指定的分支下**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 启用静态服务运行项目：

```
npm install -g serve
serve -s build
```

## 此项目编译及打包发布：

```
npm run build
npm run deploy
```

## 项目结构：

```
XIOOLOO.GITHUB.IO
┏━━━━build
┃
┣━━━━node_modules
┃
┣━━━━scripts┏━━━build.js
┃           ┣━━━start.js
┃           ┗━━━test.js
┣━━━━public┏━━━index.html
┃          ┣━━━logo.png
┃          ┣━━━robots.txt
┃          ┣━━━manifest.json
┃          ┗━━━favicon.ico
┃
┣━━━━src┏━━━index.tsx
┃       ┣━━━index.css
┃       ┣━━━App.tsx
┃       ┣━━━App.css
┃       ┣━━━App.test.tsx
┃       ┣━━━logo.svg
┃       ┣━━━react-app-env.d.ts
┃       ┗━━━serviceWorker.ts
┃
┣━━━━_config.yml
┣━━━━.gitignore
┣━━━━package.json
┣━━━━package-lock.json
┣━━━━README.md
┗━━━━tsconfig.json
```
