import { LiveChart } from "../../components"

function Home() {
    return (
        <div>
            <h1>Home is here.</h1>
            <LiveChart symbol={'AAPL'} />
        </div>
    )
}

export default Home