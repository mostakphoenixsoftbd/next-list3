import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter} from 'next/router'
const NotFound = () => {

    const router = useRouter();

    useEffect(() => {

        // console.log('use effect run')
        setTimeout(() => {

            // router.go(1) forward page to redirect
            // router.go(-1) means previous page to redirect
router.push('/');
        }, 3000)

    }, [])

    return ( 

<div className="not-found">

<h1>Oppps...</h1>
<h2>This page can not be found</h2>
<p>Go back to the <Link href="/"><a>HomePage</a></Link>></p>


</div>

        
     );
}
 
export default NotFound;