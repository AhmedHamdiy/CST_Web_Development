import "./navbar.css"
import axios from 'axios';

const Navbar = ({posts,setPosts}) => {

    const addPost = async () => {
        const new_post = {
            id: props.posts.length + 1,
            title: "New Post",
            body: "New Post Body"
        }
        try {
            // TODO : Add post request using axios to https://jsonplaceholder.typicode.com/posts and set the body to new_post
            // TODO : Add the new post to the posts array using setPosts that is passed in props 
            // and set the new array of setPosts to be the posts array and the new post(hint : res.data,...props.posts)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="navbar">
            
            <div id="logo" >
                <img src="https://www.sportcal.com/wp-content/uploads/sites/32/2022/06/main62a8569966a16.jpg" alt="W3Schools.com" width="100" height="50"/>
            </div>
            
            <ul id="right-content">
                <button onClick={addPost} className="add-post">
                    Add Post
                </button>
            </ul>
    
        </nav>
    );
}

export default Navbar;