# Contributing to TwitLess

## Git Workflow

Prior to being merged with `main`, all PRs and checked out branches must merge with `develop`. The `develop` branch will then merge with `main` for any and all updates that add several features or functionality.

Should you choose to work on a feature, check out to a branch for that feature. Branch name should follow the following template: `issue#/brief-description`. For example, for the branch setting up this repository, it was labeled `1/reposetup`. If it's coming straight from trello, reference as `sprint#-taskname`, although ideally one would make a corresponding GitHub issue.

## Trello

The [TwitLess Trello board](https://trello.com/b/KmTS2j0a) details will be announced as soon as I figure out the best way to do that...

If you'd like access to the Trello board, contact me `@Mobkinz78` or on [Discord](https://discord.gg/Gg9eHrE). No threshold for this at the moment, but it would be nice to see at least one contribution or something. You can find a list of public issues, bugs, low-priority tasks, intro tasks, etc. on the [issues page](https://github.com/Dendrobyte/TwitLess/issues).

## Pull Requests

Please make all changes on a forked version of this repository and make PRs from that forked repository _while maintaining the branch naming scheme._ Always ask to merge with `develop`. When making a PR, please list all functionality that should be tested by an administrator of the repository and provide screenshots (of code, tests, front-end appearances, etc). See [this PR](link_tbd) [Link TBD] for an example.

Lastly, make sure you give yourself some credit and add yourself to the below list of contributors

### Development

The TwitLess front-end is written in AngularJS. While I, myself, am more used (and partial) to React, the project is a learning endeavor. Please do not write things that don't follow Angular conventions. 

### Design

The Adobe XD document has been appended on to this repository in the [prototyping folder](/prototyping/prototype/xd_files). You are free to make changes and push those changes, but please:

1. Create a backup of the XD document and rename it with the date
1. Export a PDF and place it into the `prototype` folder with the following name scheme: `TITLE OF EDIT - v# (Month DAY# YEAR#)` (where `v#` is `+1` from the most recent PDF)

You're free to use images as long as you own them or they are free use. If you make your own images, please be aware of the [LICENSE](/LICENSE).

## Current "Team"

- Mark (@Dendrobyte)[https://twitter.com/Mobkinz78]: Current designer and developer     
- Tom (@bovrilstan)[https://twitter.com/bovrilstan]: Helping with QA test and provide feedback

### Contributors

_This could be you! If you've happened upon this project, feel free to reach out to me if you want to get involved now by contacting me on Twitter, @Mobkinz78_
