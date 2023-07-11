#How To Set Up a React Project with Vite

#Prerequisites
1.You need to install Node.js version 12.2.0 or higher
2.Familiarity with HTML, CSS, and modern JavaScript. It also helps to know modern JS used in React.
3.A foundational knowledge of React.


# Step 1:Creating a vite Project
$ npm create vite

This command will run the Vite executable from the remote npm repository. It will configure the necessary tools to scaffold a React local development environment. Finally, it will open a command-line menu for project settings and language type.

After the script finishes, you will be prompted to enter a project name:
Type your project name.ex. your-projectname
After entering your project name, Vite will prompt you to select a framework:

Vite allows you to bootstrap a range of project types, not just React. Currently, it supports React, Preact, Vue, Lit, Svelte, and vanilla JavaScript projects.

Use your keyboard arrow key to select React.

After selecting the React framework, Vite will prompt you to choose the language type. You can use JavaScript or TypeScript to work on your project.

Use your arrow keys to select JavaScript:

After setting up the framework, you will see an output that the project has been scaffolded. Vite will then instruct you to install dependencies using npm:

Navigate to your project folder as directed:


$ cd your-projectname

Then, use the yarn command to install the dependencies of the project:

$ npm install

After that all the necessary dependencies will be installed

#Step 2 — Starting the Development Server

In this step, you will start the development server to verify that everything is working.

From inside the you-projectname folder, use the following command to run the development server:

$npm run dev

This command is an alias of the vite command. It will run your project in development mode.

Next, open your browser and visit http://localhost:5173/. The default React project will be running on port 5173:

Best of Luck
