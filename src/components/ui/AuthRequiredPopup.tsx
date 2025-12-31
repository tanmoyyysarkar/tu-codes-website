"use client";

import { useRouter } from "next/navigation";

interface AuthRequiredPopupProps {
  onClose: () => void;
}

export default function AuthRequiredPopup({ onClose }: AuthRequiredPopupProps) {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-center text-xl font-semibold text-gray-900 mb-2">
          Sign In Required
        </h3>
        <p className="text-center text-sm text-gray-600 mb-6">
          You need to be signed in to perform this action. Please sign in to continue.
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSignIn}
            className="flex-1 rounded-xl bg-[#1a73e8] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1558b0] transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
