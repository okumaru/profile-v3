import Link from 'next/link'

export default function Nav () {
  return <div className="flex gap-4">
    <Link href="/about" className='font-medium hover:underline underline-offset-2'>
      About
    </Link>
    <Link href="/project" className='font-medium hover:underline underline-offset-2'>
      Project
    </Link>
    <Link href="/blog" className='font-medium hover:underline underline-offset-2'>
      Blog
    </Link>
  </div>
}