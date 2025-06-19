"use client";

import { cn, configureAssistant, getSubjectColor } from '@/lib/utils'
import { vapi } from '@/lib/vapi.sdk';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import soundwaves from '@/constants/soundwaves.json'
import { addToSessionHistory } from '@/lib/actions/companion.actions';

enum CallStatus {
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
}

const CompanionComponent = ({ companionId, subject, topic, name, userName, userImage, style, voice}: CompanionComponentProps) => {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  // Check microphone permission on component mount
  useEffect(() => {
    const checkMicrophonePermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(track => track.stop());
        setError(null);
      } catch (err) {
        console.error('Microphone permission error:', err);
        setError('Microphone permission is required. Please allow microphone access and refresh the page.');
      }
    };

    checkMicrophonePermission();
  }, []);

  useEffect(() => {
    if(lottieRef.current) {
      if(isSpeaking) {
        lottieRef.current?.play()
      } else {
        lottieRef.current?.stop()
      }
    }
  },[isSpeaking, lottieRef])

  useEffect(() => {
    const onCallStart = () => {
      console.log('Call started');
      setCallStatus(CallStatus.ACTIVE);
      setError(null);
    };
    
    const onCallEnd = () => {
      console.log('Call ended');
      setCallStatus(CallStatus.FINISHED);
      addToSessionHistory(companionId);
    };

    const onMessage = (message: Message) => {
      if(message.type === 'transcript' && message.transcriptType === 'final') {
        const newMessage = {role: message.role, content: message.transcript}
        setMessages((prev) => [newMessage, ...prev])
      }
    }

    const onError = (error: Error) => {
      console.error('Vapi Error:', error);
      setCallStatus(CallStatus.ERROR);
      setError('Connection error. Please check your microphone permissions and try again.');
    };
    
    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);

    // Add event listeners
    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('message', onMessage);
    vapi.on('error', onError);
    vapi.on('speech-start', onSpeechStart);
    vapi.on('speech-end', onSpeechEnd);

    return () => {
      // Clean up event listeners
      vapi.off('call-start', onCallStart);
      vapi.off('call-end', onCallEnd);
      vapi.off('message', onMessage);
      vapi.off('error', onError);
      vapi.off('speech-start', onSpeechStart);
      vapi.off('speech-end', onSpeechEnd);
    }
  },[companionId]);

  const toggleMicrophone = () => {
    try {
      const isMuted = vapi.isMuted();
      vapi.setMuted(!isMuted);
      setIsMuted(!isMuted);
    } catch (err) {
      console.error('Error toggling microphone:', err);
    }
  }
  
  const handleCall = async () => {
    if (error) {
      alert('Please allow microphone permission and refresh the page.');
      return;
    }

    try {
      setCallStatus(CallStatus.CONNECTING);
      setError(null);

      const assistantOverride = {
        variableValues: { subject, topic, style},
        clientMessages: ["transcript"],
        serverMessages: [],
      }

      //@ts-expect-error
      await vapi.start(configureAssistant(voice, style), assistantOverride);
    } catch (err) {
      console.error('Error starting call:', err);
      setCallStatus(CallStatus.ERROR);
      setError('Failed to start the call. Please try again.');
    }
  }

  const handleDisconnect = async () => {
    try {
      setCallStatus(CallStatus.FINISHED);
      await vapi.stop();
    } catch (err) {
      console.error('Error stopping call:', err);
    }
  }

  // Show error message
  if (error) {
    return (
      <section className='flex flex-col h-[70vh] items-center justify-center'>
        <div className='text-center p-6 bg-red-50 border border-red-200 rounded-lg max-w-md'>
          <p className='text-red-600 font-medium mb-2'>Connection Error</p>
          <p className='text-sm text-gray-600 mb-4'>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90'
          >
            Refresh Page
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className='flex flex-col h-[70vh]'>
      <section className='flex gap-8 max-sm:flex-col'>
        <div className='companion-section'>
            <div className='companion-avatar' style={{backgroundColor: getSubjectColor(subject)}}>
                <div className={
                  cn(
                    'absolute transition-opacity duration-1000' , callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-100' : 'opacity-0', callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse')
                }>
                  <Image src={`/icons/${subject}.svg`} alt={subject} width={150} height={150} className='max-sm:w-fit' />
                </div>
                <div className={cn('absolute transition-opacity duration-1000' , callStatus === CallStatus.ACTIVE ? 'opacity-100': 'opacity-0')}>
                  <Lottie 
                    lottieRef={lottieRef}
                    animationData={soundwaves}
                    autoPlay={false}
                    className='companion-lottie'
                  />
                </div>
            </div>
            <p className='font-bold text-2xl'>{name}</p>
        </div>
        <div className='user-section'>
          <div className='user-avatar'>
                <Image src={userImage} alt={userName} width={130} height={
                  130} className='rounded-lg'
                />
                <p className='font-bold text-2xl'>
                  {userName}
                </p>
          </div>
          <button className='btn-mic' onClick={toggleMicrophone} disabled={callStatus !== CallStatus.ACTIVE} >
                <Image src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'} alt='mic' width={36} height={36} />
                <p className='max-sm:hidden'>
                  {isMuted ? 'Turn on microphone' : 'Turn off microphone'}
                </p>
          </button>
          <button 
            className={cn('rounded-lg py-2 cursor-pointer transition-colors w-full text-white', 
              callStatus === CallStatus.ACTIVE ? 'bg-red-700': 'bg-primary', 
              callStatus === CallStatus.CONNECTING && 'animate-pulse',
              callStatus === CallStatus.ERROR && 'bg-red-600'
            )} 
            onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}
            disabled={callStatus === CallStatus.CONNECTING}
          >
              {callStatus === CallStatus.ACTIVE ? "End Session" : 
               callStatus === CallStatus.CONNECTING ? 'Connecting' : 
               callStatus === CallStatus.ERROR ? 'Retry Session' : 'Start Session' }
          </button>
        </div>
      </section>
      <section className='transcript'>
        <div className='transcript-message no-scrollbar'>
            {messages.map((message, index) => {
              if(message.role === 'assistant') {
                return (
                  <p key={index} className='max-sm:text-sm'>
                    {name.split(' ')[0]}: {message.content}
                  </p>
                )
              } else {
                return <p key={index} className='text-primary max-sm:text-sm'>
                  {userName}: {message.content}
                </p>
              }
            })}
        </div>
        <div className='transcript-fade' />
      </section>
    </section>
  )
}

export default CompanionComponent
