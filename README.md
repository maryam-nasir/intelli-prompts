# IntelliPrompts

IntelliPrompts is a personal project built using Next.js which allows users to discover AI prompts shared by the community and to create their own prompts to share with the world and to save for later use. Access [here](https://intelli-prompts-df4d1r1lh-maryam-nasirs-projects.vercel.app/).


## Tech Stack:
- Next.js
- Tailwind CSS
- MongoDB


## Main Features:

- **Discover AI Prompts**: Users can view the prompts created by others on the main page.

- **Create, Update and Delete Prompts**: Authenticated users can create their own prompts, edit them and delete them as well.

- **View Profile**: Each user has their own profile which they can access by clicking on the user icon at the bottom right of the page. They can also view the profile of other users by clicking them on their avatars.

- **Search Prompts**: Prompts can be searched by tags, username or even a portion of the prompt.

- **Copy to Clipboard**: A handy "Copy to Clipboard" functionality is available to allow users to copy their favorite prompts and paste right into the AI tool.

- **Google Authentication**: Google authentication using Next-Auth is implemented, ensuring a trustworthy and seamless login experience.


## Getting Started

Follow these steps to set up the project locally on your machine.

**Prerequisites**
Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en)

**Clone the Repository**
```
git clone https://github.com/maryam-nasir/intelli-prompts.git
cd intelli-prompts
```

**Installation**
Install the project dependencies using npm:

```
npm install
```

**Set Up Environment Variables**
Create a `.env` file at the root of the project and copy the following content:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

Replace the placeholder values with your actual credentials. You can get these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com) for GOOGLE_ID and GOOGLE_CLIENT_SECRET, [Cryptpool](https://www.cryptool.org/en/cto/openssl) for NEXTAUTH_SECRET, and [MongoDB](https://www.mongodb.com/) for MONGODB_URI. 

**Running the Project**
Run:
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser to view the project.


## Access the Deployed version on Vercel

The app is deployed on Vercel and can be accessed here: [IntelliPrompts](https://intelli-prompts-df4d1r1lh-maryam-nasirs-projects.vercel.app/).
