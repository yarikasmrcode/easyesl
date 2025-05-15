"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';   // add at the top with your imports


export default function Home() {

  const lessons = [
    {
      id: 1,
      title: "In love with AI",
      image: "https://jhugssjoftnwlyqthzwg.supabase.co/storage/v1/object/sign/images/no_internet_a2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U0NTBiNTNiLWVjMTAtNGM3ZS05Mzk5LTM3N2I2YmU3YTU5MyJ9.eyJ1cmwiOiJpbWFnZXMvbm9faW50ZXJuZXRfYTIucG5nIiwiaWF0IjoxNzQ3MjQ2OTQ4LCJleHAiOjE3Nzg3ODI5NDh9.YliTZAfiezsghz82jzR9EPMeup0GW-0OqTGMkS56SxI",
      description: "Explore the world of AI with fun activities and engaging tasks.",
      level: "B1 / Intermediate",
      category: "Speaking Class",
      lesson_type: "Conversation",
      subscription: "Pro",
      duration: "60 min",
      format: "PDF + PPT",
    },
    {
      id: 2,
      title: "Rules are rules",
      image: "https://jhugssjoftnwlyqthzwg.supabase.co/storage/v1/object/sign/images/no_internet_a2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U0NTBiNTNiLWVjMTAtNGM3ZS05Mzk5LTM3N2I2YmU3YTU5MyJ9.eyJ1cmwiOiJpbWFnZXMvbm9faW50ZXJuZXRfYTIucG5nIiwiaWF0IjoxNzQ3MjQ2OTQ4LCJleHAiOjE3Nzg3ODI5NDh9.YliTZAfiezsghz82jzR9EPMeup0GW-0OqTGMkS56SxI",
      description: "Master modal verbs with exercises and practice scenarios.",
      level: "A2 / Pre-Intermediate",
      category: "Standard",
      lesson_type: "Grammar",
      subscription: "Basic",
      duration: "60 min",
      format: "PDF only",
    },
    {
      id: 3,
      title: "Rules are rules",
      image: "https://jhugssjoftnwlyqthzwg.supabase.co/storage/v1/object/sign/images/no_internet_a2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U0NTBiNTNiLWVjMTAtNGM3ZS05Mzk5LTM3N2I2YmU3YTU5MyJ9.eyJ1cmwiOiJpbWFnZXMvbm9faW50ZXJuZXRfYTIucG5nIiwiaWF0IjoxNzQ3MjQ2OTQ4LCJleHAiOjE3Nzg3ODI5NDh9.YliTZAfiezsghz82jzR9EPMeup0GW-0OqTGMkS56SxI",
      description: "Master modal verbs with exercises and practice scenarios.",
      level: "A2 / Pre-Intermediate",
      category: "Standard",
      lesson_type: "Grammar",
      subscription: "Basic",
      duration: "60 min",
      format: "PDF only",
    },
    {
      id: 4,
      title: "Rules are rules",
      image: "https://jhugssjoftnwlyqthzwg.supabase.co/storage/v1/object/sign/images/no_internet_a2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U0NTBiNTNiLWVjMTAtNGM3ZS05Mzk5LTM3N2I2YmU3YTU5MyJ9.eyJ1cmwiOiJpbWFnZXMvbm9faW50ZXJuZXRfYTIucG5nIiwiaWF0IjoxNzQ3MjQ2OTQ4LCJleHAiOjE3Nzg3ODI5NDh9.YliTZAfiezsghz82jzR9EPMeup0GW-0OqTGMkS56SxI",
      description: "Master modal verbs with exercises and practice scenarios.",
      level: "A2 / Pre-Intermediate",
      category: "Standard",
      lesson_type: "Grammar",
      subscription: "Basic",
      duration: "60 min",
      format: "PDF only",
    },
    {
      id: 5,
      title: "Rules are rules",
      image: "https://jhugssjoftnwlyqthzwg.supabase.co/storage/v1/object/sign/images/no_internet_a2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U0NTBiNTNiLWVjMTAtNGM3ZS05Mzk5LTM3N2I2YmU3YTU5MyJ9.eyJ1cmwiOiJpbWFnZXMvbm9faW50ZXJuZXRfYTIucG5nIiwiaWF0IjoxNzQ3MjQ2OTQ4LCJleHAiOjE3Nzg3ODI5NDh9.YliTZAfiezsghz82jzR9EPMeup0GW-0OqTGMkS56SxI",
      description: "Master modal verbs with exercises and practice scenarios.",
      level: "A2 / Pre-Intermediate",
      category: "Standard",
      lesson_type: "Grammar",
      subscription: "Basic",
      duration: "60 min",
      format: "PDF only",
    },
    {
      id: 6,
      title: "Rules are rules",
      image: "https://jhugssjoftnwlyqthzwg.supabase.co/storage/v1/object/sign/images/no_internet_a2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U0NTBiNTNiLWVjMTAtNGM3ZS05Mzk5LTM3N2I2YmU3YTU5MyJ9.eyJ1cmwiOiJpbWFnZXMvbm9faW50ZXJuZXRfYTIucG5nIiwiaWF0IjoxNzQ3MjQ2OTQ4LCJleHAiOjE3Nzg3ODI5NDh9.YliTZAfiezsghz82jzR9EPMeup0GW-0OqTGMkS56SxI",
      description: "Master modal verbs with exercises and practice scenarios.",
      level: "A2 / Pre-Intermediate",
      category: "Standard",
      lesson_type: "Grammar",
      subscription: "Basic",
      duration: "60 min",
      format: "PDF only",
    },
    {
      id: 7,
      title: "Rules are rules",
      image: "https://jhugssjoftnwlyqthzwg.supabase.co/storage/v1/object/sign/images/no_internet_a2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U0NTBiNTNiLWVjMTAtNGM3ZS05Mzk5LTM3N2I2YmU3YTU5MyJ9.eyJ1cmwiOiJpbWFnZXMvbm9faW50ZXJuZXRfYTIucG5nIiwiaWF0IjoxNzQ3MjQ2OTQ4LCJleHAiOjE3Nzg3ODI5NDh9.YliTZAfiezsghz82jzR9EPMeup0GW-0OqTGMkS56SxI",
      description: "Master modal verbs with exercises and practice scenarios.",
      level: "A2 / Pre-Intermediate",
      category: "Standard",
      lesson_type: "Grammar",
      subscription: "Basic",
      duration: "60 min",
      format: "PDF only",
    },
    {
      id: 8,
      title: "Rules are rules",
      image: "https://jhugssjoftnwlyqthzwg.supabase.co/storage/v1/object/sign/images/no_internet_a2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U0NTBiNTNiLWVjMTAtNGM3ZS05Mzk5LTM3N2I2YmU3YTU5MyJ9.eyJ1cmwiOiJpbWFnZXMvbm9faW50ZXJuZXRfYTIucG5nIiwiaWF0IjoxNzQ3MjQ2OTQ4LCJleHAiOjE3Nzg3ODI5NDh9.YliTZAfiezsghz82jzR9EPMeup0GW-0OqTGMkS56SxI",
      description: "Master modal verbs with exercises and practice scenarios.",
      level: "A2 / Pre-Intermediate",
      category: "Standard",
      lesson_type: "Grammar",
      subscription: "Basic",
      duration: "60 min",
      format: "PDF only",
    },
    {
      id: 9,
      title: "Rules are rules",
      image: "https://jhugssjoftnwlyqthzwg.supabase.co/storage/v1/object/sign/images/no_internet_a2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U0NTBiNTNiLWVjMTAtNGM3ZS05Mzk5LTM3N2I2YmU3YTU5MyJ9.eyJ1cmwiOiJpbWFnZXMvbm9faW50ZXJuZXRfYTIucG5nIiwiaWF0IjoxNzQ3MjQ2OTQ4LCJleHAiOjE3Nzg3ODI5NDh9.YliTZAfiezsghz82jzR9EPMeup0GW-0OqTGMkS56SxI",
      description: "Master modal verbs with exercises and practice scenarios.",
      level: "A2 / Pre-Intermediate",
      category: "Standard",
      lesson_type: "Grammar",
      subscription: "Basic",
      duration: "60 min",
      format: "PDF only",
    }
  ];

  return (
    <div className="mt-5">

      {/* Hero Section */}
      <section className="w-[98%] mx-auto flex items-center justify-center min-h-[60vh] text-center 
      bg-gradient-to-r from-[#fed7aa] to-[#fbcfe8] 
      rounded-2xl shadow-xl px-6 sm:px-12 mt-[-60px] sm:mt-[-95px]">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl sm:text-5xl font-extrabold text-[#111827] mt-12 sm:mt-20 mb-4 sm:mb-6">
            ESL Plans That Save Your Time 🚀
          </h1>
          <p className="text-lg sm:text-lg text-[#111827]">
            We make lessons that save your time and energy, so you can be more creative and productive. ✨
          </p>

        </div>
      </section>

      {/* ESL Lesson Plans Section */}
      <section className="w-[98%] mx-auto flex flex-col md:flex-row items-center gap-8 bg-transparent p-0 shadow-none my-12">
      {/* Left side: Carousel */}
      <div className="w-full md:w-2/3 p-4 sm:p-6 rounded-2xl shadow-none relative">
        <Carousel
        plugins={[
          Autoplay({ delay: 3000, stopOnInteraction: false }) // moves every 3 sec
        ]}
        className="w-full">  
        <CarouselContent className="-ml-3">
          {lessons.map((lesson) => (
            <CarouselItem key={lesson.id} className="basis-[40%] flex justify-center">

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 w-full max-w-md">
        
                  <div className="rounded-xl overflow-hidden mb-4">
                    <Image
                      src={lesson.image}
                      alt={lesson.title}
                      width={400}
                      height={160}
                      className="w-full h-40 object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{lesson.description}</p>

                  <div className="text-xs text-gray-700 space-y-1 mb-4">
                    <p>📚 <span className="font-semibold">Level:</span> {lesson.level}</p>
                    <p>🏷️ <span className="font-semibold">Category:</span> {lesson.category}</p>
                    <p>📖 <span className="font-semibold">Type:</span> {lesson.lesson_type}</p>
                    <p>💳 <span className="font-semibold">Subscription:</span> {lesson.subscription}</p>
                    <p>⏳ <span className="font-semibold">Duration:</span> {lesson.duration}</p>
                    <p>📂 <span className="font-semibold">Format:</span> {lesson.format}</p>
                  </div>

                
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
    </Carousel>
  </div>

  {/* Right side: Text + Button */}
  <div className="w-full md:w-1/3">
    <h2 className="text-3xl font-bold text-[#111827] mb-4">Engage Your Students 🎒</h2>
    <p className="text-[#4b5563] mb-6">
      Access ready-to-use ESL lesson plans designed for teachers who want to make their classes fun, interactive, and educational. 📝
    </p>
    <Link href="/library">
      <button className="px-6 py-3 rounded-full text-white bg-[#3b82f6] hover:bg-[#2563eb] shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
        Browse Plans 📥
      </button>
    </Link>

  </div>
</section>







      {/* Features Section */}
      <section className="w-[98%] mx-auto bg-[#f9fafb] p-6 sm:p-12 rounded-2xl shadow-md my-12">
        <h2 className="text-4xl font-extrabold text-[#111827] text-center mb-8">✨ Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-3xl shadow transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🎨 Interactive Lessons</h3>
            <p className="text-[#4b5563]">
              Keep your students engaged with creative and interactive lesson activities. 🎉
            </p>
          </div>
          <div className="p-6 bg-white rounded-3xl shadow transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🛠️ Made by Professionals</h3>
            <p className="text-[#4b5563]">
               Our lessons are created by a team of experienced teachers and methodologists who truly know their craft.🧰
            </p>
          </div>
          <div className="p-6 bg-white rounded-3xl shadow transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🚀 Ready-to-Use Plans</h3>
            <p className="text-[#4b5563]">
              Download lesson plans and start teaching immediately with minimal prep. ⏱️
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-[98%] mx-auto bg-[#f9fafb] p-6 sm:p-12 rounded-2xl shadow-md my-12">
        <h2 className="text-4xl font-extrabold text-[#111827] text-center mb-8">💰 Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Basic Plan */}
          <div className="p-6 bg-white rounded-2xl shadow transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Basic</h3>
            <p className="text-4xl font-extrabold text-center mb-4">$0.99/month</p>
            <ul className="text-[#4b5563] mb-6 space-y-2">
              <li>✅ Access to 10 lesson plans</li>
              <li>✅ Downloadable PDFs 📄</li>
              <li>✅ Email Support 📧</li>
            </ul>
            <div className="text-center">
              <button className="px-6 py-2 rounded-2xl bg-black text-white hover:bg-[#374151] transition">
                Get Basic 💼
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="p-6 bg-white rounded-2xl shadow transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center"> Pro</h3>
            <p className="text-4xl font-extrabold text-center mb-4">$0.99/month</p>
            <ul className="text-[#4b5563] mb-6 space-y-2">
              <li>✅ Access to 50 lesson plans</li>
              <li>✅ Downloadable PDFs & PPTs 📊</li>
              <li>✅ Priority Email Support 🚨</li>
            </ul>
            <div className="text-center">
              <button className="px-6 py-2 rounded-2xl bg-black text-white hover:bg-[#374151] transition">
                Get Pro ⭐
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="p-6 bg-white rounded-2xl shadow transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Premium</h3>
            <p className="text-4xl font-extrabold text-center mb-4">$0.99/month</p>
            <ul className="text-[#4b5563] mb-6 space-y-2">
              <li>✅ Unlimited Lesson Plans ♾️</li>
              <li>✅ All Downloadable Formats 📝</li>
              <li>✅ 24/7 Dedicated Support 🕒</li>
            </ul>
            <div className="text-center">
              <button className="px-6 py-2 rounded-2xl bg-black text-white hover:bg-[#374151] transition">
                Get Premium 🚀
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
