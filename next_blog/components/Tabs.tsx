import Link from "next/link";
import React from "react";
import { ICategory } from "../types";
import { useRouter } from "next/router";

interface IPropTypes {
    categories: ICategory[];
}

const Tabs = ({ categories }: IPropTypes) => {
    const router = useRouter();
    const isActiveLink = (category: ICategory) => {
        return category.attributes.Slug === router.query.category;
    };
    return (
        <div className="my-8 flex items-center justify-between border-b-2">
            <ul className="flex items-center">
                <li
                    className={
                        "mr-6 pb-6 border-b-4 rounded-sm " +
                        `${
                            router.pathname === "/"
                                ? "border-primary-dark text-primary-dark"
                                : "border-white text-gray-400"
                        }`
                    }
                >
                    <Link href="#">Recent</Link>
                </li>
                {categories.map((category) => {
                    return (
                        <li
                            className={
                                "mr-6 pb-6 border-b-4 rounded-sm" +
                                `${
                                    isActiveLink(category)
                                        ? "border-primary-dark text-primary-dark"
                                        : "border-white text-gray-500"
                                }`
                            }
                        >
                            <Link href="#">{category.attributes.Title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Tabs;
