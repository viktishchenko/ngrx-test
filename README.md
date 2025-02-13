# Angular-ngrx-GettingStarted

Materials for NgRx course.

`APM-Demo0`: The starter files for this course. **Use this to code along with the course**.

`APM-Demo1`: Completed files after the _First Look at NgRx_ module. It demonstrates a very simple NgRx example.

`APM-Demo2`: Completed files after the _Strongly Typing Actions with Action Creators_ module. It refactors the simple example to include developer tooling support and strong typing.

`APM-Demo3`: Completed files after the _Working with Effects_ module. It adds an effect to retrieve data via http. NOTE: Once we move the data retrieval to actions and the store, the create, update, and delete operations no longer work. These features are implemented with the store in the next demo.

`APM-Demo4`: Completed files after the _Performing Update Operations_ module. It adds the code needed for create, update, and delete operations via http.

`APM-Demo5`: Completed files after the _Architectural Considerations_ module. It implements the container/presentational component pattern and the OnPush change detection strategy.

NOTE:

- June 30, 2020: This code was modified to Angular version 9 and NgRx version 9. See the CHANGELOG.md file for details.

<details>
<summary>
init branch
</summary>

```js

// clone repo
Ctrl + Shift + p => clone git@github.com:DeborahK/Angular-NgRx-GettingStarted.git

//  add branch
git br -M ang-ngrx-kurata
git al
git cm "init: ngrx.kurata"
git remote set-url origin  git@github.com:viktishchenko/ngrx-test.git

// check
git remote -v

// add remote branch
git push --set-upstream origin ang-ngrx-kurata


// readme.force update
git al
git commit --amend --no-edit
git push -f

// https://stackblitz.com/@DeborahK

// github change branch name
git br
git br -m ang-ngrx-kurata ang-ngrx-deborahk
git push origin :ang-ngrx-kurata
git push --set-upstream origin ang-ngrx-deborahk

```

</details>
