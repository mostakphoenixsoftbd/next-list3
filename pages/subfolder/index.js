export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
console.log(data);

    return {
        props: { subfolder: data}
    }

}

const subfolder = ({subfolder}) => {
    return ( 

        <div>

<h1>All User List from API Json Placeholder</h1>
{subfolder.map(ninja => {
    <div key={ninja.id}>
        <a>
            <h3>{ ninja.username }</h3>
        </a>




    </div>
})}

        </div>



     );
}
 
export default subfolder;