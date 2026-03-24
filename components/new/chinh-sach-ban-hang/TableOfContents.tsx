"use client";
import React, { useState } from 'react';
import { List, ChevronRight } from 'lucide-react';
import { tocData } from '../constants/chinh-sach-ban-hang';

interface TocItemProps {
  id: string;
  title: string;
  children?: TocItemProps[];
}

const TocItem: React.FC<{ item: TocItemProps }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false); // Collapsed by default

  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="group">
      <div className="flex items-center">
        {hasChildren && (
          <ChevronRight 
            size={16} 
            className={`mr-2 flex-shrink-0 text-gray-500 cursor-pointer transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <a 
          href={`#${item.id}`} 
          className={`block py-0.5 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 ${!hasChildren ? 'ml-6' : ''}`}
        >
          {item.title}
        </a>
      </div>
      {hasChildren && isOpen && (
        <ul className="pl-6 mt-1 space-y-0.5">
          {item.children?.map(child => <TocItem key={child.id} item={child} />)}
        </ul>
      )}
    </li>
  );
};

const TableOfContents = () => {
  const [isTocOpen, setIsTocOpen] = useState(false);

  return (
    <section className="mb-2 bg-gray-50 p-2 md:p-3 rounded-lg">
      <div 
        className="flex items-center justify-between gap-2 pb-1 cursor-pointer"
        onClick={() => setIsTocOpen(!isTocOpen)}
      >
        <div className="flex items-center gap-3">
          <List size={20} className="text-gray-800" />
          <h2 className="text-base font-bold text-gray-800 leading-tight">Tóm tắt nội dung</h2>
        </div>
        <ChevronRight 
            size={20} 
            className={`text-gray-600 transition-transform duration-300 ${isTocOpen ? 'rotate-90' : ''}`}
        />
      </div>
      {isTocOpen && (
        <nav className="mt-2 max-h-[200px] overflow-y-auto pr-1">
          <ul className="space-y-0.5">
            {tocData.map((item) => <TocItem key={item.id} item={item} />)}
          </ul>
        </nav>
      )}
    </section>
  );
};

export default TableOfContents;