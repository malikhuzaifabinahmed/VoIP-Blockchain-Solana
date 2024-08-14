import { cn } from "@/lib/utils";
import React from "react";
import { PageProps } from "../../.next/types/app/layout";
interface SearchBarProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  className = "",
  ...props
}) => {
  return (
    <div className={cn("form-control", className)}>
      <div className="flex justify-between gap-3 w-full input-group">
        <input
          type="text"
          placeholder="Search"
          className="input-bordered w-full input"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button title="Search" className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0a8 8 0 111.8-1.8L21 21z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
