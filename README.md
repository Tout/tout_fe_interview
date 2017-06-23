# Tout Frontend Interview Project

This is an open book take home test. There are no *right* or *wrong* answers. The goal is to get an understanding of how you solve the problem. Creativity is encouraged. We recommend focusing on your strengths and showing off your skills.

Use any libraries or tools you want. Modify and change any file in this project to fit your needs. To help you get started, the project is a blank page built with Webpack and Babel. Mocha and ESLint are available for testing.


## Task
> I need a page with six timers on it. The user should be able to see all six timers and the remaining time for each. Once a timer reaches zero, the user can click to restart the timer.

> We need a function on `window` that can be called to set/reset the timers and their durations. This will be tested via the Console in Chrome, Safari, and Firefox.

## Usage

### Part 1: Create a brand new repository

![New Repo](https://user-images.githubusercontent.com/348581/27461558-5065ead2-576f-11e7-83d7-6044c05f2440.png)

1. Open the new repository page: https://github.com/new
2. Name it "tout_fe_interview"
3. Select "Private"
4. Click "Create repository" button.

### Part 2: Import the sample project into your repo





1. On the homepage for your new repository, click the "Import Code" button

![Import Code](https://user-images.githubusercontent.com/348581/27461557-5065ea6e-576f-11e7-858e-6b44daa74d5d.png)

2. Enter the following URL in the "Your old repository's clone URL" field then click "Begin Import"

```
https://github.com/Tout/tout_fe_interview.git
```

![Clone URL](https://user-images.githubusercontent.com/348581/27461560-507b4256-576f-11e7-921c-da9af30f4014.png)

3. Wait 30 seconds
4. Go to your new repository

### Part 3: Clone your repo and start working

1. Clone your repo (Substitute your account name below)

```
git clone git@github.com:[YOUR_GITHUB_NAME_HERE]/tout_fe_interview.git
```

2. Build the code and start the server

```
cd tout_fe_interview
make
```

3. Commit your code and push

### Part 4: Share your repo with Tout

![Share Access](https://user-images.githubusercontent.com/348581/27461559-50687798-576f-11e7-891f-561e758d9cd6.png)

1. Click the "Settings" tab

2. Click on the "Collaborators" tab.

3. Add `ripter` as a collaborator


## Building
Build will run webpack, compiling the javascript and css files into the bundle.js loaded in index.html.
```
make build
```

## Finish
Once you are happy with the application create a pull request on Github.
