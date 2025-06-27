import CompanionForm from '@/components/CompanionForm';
import { newCompanionPermissios } from '@/lib/actions/companion.actions';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  const canCreateCompanion = await newCompanionPermissios();

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 pb-24 pt-16">
      {canCreateCompanion ? (
        <article className="w-full max-w-3xl flex flex-col gap-6 bg-card/50 border border-border rounded-2xl p-6 shadow-md backdrop-blur-md">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Companion Builder
          </h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="w-full max-w-xl flex flex-col items-center text-center gap-6 bg-card/50 border border-border rounded-2xl p-8 shadow-md backdrop-blur-md">
          <Image
            src="/images/limit.svg"
            alt="Companion limit reached"
            width={360}
            height={230}
            className="mx-auto"
          />
          <div className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow">
            Upgrade your plan
          </div>
          <h1 className="text-2xl font-bold text-foreground">You've reached your limit</h1>
          <p className="text-muted-foreground text-sm max-w-sm">
            You've reached your companion limit. Upgrade your plan to unlock more companion slots and premium features.
          </p>
          <Link
            href="/subscription"
            className="inline-flex justify-center px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:brightness-110 transition"
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
