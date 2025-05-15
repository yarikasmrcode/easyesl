import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="w-[98%] container mx-auto py-12 px-6 max-w-screen-2xl bg-gradient-to-r
         from-[#fed7aa] to-[#fbcfe8] sm:px-12 text-gray-900 mb-10 
         rounded-2xl shadow-lg mt-[-75px] relative">
      <div className="w-full mx-auto mt-16 max-w-md bg-[#3330] p-6">

        {/* Clerk SignIn Component */}

        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/signup"
          appearance={{
            elements: {
              card: "w-full max-w-2xl p-10 rounded-2xl", // Increase max-width and padding
              headerTitle: "text-2xl font-extrabold",    // Larger header title
              footer: {
                display: "none",
              },
            },
          }}
        />




        {/* Sign Up Prompt */}
        <div className="mt-6 text-center text-gray-600">
          Do not have an account?{" "}
          <a
            href="/signup"
            className="text-[#ff6b6b] font-medium hover:text-[#ff4466] hover:underline transition"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
