import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='cta-section'>
        <div className='cta-badge'> Start learning your way.</div>
        <h2 className='text-3xl font-bold' >Build and Personalize Learnig Companion</h2>
        <p>Pick a name, subject, voice, & personality - and start learning through voice conversation that feel natural and fun.</p>
        <Image src="/images/cta.svg" alt="cta" width={362} height={12} />
        <Button className='btn-primary'>
            <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
            <Link href="/companions/new">
                <p>Bulid a New Companion</p>
            </Link>
        </Button>
    </section>
  )
}

export default CTA
