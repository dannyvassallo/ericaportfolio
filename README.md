#Setting Up Your Portfolio
--------------------------
###Step 1

Open 'Terminal'

###Step 2

Clone this Repository. You can download the zip from here, use the github ui, or you can do it from terminal.

##### Cloning From Terminal:

type cd and then drag and drop your desktop folder into terminal. It should look like this when you're done:
```terminal
cd /Users/danvassallo/Desktop
```
Hit enter. Then type this and let it do it's thing:
```terminal
git clone https://github.com/dannyvassallo/ericaportfolio.git
```
When its done type:
```terminal
cd ericaportfolio
```
enter the directory.

###Step 3

Start Middleman server:
```
middleman -s
```
Start it on Vagrant:
```
bundle exec middleman s -p 3000 --force-polling --verbose
```

and that's it. If you're on windows follow the instructions on my rails-middleman-vagrant repository [here](https://github.com/dannyvassallo/rails-middleman-vagrant).

###Step 4

To see it in the browser on mac visit:
```
localhost:4567
```

To see it in the browser on windows visit:
```
localhost:3000
```