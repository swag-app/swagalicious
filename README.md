# group-project

### SETUP
- one person runs create-react-app on their machine and sets up a repo
- gives access to team members in security settings
- other team members clone, don't fork

### STEPS FOR PUSHING A BRANCH TO MAIN
- creating a new branch
    - <code>git branch <branch name></code>
- switching to different branches
    - <code>git checkout <branch name></code>
- deleting an old branch
    - <code> git branch -d <branch name></code>
- Order for merging/working on different branch
    - create a new branch on your machine
    - code! commit and push to your branch as often as you want
    - when finished with feature, create a pull request on github
    - ask a teammate to review request and merge code
    - resolve conflicts if necessary
    - merge branch and then delete
    - notify teammembers so they can use <code>git pull</code> on their `main` branch