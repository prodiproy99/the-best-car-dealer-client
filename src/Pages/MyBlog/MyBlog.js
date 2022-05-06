import React from 'react';
import './MyBlog.css'

const MyBlog = () => {
    return (
        <div className='container'>
             <div className="row g-5 mt-4">
                 <h2 className='text-center'>My Blog</h2>
                 <div className="col-md-6 myblog">
                     <h3>a)Difference between javascript and nodejs?</h3>
                     <p><span>Ans: </span> JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
                 </div>
                 <div className="col-md-6 myblog">
                     <h3>b)When should you use nodejs and when should you use mongodb.</h3>
                     <p><span>Ans: </span> There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</p>
                 </div>
                 <div className="col-md-6 myblog">
                     <h3>c)Differences between sql and nosql databases?</h3>
                     <p><span>Ans: </span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                 </div>
             </div>
        </div>
    );
};

export default MyBlog;