
const DisplayPosts = (props) => {
    return ( 
        <div>
        <h3>Feed</h3>
            <table>
                <tbody>
                {props.parentPost.map((post, index) => {
                    return (
                        <tr key = {index}>
                            <td>{post.firstName}</td>
                            <td>{post.lastName}</td>
                            <td>{post.post}</td>   
                            {/* thumbs up and down buttons go here */}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayPosts;