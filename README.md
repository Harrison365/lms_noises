# LMS Noises

Hello. This is a repo to get your LMS helpdesk playing a noise when you have pending nc-helps.

## How to use

1. Clone this repo

2. Run `npm install`

3. Run `node noiseServer.js`

4. Open the LMS and go to your seminar group's helpdesk

5. Open the browser console (using `inspect` or `Cmd + Option + J`) and run the following code:

```javascript
var pendingHelpdeskList = document.querySelector(
  'ul[aria-label="Pending helpdesks"]'
);
for (let i = 0; i < 1000; i++) {
  setTimeout(() => {
    document.querySelector(".nc-interactive-ctaButton").click(); // refresh helpdesk list
    console.log(`check ${i + 1}`); // to show script is running
    var listContents = pendingHelpdeskList.getElementsByTagName("li");
    if (listContents.length > 0) {
      new Audio("http://localhost:8080/mp3").play();
    }
  }, i * 30000);
}
```

6. You should now be able to close your console and hear a noise when you have pending helpdesks. However, you will need to keep the tab open so separate the tab into a new window if you need to do other things.

<sub>note: the noise will repeat every 30 seconds until the helpdesk is taken (you can play with the script above to change the interval or mute your tab once you've got the message).

## Changing the sound

The default sound is a snooker noise. If you'd like to change the sound, there are 3 available and simply changing the file path in noiseServer.js on line 4 should do it. You can also add your own mp3 files to the repo and use those.

<sub>note: changing the server will require you to stop it and start it again.
