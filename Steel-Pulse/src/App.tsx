import Banner from "./components/Banner/Banner";
import Link from "./components/Link/Link";

function App() {
  return (
    <>
      <Banner src="./banner.png" alt="Banner"/>;
      <Link href="/" target="_blank">Link</Link>
    </>
  )
}

export default App;