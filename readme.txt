Version 1 (I still don't know version naming schema)

About: 
This is an extension I whipped together pretty quickly based on the nightmode enforcer extension I'm working on.  It is not endorsed by raysfire and is entirely unofficial.

The content/background interaction method still feels kind of janky and I hope to make it feel like it's less strung together
with duct tape and chewing gum as time goes on.

Currently all this extension does is play Raysfire's livestream if he's online.
it also gives an option to play the most recent video, but doesn't show any of the channels that are being hosted if the streamer
is offline.  
For the most part, this extension's use cases are limited to checking if the stream is online without leaving your current tab/navigating to twitch, and having a stream on in the background if you're doing the dishes or studying on a different monitor or something like that.

Installation:  
To install this extension in chrome or brave, go to chrome://extensions (or brave://extensions); you will need to enable developer mode, which can be done by clicking on the tickbox on the upper right of the browser window.  Once you download the extension folder, select the "Load Unpacked" button on the top lefthand corner of the page and navigate to the extension folder in your file browser.  Select the folder itself; no need to navigate to a subfolder or any of the files.  From there, you should be able to simply click the extension, and it will load the stream.  It usually takes around 3 seconds in my browser.

Advanced:
For the time being, if you want to customize the extension but don't really know programming, if you want to change which twitch streamer the extension plays on click, edit the popup.html's iframe data; you can find a streamer's embedding link in the embed button in the share submenu.  The share button is on the lower mid-righthand side of the page, just below the video player and beside chat.

Known issues:
	Pressing the full screen button doesn't seem to do anything to expand the stream beyond the extension window.
	Pressing the clip button will launch a new about: blank tab and also close the stream, so you probably don't want to do that.
	Clicking off of the extension within chrome/brave will close the tab.
	There's some cookie setting conflict/it will show an error with the extension on the extensions page, but largely that does not affect functionality, as far as I can tell.


Attributions:  Most of the code in this extension is based on two videos from a tutorial series by Coding Train on youtube; the links are enclosed below.
https://www.youtube.com/watch?v=ew9ut7ixIlI
https://www.youtube.com/watch?v=YQnRSa8MGwM

The raysfire logo was redrawn by me, based off of his flame logo.