# demo-learn-dev
demo-learn-dev

# Gitflow Workflow

## Branches

- master
    - Hotfix

- develop
    - Feature
    - Release

![GitFlow](/files/gitFlow.png)

[source image gitFlow](https://nvie.com/posts/a-successful-git-branching-model/)

## Init gitflow develop branch

> git branch develop

> git push -u origin develop

This branch will contain the complete history of the project

# Creating a feature branch

Without the git-flow extensions
> git checkout develop
> git checkout -b feature_branch

When using the git-flow extension
> git flow feature start feature_branch

## Finishing a feature branch

Without the git-flow extensions:

> git checkout develop
> git merge feature_branch

Using the git-flow extensions:
> git flow feature finish feature_branch

# Release Branches

### Without the git-flow extensions:
> git checkout develop
> git checkout -b release/0.1.0

### When using the git-flow extensions:
> git flow release start 0.1.0
Switched to a new branch 'release/0.1.0'

Once the release is ready to ship, it will get merged it into master and develop

### Without the git-flow extensions:

> git checkout master
> git merge release/0.1.0

### Or with the git-flow extension:

> git flow release finish '0.1.0'

# Hotfix Branches

### Without the git-flow extensions:

> git checkout master
> git checkout -b hotfix_branch

### When using the git-flow extensions: 

> git flow hotfix start hotfix_branch

Similar to finishing a release branch, a hotfix branch gets merged into both master and develop

> git checkout master
> git merge hotfix_branch
> git checkout develop
> git merge hotfix_branch
> git branch -D hotfix_branch
> git flow hotfix finish hotfix_branch



[Git workflows](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)









