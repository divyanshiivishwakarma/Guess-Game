# Guess Game

An interactive number-guessing game developed using HTML, CSS, and JavaScript. The project implements random number generation, score tracking, and dynamic DOM manipulation to provide real-time feedback to the player.

## Live Website

[Play the Guess Game](https://divyanshiivishwakarma.github.io/Guess-Game/)

## Features

* Randomly generates a secret number
* Provides feedback when the guess is too high or too low
* Reduces the current score after every incorrect guess
* Changes the screen background to green when the correct number is guessed
* Displays the secret number after a correct guess
* Records the player's highest score
* Includes an **Again** button to restart the game

## Technologies Used

* HTML
* CSS
* JavaScript
* DOM manipulation
* GitHub Pages
* Google Analytics 4

## Google Analytics 4 Integration

Google Analytics 4 was integrated with the deployed Guess Game website to analyse website traffic, user engagement, browser usage, and automatically collected events.

The Google tag was added inside the `<head>` section of the `index.html` file. The installation was verified using the GA4 Realtime report.

### Analytics Overview

During the initial tracking period, the website recorded:

* **6 active users**
* **6 new users**
* **8 sessions**
* **30 page views**
* **98 total events**
* **3 minutes 31 seconds** average engagement time per active user
* **75% engagement rate**

### Traffic Acquisition

| Traffic Source | New Users |
| -------------- | --------- |
| Direct         | 5         |
| Referral       | 1         |

Most visitors arrived through direct traffic, indicating that sharing the website link was the main source of visitors.

### Events Tracked

| Event             | Event Count |
| ----------------- | ----------- |
| `page_view`       | 30          |
| `scroll`          | 30          |
| `user_engagement` | 24          |
| `session_start`   | 8           |
| `first_visit`     | 6           |

The page-view and scroll counts show that visitors opened the game several times and viewed most of the page content.

### Browser Usage

| Browser | Active Users | Percentage |
| ------- | ------------ | ---------- |
| Chrome  | 5            | 83.33%     |
| Safari  | 1            | 16.67%     |

Chrome was the most commonly used browser, while the game was also successfully accessed through Safari.

### Key Findings

* All six tracked visitors were new users.
* Six users generated eight sessions, indicating that some users visited more than once.
* The website received an average of five page views per user.
* Visitors spent an average of 3 minutes and 31 seconds actively using the website.
* Direct traffic was the main visitor source.
* Chrome accounted for most of the website traffic.

### Recommendations

* Continue testing the game on Chrome and Safari to maintain browser compatibility.
* Add custom GA4 events to track actions such as submitting a guess, winning the game, and restarting it.
* Collect data for a longer period and share the game through different platforms to compare traffic sources and returning users.


## Analytics Evidence

Supporting Google Analytics screenshots are available in the [`analytics/screenshots`](analytics/screenshots/) folder.

