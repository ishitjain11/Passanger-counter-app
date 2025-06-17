# Passanger-counter-app

A simple web application to count people entering a location (like a subway station). Perfect for tracking foot traffic or keeping count of visitors.

## Features

- **Increment Counter**: Click the red "Increment" button to add one person to the count
- **Save Entries**: Click the green "Save" button to save the current count and reset for a new counting session
- **Previous Entries**: View all your saved counts in a running list
- **Beautiful UI**: Features a subway station background with a clean, modern interface

## How to Use

1. **Count People**: Each time someone enters, click the "Increment" button
2. **Save Your Count**: When you're done counting for that session, click "Save" to record the number
3. **Start Fresh**: After saving, the counter resets to 0 for your next counting session
4. **View History**: All your previous counts are displayed at the bottom

## Files Included

- `index.html` - Main application structure
- `index.css` - Styling and layout
- `index.js` - Counter functionality
- `station.jpg` - Background image
- `server.js` - Web server (optional)
- `package.json` - Dependencies

## Running the App

### Option 1: Direct Browser Use (Quick Start)
The simplest way to run the app without any setup:

1. **Download all files** to your computer
2. **Open `index.html`** directly in any web browser (Chrome, Firefox, Safari, etc.)
3. **Start counting!** The app will work immediately

*Note: This method works great for local use but won't allow others to access your app over the internet.*

### Option 2: Web Server (Recommended for Development)

For a more professional setup that allows network access and better development experience:

#### Prerequisites
- **Node.js** installed on your computer ([Download here](https://nodejs.org/))
- **Terminal/Command Prompt** access

#### Step-by-Step Setup

1. **Download/Clone the project**
   ```bash
   # If using git
   git clone [your-repository-url]
   cd passenger-counter-app

   # OR download and extract the ZIP file, then navigate to the folder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   *This command reads `package.json` and installs Express.js, which powers the web server.*

3. **Start the server**
   ```bash
   node server.js
   ```
   *You should see: "Server running at http://0.0.0.0:5000"*

4. **Access your app**
   - **Local access**: Open `http://localhost:5000` in your browser
   - **Network access**: Others on your network can access it using your computer's IP address at port 5000

#### Troubleshooting
- **"npm not found"**: Install Node.js first
- **"Cannot find module"**: Run `npm install` to install dependencies
- **Port already in use**: Change the port number in `server.js` (line with `port = 5000`)
- **Can't access from other devices**: Make sure your firewall allows connections on port 5000

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Backend**: Express.js server (optional)
- **Port**: Runs on port 5000 when using the server
- **Browser Compatibility**: Works in all modern browsers

## Deployment

This app can be easily deployed on platforms like Replit, Netlify, or any static hosting service.

## Use Cases

- Counting visitors at events
- Tracking subway/train station traffic
- Monitoring foot traffic in stores
- General people counting applications

## Contributing

Feel free to fork this project and add your own features like:
- Data persistence
- Export functionality
- Multiple counter categories
- Time stamps for entries

---
