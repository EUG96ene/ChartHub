# 📱 Chatify - Chat App

Chatify is a realtime chat app built with Vite, React, TypeScript, Firebase, and other technologies. This chat app is purposefully made for the web, like a web chat app, but it also works on mobile devices.

## 🚀 Features

- 🗝 Sign in with Google (authentication)
- 👤 View your own profile, email, name, id, etc.
- 🗨 Create conversations (1-on-1 or group)
- 📬 Users can send:
  - 📁 Files
  - 🖼 Images
  - 📝 Text
- 🔗 Detect links and add an anchor tag to them
- 💬 Reply to messages, indicating what you're replying to (text, image, file, etc.)
- 📥 Drag and drop to upload files and images
- 🔔 Get notified of unseen messages
- 👀 See if someone has seen your message (via a small avatar moving down if seen)
- 😂 Send reactions to messages
- 😊 Send emojis through an emoji picker
- 👁 View reactions to each message
- 📸 View sent images and files
- 🔄 Change group picture and group name
- 🌓 Toggle between light mode and dark mode
- 🚮 Remove messages, with a note that says "message removed"
- 👑 Make someone an admin, kick someone out of the group, and add participants in the current active group again

## 🛠️ Main Technologies
- `React`
- `Firebase`
- `TypeScript`
- `Styled Components`
- `Vite`

## 📝 Process

I started by jotting down in my notebook what features I wanted. I often use WhatsApp Web, so I tried to draw inspiration from that.

I obviously started by setting up Firebase, then continued with authentication. Next, I set up routing, the home page, and the private route for it, then focused on the sidebar, since there's a lot happening there, and finally the chat page and its components.

Then it was the smaller details, like creating a drag and drop for images and files, adding an emoji picker, changing the group name, etc. I didn't have a design idea at first; I just built everything and came up with something later. By design, I mean the colors and the styling.

The most challenging part was figuring out how the data structure should be. One new thing I learned was indexing in Firebase. That was new to me and something I can take with me into the future.

## 🤔 How Can It Be Improved?

It would be amazing if users were able to send GIFs and stickers, just like on WhatsApp. Also, being able to send voice messages and videos to each other would greatly improve the project. Adding testing would be beneficial as well, something I definitely plan to do next time.

## 🐛 Current Bug

So far, I'm not really sure if there are any bugs. However, there might be some issues on the mobile version. I tested it out on my phone (iPhone 14 Pro Max), and so far it looks good there, but on smaller devices or Android phones, it might look a bit odd. I'm not sure from that side, but there might be some bugs to iron out.


<details>
<summary><h3> 🎥 - Demo Video </h3></summary>
<video src="https://github.com/mirayatech/Chatify/assets/71933266/c1695a42-8d74-4a00-b89c-e3b6adc4119d" controls="controls" style="max-width: 730px;">
</video>

<video src="https://github.com/mirayatech/Chatify/assets/71933266/f11d1d9b-2517-4a5c-81df-1711f4182da0" controls="controls">
</video>
  

</details>

<details>





</details>



