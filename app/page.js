import Image from 'next/image'

export default function Home() {
  return (
    <p>
    {process.env.KEY}<br/>
    {process.env.DB}<br/>
    {process.env.USER}
    </p>
  )
}
