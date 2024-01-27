import React, { useEffect, useState } from "react";
import { getCategory } from "../../app/slice/categorySlice";
import { useAppDispatch, useAppSelector } from "../../app/hook/hooks";

interface FilterProps {
  handleCategoryClick: (category: string) => void;
}
const Filter: React.FC<FilterProps> = ({ handleCategoryClick }) => {
  const category = useAppSelector((state) => state.category.data);
  const dispatch = useAppDispatch();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleAllCategoriesClick = () => {
    setSelectedCategory(null);
    handleCategoryClick(""); // Deselects all categories
  };
  const handleClick = (clickedCategory: string) => {
    if (selectedCategory === clickedCategory) {
      handleCategoryClick(""); // Deselect the category if it's already selected
      setSelectedCategory(null);
    } else {
      handleCategoryClick(clickedCategory);
      setSelectedCategory(clickedCategory);
    }
  };

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-medium text-[16px] text-partialcolor ">Categories</p>
        <p className="text-[15px] text-[#595959] font-normal">Reset</p>
      </div>
      <div className="mt-3">
        <div className="flex justify-between ">
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              checked={!selectedCategory}
              className="w-[30px] h-[30px]  bg-[#B3D4E5]  rounded-[8px]  appearance-none"
              onChange={handleAllCategoriesClick}
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-filter-ablecolor dark:text-gray-300"
            >
              All Categories
            </label>
          </div>
          <p className="font-normal text-[16px] text-filter-ablecolor">10</p>
        </div>

        {category?.map((category: string) => (
          <div key={category} className="flex justify-between">
            <div className="flex items-center mb-4">
              <input
                id={`category-checkbox-${category}`}
                type="checkbox"
                value={category}
                checked={selectedCategory === category}
                className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none"
                onChange={() => handleClick(category)}
              />
              <label
                htmlFor={`category-checkbox-${category}`}
                className="ms-2 text-sm font-medium text-filter-ablecolor dark:text-gray-300"
              >
                {category}
              </label>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-t-1 border-[#9D9D9D]" />
      <div>
        <div className=" mt-1">
          <p className="font-medium text-[16px] text-partialcolor">
            Product type
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[15px] text-[#595959] font-normal">0 Selected</p>
          <p className="text-[15px] text-[#595959] font-normal">Reset</p>
        </div>
        <div className="mt-3">
          <div className="flex justify-between ">
            <div className="flex justify-between">
              <div className="flex items-center mb-4">
                <input
                  id={`category-checkbox-${category}`}
                  type="checkbox"
                  value={category}
                  className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none"
                />
                <label
                  htmlFor={`category-checkbox-${category}`}
                  className="ms-2 text-sm font-medium text-filter-ablecolor dark:text-gray-300"
                >
                  in Stock
                </label>
              </div>
            </div>
            <p className="font-normal text-[16px] text-filter-ablecolor">10</p>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-[#9D9D9D]" />
      <div>
        <div className=" mt-1">
          <p className="font-medium text-[16px] text-partialcolor">Brand</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[15px] text-[#595959] font-normal">0 Selected</p>
          <p className="text-[15px] text-[#595959] font-normal">Reset</p>
        </div>
        <div className="mt-3">
          <div className="flex justify-between ">
            <div className="flex justify-between">
              <div className="flex items-center mb-4">
                <input
                  id={`category-checkbox-${category}`}
                  type="checkbox"
                  value={category}
                  className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none"
                />
                <label
                  htmlFor={`category-checkbox-${category}`}
                  className="ms-2 text-sm font-medium text-filter-ablecolor dark:text-gray-300"
                >
                  Smart Watch
                </label>
              </div>
            </div>
            <p className="font-normal text-[16px] text-filter-ablecolor">10</p>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-[#9D9D9D]" />
      <div>
        <div className=" mt-1">
          <p className="font-medium text-[16px] text-partialcolor">Color</p>
        </div>
        <div className="flex flex-wrap mt-1">
          <div className="flex items-center me-4">
            <input
              id="red-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-red-600 bg-red-500 border-red-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600"
            />
          </div>
          <div className="flex items-center me-4">
            <input
              id="green-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-green-600 bg-gray-200 border-red-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex items-center me-4">
            <input
              checked
              id="purple-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-purple-600 bg-gray-200 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex items-center me-4">
            <input
              id="teal-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-teal-600 bg-gray-200 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex items-center me-4">
            <input
              id="yellow-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-yellow-400 bg-gray-200 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex items-center me-4">
            <input
              id="orange-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-orange-500 bg-gray-200 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-[#9D9D9D] mt-2" />
      <div>
        <div className=" mt-1">
          <p className="font-medium text-[16px] text-partialcolor">Brand</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[15px] text-[#595959] font-normal">0 Selected</p>
          <p className="text-[15px] text-[#595959] font-normal">Reset</p>
        </div>
        <div className="mt-3">
          <div className="flex justify-between ">
            <div className="flex justify-between">
              <div className="flex items-center mb-4">
                <input
                  id={`category-checkbox-${category}`}
                  type="checkbox"
                  value={category}
                  className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none"
                />
                <label
                  htmlFor={`category-checkbox-${category}`}
                  className="ms-2 text-sm font-medium text-filter-ablecolor dark:text-gray-300"
                >
                  M
                </label>
              </div>
            </div>
            <p className="font-normal text-[16px] text-filter-ablecolor">10</p>
          </div>
          <div className="flex justify-between ">
            <div className="flex justify-between">
              <div className="flex items-center mb-4">
                <input
                  id={`category-checkbox-${category}`}
                  type="checkbox"
                  value={category}
                  className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none"
                />
                <label
                  htmlFor={`category-checkbox-${category}`}
                  className="ms-2 text-sm font-medium text-filter-ablecolor dark:text-gray-300"
                >
                  X
                </label>
              </div>
            </div>
            <p className="font-normal text-[16px] text-filter-ablecolor">10</p>
          </div>{" "}
          <div className="flex justify-between ">
            <div className="flex justify-between">
              <div className="flex items-center mb-4">
                <input
                  id={`category-checkbox-${category}`}
                  type="checkbox"
                  value={category}
                  className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none"
                />
                <label
                  htmlFor={`category-checkbox-${category}`}
                  className="ms-2 text-sm font-medium text-filter-ablecolor dark:text-gray-300"
                >
                  XX
                </label>
              </div>
            </div>
            <p className="font-normal text-[16px] text-filter-ablecolor">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
