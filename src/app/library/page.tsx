"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from 'next/image';   // add at top of file


const ITEMS_PER_PAGE = 21; // Number of lessons per page

export default function Library() {
    type Lesson = {
    id: string;
    title: string;
    image?: string;
    description?: string;
    level?: string;
    category?: string;
    lesson_type?: string;
    subscription?: string;
    duration?: string;
    format?: string;
  };

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [filteredLessons, setFilteredLessons] = useState<Lesson[]>([]);
  const [paginatedLessons, setPaginatedLessons] = useState<Lesson[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

    type Filters = {
    level: string[];
    category: string[];
    lesson_type: string[];
    subscription: string[];
    duration: string[];
    format: string[];
  };

  const [filters, setFilters] = useState<Filters>({
    level: [],
    category: [],
    lesson_type: [],
    subscription: [],
    duration: [],
    format: [],
  });


  type FilterOptions = {
  levels: string[];
  categories: string[];
  lesson_types: string[];
  subscriptions: string[];
  durations: string[];
  formats: string[];
};

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    levels: [],
    categories: [],
    lesson_types: [],
    subscriptions: [],
    durations: [],
    formats: [],
  });

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const { data: lessonsData, error } = await supabase.from("lesson").select("*");
        if (error) {
          console.error("Error fetching lessons:", error.message);
        } else {
          setLessons(lessonsData || []);
          setFilteredLessons(lessonsData || []); // Initialize filtered lessons

          // Extract unique filter options from the database
          let levels = [...new Set(lessonsData.map((lesson) => lesson.level))];

          // Custom order for levels
          const levelOrder = ["A1 / Elementary", "A2 / Pre-Intermediate", "B1 / Intermediate", "B2 / Upper-Intermediate", "C1 / Advanced", "C2 / Proficiency"];
          levels = levels.sort((a, b) => levelOrder.indexOf(a) - levelOrder.indexOf(b));  // Sort based on custom order

          // Remove duplicates from categories using a Set
          const categories = [...new Set(lessonsData.map((lesson) => lesson.category))];

          const lesson_types = [...new Set(lessonsData.map((lesson) => lesson.lesson_type))];
          const subscriptions = [...new Set(lessonsData.map((lesson) => lesson.subscription))];
          const durations = [...new Set(lessonsData.map((lesson) => lesson.duration))];
          const formats = [...new Set(lessonsData.map((lesson) => lesson.format))];

          setFilterOptions({
            levels,
            categories,
            lesson_types,
            subscriptions,
            durations,
            formats,
          });
        }
      } catch (err) {
        console.error("Unexpected error fetching lessons:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  useEffect(() => {
    // Apply filters and search term
    const filtered = lessons.filter((lesson) => {
      return (
        (filters.level.length === 0 || filters.level.includes(lesson.level ?? "")) &&
        (filters.category.length === 0 || filters.category.includes(lesson.category ?? "")) &&
        (filters.lesson_type.length === 0 || filters.lesson_type.includes(lesson.lesson_type ?? "")) &&
        (filters.subscription.length === 0 || filters.subscription.includes(lesson.subscription ?? "")) &&
        (filters.duration.length === 0 || filters.duration.includes(lesson.duration ?? "")) &&
        (filters.format.length === 0 || filters.format.includes(lesson.format ?? "")) &&
        (lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lesson.description?.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setFilteredLessons(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [filters, searchTerm, lessons]);

  useEffect(() => {
    // Paginate filtered lessons
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setPaginatedLessons(filteredLessons.slice(startIndex, endIndex));
  }, [filteredLessons, currentPage]);

  useEffect(() => {
    // Scroll to top when currentPage changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  

  const handleFilterChange = (key: keyof Filters, value: string) => {
  setFilters((prev) => {
    const updatedFilters = { ...prev };

    if (Array.isArray(updatedFilters[key])) {
      if (updatedFilters[key].includes(value)) {
        updatedFilters[key] = updatedFilters[key].filter((item) => item !== value);
      } else {
        updatedFilters[key] = [...updatedFilters[key], value];
      }
    }

    return updatedFilters;
  });
};

  const totalPages = Math.ceil(filteredLessons.length / ITEMS_PER_PAGE);

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-gradient-to-r
       from-[#fed7aa] to-[#fbcfe8] min-h-screen">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="w-[98%] max-w-screen-2xl mx-auto bg-gradient-to-r from-[#fed7aa] to-[#fbcfe8]
      py-16 px-12 text-gray-900 mb-10 rounded-2xl shadow-lg mt-[-75px] relative">

        <div className="mt-24 mx-auto w-full max-w-screen-lg bg-white rounded-2xl p-4 shadow-md">

          {/* Heading and Search Input */}
          <div className="flex flex-col items-center mb-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Your Perfect Lesson! 🎯</h2>
            <input
              type="text"
              placeholder="🔍 Search for a lesson..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100 transition"
            />
          </div>

          {/* Filter Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {/* Level Filter */}
            <div className="p-4 bg-gray-50 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-base font-semibold text-gray-800 mb-2">📚 Level</h3>
              {filterOptions.levels.map((level) => (
                <div key={level} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id={`level-${level}`}
                    value={level}
                    checked={filters.level.includes(level)}
                    onChange={() => handleFilterChange("level", level)}
                    className="w-4 h-4 accent-gray-600 rounded"
                  />
                  <label htmlFor={`level-${level}`} className="text-gray-700 text-sm">
                    {level}
                  </label>
                </div>
              ))}
            </div>

            {/* Category Filter */}
            <div className="p-4 bg-gray-50 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-base font-semibold text-gray-800 mb-2">🏷️ Category</h3>
              {filterOptions.categories.map((category) => (
                <div key={category} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    value={category}
                    checked={filters.category.includes(category)}
                    onChange={() => handleFilterChange("category", category)}
                    className="w-4 h-4 accent-gray-600 rounded"
                  />
                  <label htmlFor={`category-${category}`} className="text-gray-700 text-sm">
                    {category}
                  </label>
                </div>
              ))}
            </div>

            {/* Lesson Type Filter */}
            <div className="p-4 bg-gray-50 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-base font-semibold text-gray-800 mb-2">📖 Lesson Type</h3>
              {filterOptions.lesson_types.map((type) => (
                <div key={type} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id={`lesson_type-${type}`}
                    value={type}
                    checked={filters.lesson_type.includes(type)}
                    onChange={() => handleFilterChange("lesson_type", type)}
                    className="w-4 h-4 accent-gray-600 rounded"
                  />
                  <label htmlFor={`lesson_type-${type}`} className="text-gray-700 text-sm">
                    {type}
                  </label>
                </div>
              ))}
            </div>

            {/* Format and Subscription Filters */}
            <div className="p-4 bg-gray-50 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-base font-semibold text-gray-800 mb-2">💾 Format</h3>
              {filterOptions.formats.map((format) => (
                <div key={format} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id={`format-${format}`}
                    value={format}
                    checked={filters.format.includes(format)}
                    onChange={() => handleFilterChange("format", format)}
                    className="w-4 h-4 accent-gray-600 rounded"
                  />
                  <label htmlFor={`format-${format}`} className="text-gray-700 text-sm">
                    {format}
                  </label>
                </div>
              ))}

              <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">💳 Subscription</h3>
              {filterOptions.subscriptions.map((subscription) => (
                <div key={subscription} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id={`subscription-${subscription}`}
                    value={subscription}
                    checked={filters.subscription.includes(subscription)}
                    onChange={() => handleFilterChange("subscription", subscription)}
                    className="w-4 h-4 accent-gray-600 rounded"
                  />
                  <label htmlFor={`subscription-${subscription}`} className="text-gray-700 text-sm">
                    {subscription}
                  </label>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-300 hover:shadow-xl hover:scale-[1.02] transition-transform transform cursor-pointer"
            onClick={() => window.location.href = `/lesson/${lesson.id}`}
          >
            {/* Image Section */}
            <div className="rounded-2xl overflow-hidden mb-4">
             {lesson.image && (
                <Image
                  src={lesson.image}
                  alt={lesson.title}
                  width={400}
                  height={208}
                  className="w-full h-52 object-cover transition-transform transform hover:scale-110"
                />
              )}

            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{lesson.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 text-sm line-clamp-3">
              {lesson.description}
            </p>

            {/* Lesson Details */}
            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <p>📚 <span className="font-semibold">Level:</span> {lesson.level || "N/A"}</p>
              <p>🏷️ <span className="font-semibold">Category:</span> {lesson.category || "N/A"}</p>
              <p>📖 <span className="font-semibold">Type:</span> {lesson.lesson_type || "N/A"}</p>
              <p>💳 <span className="font-semibold">Subscription:</span> {lesson.subscription || "N/A"}</p>
              <p>⏳ <span className="font-semibold">Duration:</span> {lesson.duration || "N/A"}</p>
              <p>📂 <span className="font-semibold">Format:</span> {lesson.format || "N/A"}</p>
            </div>

            {/* Show Lesson Button */}
            <div className="text-center">
              <Link href={`/lesson/${lesson.id}`}>
              <button
                onClick={(e) => e.stopPropagation()}
                className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full hover:bg-blue-200 transition"
              >
                Show Lesson 🚀
              </button>

              </Link>
            </div>
          </div>
        ))}
      </div>


     {/* Pagination Controls */}
      <div className="mt-8 flex justify-center items-center space-x-4">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-full text-sm font-semibold ${
          currentPage === 1 
            ? "bg-blue-50 text-blue-300 cursor-not-allowed" 
            : "bg-blue-100 text-blue-800 hover:bg-blue-200 transition"
        }`}
      >
        Previous
      </button>

      <span className="text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-full text-sm font-semibold ${
          currentPage === totalPages 
            ? "bg-blue-50 text-blue-300 cursor-not-allowed" 
            : "bg-blue-100 text-blue-800 hover:bg-blue-200 transition"
        }`}
      >
        Next
      </button>

      </div>

    </div >
  );
}
