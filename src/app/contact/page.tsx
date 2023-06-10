'use client'
import React from "react";
import Image from "next/image";
const ContactPage = () => {
  return (    <main className="flex min-h-screen flex-col items-center justify-start p-8">

<Image
				src="/images/arora_logo.png"
				width={400}
				height={100}
				alt="ARORA Sim"
			/>
      <br/>
        <p>Contact Dean Read for more information: dean dot reed at ucf dot edu
    </p>
<br/>
    <Image
				src="/images/arora_car.png"
				width={200}
				height={100}
				alt="ARORA Sim"
			/>

</main>)
};
export default ContactPage;
