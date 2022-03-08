
const post = (props) => {
    return ( 
    <tr>
        <td>{props.parentPost.name}</td>
        <td>{props.parentPost.post}</td>   
        <td><button type='react'>Like</button></td>
        <td><button type='react'>Disike</button></td>
    </tr>
     );
}
 
export default post;
