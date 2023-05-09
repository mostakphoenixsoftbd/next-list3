import Link from 'next//link'
import Image from 'next/image'

const Navbar = () => {
    return ( 

        <nav>
<div className="logo">
    {/* <h1>NINJA LIST</h1> */}
    <Image width={100} height={50} src="/images.jpeg" />
    {/* <img width={50} height={50} src="/images.jpeg" /> */}
</div>
<Link href="/" ><a><h3>Home</h3></a></Link>
<Link href="/about"><a><h3>About</h3></a></Link>
<Link href="/subfolder"><a><h3>Ninja Listing</h3></a></Link>
</nav>






     );
}
 
export default Navbar;