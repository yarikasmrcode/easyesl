"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

type Lesson = {
  id: string;
  title: string;
  image?: string;
  overview?: string;
  level?: string;
  category?: string;
  duration?: string;
  learning_fields?: string;
  canva_url?: string;
  file_path?: string;
};

const LessonDetail = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    if (id) {
      const fetchLessonDetails = async () => {
        const { data, error } = await supabase
          .from("lesson")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching lesson details:", error.message);
        } else {
          setLesson(data);
        }
      };

      fetchLessonDetails();
    }
  }, [id]);

  if (!lesson) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700">
        <p className="text-2xl font-semibold">Loading lesson details... ⏳</p>
      </div>
    );
  }

  // ✨ Split learning fields into an array
  const learningFields = lesson.learning_fields
    ?.split(",")
    .map((field) => field.trim());

  return (
    <div className="w-[98%] max-w-screen-2xl mx-auto bg-gradient-to-r from-[#fed7aa] to-[#fbcfe8] py-16 px-12 text-gray-900 rounded-2xl shadow-lg mt-[-75px] relative">
      <div className="w-[92%] ml-14 pt-14">
        {/* Title and Image */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col md:flex-row items-start md:space-x-10 mb-16">
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <h1 className="text-4xl font-extrabold mb-6">{lesson.title}</h1>
            {lesson.image && (
              <Image
                src={lesson.image}
                alt={lesson.title}
                width={400}
                height={400}
                className="w-full max-w-[400px] h-[400px] object-cover rounded-xl shadow-md"
              />
            )}
          </div>

          {/* Lesson Info */}
          <div className="w-full md:w-3/5">
            <div className="flex flex-wrap gap-3 mb-8">
              {lesson.level && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-900 border border-green-200 shadow-sm">
                  🏫 {lesson.level}
                </span>
              )}
              {lesson.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-900 border border-yellow-200 shadow-sm">
                  📂 {lesson.category}
                </span>
              )}
              {lesson.duration && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-900 border border-blue-200 shadow-sm">
                  ⏳ {lesson.duration}
                </span>
              )}
            </div>

            {/* Lesson Overview */}
            <div className="mb-6">
              <h2 className="text-3xl font-semibold mb-3">📖 Lesson Overview</h2>
              <p className="text-gray-700 bg-yellow-50 p-4 rounded-lg shadow-sm text-md">
                {lesson.overview || "No overview provided"}
              </p>
            </div>

            {/* Learning Fields */}
            <div className="flex flex-wrap gap-3 mb-6">
              {learningFields?.map((field, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-black-900 border border-black-200 shadow-sm"
                >
                  💡 {field}
                </span>
              ))}
            </div>

            {/* Canva Button */}
            {lesson.canva_url && (
              <a
                href={lesson.canva_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-blue-900 bg-blue-300 rounded-full shadow-md hover:bg-blue-400 hover:shadow-lg"
              >
                🎨 Open in Canva
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LessonDetail;
