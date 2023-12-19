# GitHub User Search App

## Project Overview

This task is focused on developing a GitHub user search functionality. The core task involves implementing a user search feature by username, with the search URL already provided in the `page.tsx` file in the `app/(home)` directory. Redux will be used to manage and store the search history, along with an option to clear this history.

## Getting Started

### Running the Development Server

1. **Start the Server:** Begin by running the development server.

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Viewing the App:** Access the application by navigating to [http://localhost:3000](http://localhost:3000) in your web browser. You should see the application's landing page.

3. **Editing the App:** Begin development by editing the `app/(routes)/(home)/page.tsx` and `app/(routes)/history/page.tsx` files. The page automatically updates as you make changes.

## Task Details

### Implementation Requirements

- **GitHub User Search**: Implement a feature to search for GitHub users by username. The URL for this search functionality is located in the `app/(routes)/(home)/page.tsx` file.
- **Redux Integration**: Utilize Redux for managing and storing the search history.
- **Search History Display**: Implement a feature to show search history. The URL for this is located in the `app/(routes)/history/page.tsx` file.
- **Search History Management**: Include an option within above history UI to clear the search history.
