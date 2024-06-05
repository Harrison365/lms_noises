# LMS Noises

Hello. This is a repo to get your LMS helpdesk playing a noise when you have pending nc-helps.

## How to use

1. Clone this repo

2. Run `npm install`

3. Run `node noiseServer.js`

4. Open the LMS and go to your seminar group's helpdesk

5. Open the browser console (Inspect or `Cmd + Option + J`) and run the following code:

```javascript
for (let i = 0; i < 5000; i++) {
  setTimeout(() => {
    var pendingHelpdeskList = document.querySelector(
      'ul[aria-label="Pending helpdesks"]'
    );
    if (i % 10 === 0) {
      document.querySelector(".nc-interactive-ctaButton").click(); // refresh helpdesk list
    }
    console.log(`check ${i + 1}`); // to show script is running
    var listContents = pendingHelpdeskList.getElementsByTagName("li");
    if (listContents.length > 0 && i % 5 === 0) {
      new Audio("http://localhost:8080/mp3").play();
    }
  }, i * 5000);
}
```

6. You should now be able to close your console and hear a noise when you have pending helpdesks.

<sub><sup>note: the noise will repeat every 25 seconds until the helpdesk is taken (you can play with the script above to change the interval)</sup></sub>

## Changing the sound

The default sound is a snooker noise. If you'd like to change the sound, there are 3 available and simply changing the file path in noiseServer.js on line 4 should do it. You can also add your own mp3 files to the repo and use those.

<sub><sup>note: changing the server will require you to stop it and start it again.
