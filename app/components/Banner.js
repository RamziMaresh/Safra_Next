import Link from "next/link"



const Banner = () => {

  return (
    <div>
      <h1>About Us</h1>
      <p>We are a small team of developers.</p>
      <Link href="/About">about</Link>
    </div>
  )
}

export default Banner
