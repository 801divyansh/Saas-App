"use client";

import Image from 'next/image'
import { Button } from './ui/button'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CTA = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push('/companions/new');
    }, 800); 
  };

  return (
    <section className="cta-section bg-card/50 backdrop-blur-md rounded-4xl p-6 shadow-md space-y-5 text-center">
      {/* Gradient Badge */}
      <div className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow">
        Start learning your way.
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        Build and Personalize Your Learning Companion
      </h2>

      {/* Description */}
      <p className="text-muted-foreground max-w-lg mx-auto">
        Pick a name, subject, voice & personality — and start learning through voice conversations that feel natural and fun.
      </p>

      {/* Image */}
      <div className="flex justify-center">
        <Image src="/images/cta.svg" alt="cta illustration" width={362} height={200} className="w-full max-w-md" />
      </div>

      {/* Button */}
      <Button
        onClick={handleClick}
        disabled={loading}
        className="mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl hover:brightness-110 transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Loading...
          </>
        ) : (
          <>
            <Image
              src="/icons/plus.svg"
              alt="plus"
              width={16}
              height={16}
              className="mr-1"
            />
            Build a New Companion
          </>
        )}
      </Button>
    </section>
  )
}

export default CTA
