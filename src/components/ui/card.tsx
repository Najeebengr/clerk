'use client';
import React from 'react';
import CardHeader from '../cardHeader';
import SocialLogins from './socialLogins';
import Separator from '../seperator';
import CardFooter from '../cardFooter';
import Form from './form';

function Card({ title }: { title: string }) {

  // Form submission logic
 
  return (
    <div>
      <div className="card max-w-[25rem] w-full">
        <CardHeader title={title} />
        <SocialLogins />
        <Separator />
        <Form title={title} />
      </div>
      <CardFooter title={title} />
    </div>
  );
}

export default Card;
