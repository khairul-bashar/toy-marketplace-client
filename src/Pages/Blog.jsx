import useTitle from "../Hooks/UseHooks";

const Blog = () => {
    useTitle('Blog')
    return (
      <div>
        <h1 className="text-center block mx-auto text-3xl font-bold my-5 ">
          Question And Answer
        </h1>
        <div>
          <hr />
          <div className="text-left border-2 p-3 shadow-md rounded m-3 bg-red-50">
            <h1 className="text-2xl font-semibold my-3">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p className="font-semibold">
              Access Token: An access token is like a special pass that you get
              when you log in or give permission to an app. It allows you to
              access specific things like your account or information. You use
              this token whenever you want to get or do something on a website
              or app.
            </p>
            <p className="font-semibold">
              Refresh Token: A refresh token is a special code that you get
              along with the access token. It's like a backup key that can help
              you get a new access token if the old one expires. It's usually
              longer-lasting than the access token.
            </p>
          </div>
        </div>

        <div>
          <hr />
          <div className="text-left border-2 p-3 shadow-md rounded m-3 bg-red-50">
            <h1 className="text-2xl font-semibold my-3">
              Compare SQL and NoSQL databases?
            </h1>
            <p className="font-semibold">
              SQL Database: Uses tables with a fixed structure to store data.
              Ensures data consistency and enforces a predefined schema. Good
              for applications with complex queries, transactions, and
              structured data integrity.
            </p>
            <p className="font-semibold">
              NoSQL Database: Offers flexibility in storing unstructured or
              semi-structured data. Does not enforce a fixed schema, allowing
              for easy scalability and handling of changing data. Suitable for
              applications with large volumes of rapidly changing data, like
              real-time analytics or social media.
            </p>
          </div>
        </div>

        <div>
          <hr />
          <div className="text-left border-2 p-3 shadow-md rounded m-3 bg-red-50">
            <h1 className="text-2xl font-semibold my-3">
              What is express js? What is Nest JS ?
            </h1>
            <p className="font-semibold">
              Express.js: Express.js is a lightweight and flexible web
              application framework for Node.js. It provides a set of features
              and utilities for creating web servers and handling HTTP requests
              and responses. Express.js allows you to define routes, handle
              middleware functions, and perform tasks like data parsing, session
              management, and template rendering.
            </p>
            <p className="font-semibold">
              Nest.js:Nest.js is a powerful, scalable, and opinionated framework
              for building server-side applications with Node.js and TypeScript.
              It is built on top of Express.js and enhances it with additional
              features and structure inspired by Angular. Nest.js follows a
              modular architecture, promoting the use of decorators, dependency
              injection, and TypeScript decorators for building scalable and
              maintainable applications.
            </p>
          </div>
        </div>

        <div>
          <hr />
          <div className="text-left border-2 p-3 shadow-md rounded m-3 bg-red-50 ">
            <h1 className="text-2xl font-semibold my-3">
              What is MongoDB aggregate and how does it work ?
            </h1>
            <p className="font-semibold">
              MongoDB's aggregate is a powerful feature that allows you to
              perform advanced data analysis and manipulation operations on your
              MongoDB collections. Here's a simple and easy explanation of how
              it works: Aggregate: In MongoDB, the aggregate operation is used
              to process and transform data within a collection. It takes an
              array of stages as input, where each stage represents a specific
              operation or transformation.
            </p>
          </div>
        </div>
      </div>
      
    );
};

export default Blog;