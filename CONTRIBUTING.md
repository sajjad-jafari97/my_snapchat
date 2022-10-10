# Contributing to the project

If you want to participate as a collaborator, you have to follow few simple rules:

### Commit names

All commit should start with the format

`[type] - [explanation]`

`[type]` can be `add`, `chg`, `fix` or `del`, depending on the commit goal

`add` if a file, class, function, or functionality has been added

`fix` for a commit fixing a bug or related to error management

`del` for a deletion of outdated or placeholder file, class or function

and finally
`chg` for generic usage, to use with parcimony as you should prefer many detailled commits for each little change to big "rework" commits where half the project is dommed and rebuilt

### Merging

There are several branches in this project.

You have to work on your own branch, and merge from/to the development branch as often as possible so everyone can work on the most up-to-date version possible

Here are commands for each basic git operation:

#### Creating a branch

To start, you have to create a branch to your name
`git checkout -b [name]`
`git push`

#### Changing branch

To go to an already created branch
`git checkout [branch]`

#### Pushing commits on a branch

`git push`

#### Updating local version of a branch

Once you're on a branch, you might want to pull the commits other have pushed to the repository on your local version:
`git pull`

#### Merging two branches

:warning: A merge does not mean two branches will be synced, only the target branch will be updated, receiving the commits it doesn't have yet :warning:

You should first checkout to the "target" branch
`git checkout [branch]`

Then, you have to chose the branch you want to merge commits from
`git merge [source branch]`

#### Full update, for this very project

`git pull`
pulling first to be sure you are up-to-date

`git push`
pushing your branch to update your branch on the repo

`git merge dev`
merging the current dev version to your version, here you might encounter conflicts you can fix on your own branch

`git checkout dev`
switching to the dev version

`git pull`
updating local version of `dev` branch

`git merge [your branch]`
merging your commits on the dev branch

`git push`
pulling the updated version of `dev`

`git checkout [your branch]`
going back to your branch, so you can continue to work on the newly merged and updated branch
