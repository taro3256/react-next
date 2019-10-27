import Link from 'next/link'
import Layout from '../components/Layout';

function Index() {
    return (
        <div>
            <Layout header="Next" title="Top page.">
                <p>Welcome to next.js!</p>
                <hr />
                <Link href="./other">
                    <button>go to Other &gt;&gt;</button>
                </Link>
            </Layout>
        </div>
    )
}

export default Index