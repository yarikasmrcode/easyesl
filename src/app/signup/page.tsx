import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="w-[98%] container mx-auto py-12 px-6 max-w-screen-2xl bg-gradient-to-r
         from-[#fed7aa] to-[#fbcfe8] sm:px-12 text-gray-900 mb-10 
         rounded-2xl shadow-lg mt-[-75px] relative">
      <div className="w-full mx-auto mt-16 max-w-md bg-[#3330] p-6 ">
        <SignUp
          path="/signup"
          routing="path"
          signInUrl="/login"
          appearance={{
            elements: { 
              card: "w-full max-w-2xl p-10 rounded-2xl", // Increase max-width and padding
              headerTitle: "text-2xl font-extrabold",    // Larger header title
              footer: {
                display: "none",
              }
            },
          }}
        />
        {/* Offer to Log In */}
        <div className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
          href="/login"
          className="text-[#ff6b6b] font-medium hover:text-[#ff4466] hover:underline transition"
        >
          Log in
        </Link>

        </div>
      </div>
    </div>
  );
}
