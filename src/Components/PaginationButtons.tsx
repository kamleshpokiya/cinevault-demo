"use client";
import { Pagination } from "@/actions/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const NextPageButton = ({ pagination }: { pagination: Pagination }) => {
  const router = useRouter();
  const handlePageChange = () => {
    if (pagination.currentPage < pagination.totalPages) {
      const nextPage = pagination.currentPage + 1;
      router.push(`?page=${nextPage}`);
    }
  };
  return (
    <button
      className={`
        ${
          pagination.currentPage === pagination.totalPages
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100"
        }`}
      disabled={pagination.currentPage === pagination.totalPages}
      onClick={handlePageChange}
    >
      Next
    </button>
  );
};

export const PrevPageButton = ({ pagination }: { pagination: Pagination }) => {
  const router = useRouter();
  const handlePageChange = () => {
    if (pagination.currentPage > 1) {
      const page = pagination.currentPage - 1;
      router.push(`?page=${page}`);
    }
  };
  return (
    <button
      className={`
        ${
          pagination.currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100"
        }`}
      disabled={pagination.currentPage === pagination.totalPages}
      onClick={handlePageChange}
    >
      Prev
    </button>
  );
};

export const PaginationButtons = ({
  currentPage,
  label,
  className = "",
}: {
  currentPage: number | string;
  label: string;
  className?: string;
}) => {
  const baseStyles = `px-[10px] rounded text-white text-nowrap text-[16px] h-8 w-8 flex items-center justify-center ${
    currentPage.toString() === label ? "bg-primary" : "bg-cardColor"
  }`;
  return (
    <Link href={`?page=${label}`} className={baseStyles + className}>
      {label}
    </Link>
  );
};
