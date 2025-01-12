"ngrx-test"

<details>
<summary>
init repo local/remote
</summary>

```js

// open cmd
Windows + R

//get buffer history
Windows + V

// get disk
d:

// look around ls/dir
dir

// add folder
mkdir ngrx-test

// get directory
cd ngrx-test

// add README.md
echo "# ngrx-test" >> README.md

// open folder in vscode
code .

// add git
git init

git al
git cm "init: repo locally"
git br -M master
git remote add origin https://github.com/viktishchenko/ngrx-test.git
git remote -v

// add remote folder
git push --set-upstream origin master

git al
git commit --amend --no-edit
git push -f

```

</details>

<details>
<summary>init auth-app</summary>

```js
// info
git br
git co -b auth

// init w/o install
ngrx-test> ng new auth-app --directory=./ --skip-install --skip-git --skip-tests

// push it
git al
git cm "init: auth app"
git push --set-upstream origin auth

```

</details>

<details>
<summary>backend server</summary>

```js

npm i body-parser
npm i express
npm i ts-node


// run server
npm run server

// run app
npm run start

```

</details>

<details>
<summary>auth</summary>

```js

ng g c auth
ng g c auth/login
ng g m auth
ng g i auth/model/user model --type=model
ng g s auth/auth

ng add @angular/material

npm i @ngrx/operators

```

</details>
