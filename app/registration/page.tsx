"use client"
import Stepper, { Step } from '../components/gsap/process/StepperProcess';
import React, { useState } from 'react';
import Image from 'next/image';

export default function RegistrationPage() {
  const [name, setName] = useState('');

  return (
    <Stepper
      initialStep={1}
      onStepChange={(step) => {
        console.log(step);
  }}
  onFinalStepCompleted={() => console.log("All steps completed!")}
  backButtonText="Previous"
  nextButtonText="Next"
>
  <Step>
    <h2>Welcome to the React Bits stepper!</h2>
    <p>Check out the next step!</p>
  </Step>
  <Step>
    <h2>Step 2</h2>
    <Image
      style={{ objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }}
      src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
      alt="Funny cat card illustration"
      width={640}
      height={640}
    />
    <p>Custom step content!</p>
  </Step>
  <Step>
    <h2>How about an input?</h2>
    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
  </Step>
  <Step>
    <h2>Final Step</h2>
    <p>You made it!</p>
  </Step>
</Stepper>
  );
}