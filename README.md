# StuddyBuddyHub

## Live Site

[StuddyBuddyHub](https://study-buddy-hub-4ba13.web.app/)

<div>
  <h1>Overview</h1>
  <p>This project is a comprehensive assignment management platform. It features a public homepage, assignment creation, filtering, display, and user-specific pages for submitted and pending assignments. It includes authentication with JWT, PDF previews, and theme customization, ensuring a secure, user-friendly experience for efficient assignment handling.</p>
</div>

## Features

- **Homepage:** Public page with navbar, banner section, feature section, FAQ section, and footer.
- **Create Assignment Page:** Private page for creating assignments with various details.
- **Assignments Page:** Public page displaying all assignments with filtering functionality.
- **My Submitted/Attempted Assignment Page:** Private page displaying user's submitted assignments.
- **Pending Assignments Page:** Private page displaying pending assignments submitted by other users.
- **Authentication:** Login and registration pages with form validation.
- **JWT Authentication:** Implemented JWT token for private routes.
- **Preview of PDF:** Show a preview of PDF files on the submitted assignments page.
- **Theme Customization:** Theme toggling button for changing between light and dark themes.

<div>
  <h2>Technologies</h2>
  <div>
    <img src="https://skillicons.dev/icons?i=html,css,javascript,react,tailwind" />
    <img src="https://skillicons.dev/icons?i=nodejs,express,firebase,mongodb" /><br>
 </div>
  <h1>Tools</h1>
  <img src="https://skillicons.dev/icons?i=vscode,github,git" />
</div>

## How to Clone and Run the Project

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later)

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/iamcharlie17/study-buddy-hub-client
    ```
2. **Navigate to the project directory:**
    ```bash
    cd study-buddy-hub-client
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables (replace with your actual values):
     ```plaintext
     REACT_APP_API_URL=your_api_url
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     REACT_APP_JWT_SECRET=your_jwt_secret
     ```
5. **Run the development server:**
    ```bash
    npm start
    ```

6. **Build for production:**
    ```bash
    npm run build
    ```
