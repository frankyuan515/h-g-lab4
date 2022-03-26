# h-g-lab4
# Lab 4 
About the 5th requirement of the Lab 4: <mark>You should be able to deploy to Heroku from a different branch from the connected GitHub repository</mark>, which can not reflect in the code. but must work with Heroku personal page and fixed GitHub repository. The solution as follow:
## Solution:
I have two branch in the repository, which are master and dev
```bash
git checkout -b dev
git push origin dev
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'dev' on GitHub by visiting:
remote:      https://github.com/frankyuan515/h-g-lab4/pull/new/dev
remote: 
To https://github.com/frankyuan515/h-g-lab4.git
 * [new branch]      dev -> dev
```
```bash
git checkhout master
git add .
git commit -m "index page changed"
git push origin master
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 422 bytes | 211.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/frankyuan515/h-g-lab4.git
   cc86cdf..b731ddb  master -> master
```
After pushing two branches with different content of index.html to the repository. Let us login to the Heroku.com and <mark>choose a branch to deploy</mark> in the "Automatic deploys" or manually choose a branch to deploy and view the deployed app in the "Manual Deploy" of Heroku project with fixed name "Heroku-github-lab4-gy".
### To check : <https://heroku-github-lab4-gy.herokuapp.com/>
The different web contents of Heroku app will be displayed depends on which branch I deployed. 
