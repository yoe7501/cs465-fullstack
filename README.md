CS 465 Module Eight Journal – Full Stack Project Reflection
Architecture
In this project, I used two types of frontend development. The Express HTML and JavaScript side was used for the customer-facing portion, providing a basic multi-page structure that was simpler and more server-driven. On the other hand, the admin side was built using Angular as a single-page application (SPA), which allowed for a more dynamic
and responsive experience without the need for constant full-page reloads. The SPA structure also supported reusable components and client-side routing, making it easier to manage and scale.

For the backend, we used a NoSQL MongoDB database because it offered flexibility in how we stored data. Since user and trip information could vary and change over time, the schema-less nature of MongoDB made development faster and more adaptable compared to a rigid SQL database.

Functionality
JSON played a major role in connecting the frontend and backend. Unlike JavaScript, which is a full programming language, JSON is simply a lightweight data format used for transmitting structured data. It allowed the frontend and backend to communicate easily by sending and receiving data in a format both sides could quickly understand and process.

Throughout the development process, I often refactored code, especially when building the admin side with Angular. Creating reusable UI components like forms and trip cards saved time and made the app easier to maintain. This modularity meant updates and new features could be added with minimal changes to existing code.

Testing
Testing involved making sure all API endpoints were functioning correctly. I used manual testing through tools like Postman and the browser’s built-in console to send GET, POST, PUT, and DELETE requests and verify responses. Security added extra complexity because protected routes needed proper authentication headers. 
I learned how important it was to test both unauthenticated and authenticated behaviors to make sure endpoints were secure and functioning as intended.

Understanding endpoints meant knowing how the client makes requests to specific URLs and receives responses from the server, while security involved setting up authentication to protect sensitive data and restrict access where necessary.

Reflection
This course has helped me build a solid understanding of full stack development, and it’s given me hands-on experience working with frameworks and tools that are widely used in the industry. I've developed skills in frontend development with Angular, backend development with Express, and database management with MongoDB.
I also gained experience securing web applications, which is critical in real-world projects.

Overall, I feel much more confident in my ability to create scalable, secure, and efficient web applications, and this project has helped me become a stronger candidate as I move forward in my career.
